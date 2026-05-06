import { notFound } from "next/navigation";
import { PdfDetailClient } from "./pdf-detail-client";
import { buildPostMetadata, buildTaskMetadata } from "@/lib/seo";
import { buildPostUrl, fetchTaskPostBySlug, fetchTaskPosts } from "@/lib/task-data";
import { SITE_CONFIG } from "@/lib/site-config";

export const revalidate = 3;

export async function generateStaticParams() {
  const posts = await fetchTaskPosts("pdf", 50);
  if (!posts.length) {
    return [{ slug: "placeholder" }];
  }
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  try {
    const post = await fetchTaskPostBySlug("pdf", resolvedParams.slug);
    return post ? await buildPostMetadata("pdf", post) : await buildTaskMetadata("pdf");
  } catch (error) {
    console.warn("PDF metadata lookup failed", error);
    return await buildTaskMetadata("pdf");
  }
}

export default async function PdfDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  let post = null;
  try {
    post = await fetchTaskPostBySlug("pdf", resolvedParams.slug);
  } catch (error) {
    console.warn("PDF detail lookup failed", error);
  }
  if (!post) {
    notFound();
  }

  const content = post.content && typeof post.content === "object" ? post.content : {};
  const contentAny = content as Record<string, unknown>;
  const fileUrl =
    (typeof contentAny.fileUrl === "string" && contentAny.fileUrl) ||
    (typeof contentAny.pdfUrl === "string" && contentAny.pdfUrl) ||
    "";

  if (!fileUrl || !/^https?:\/\//i.test(fileUrl)) {
    notFound();
  }

  const viewerUrl = `${fileUrl}#toolbar=0&navpanes=0&scrollbar=0`;
  const baseUrl = SITE_CONFIG.baseUrl.replace(/\/$/, "");
  const category =
    typeof contentAny.category === "string" ? contentAny.category : "";
  
  // Use fixed seed for consistent results
  const fixedSeed = post.slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const views = typeof contentAny.views === "number" ? contentAny.views : (Math.abs(fixedSeed) % 10000) + 500;
  const downloads = typeof contentAny.downloads === "number" ? contentAny.downloads : (Math.abs(fixedSeed) % 2000) + 100;
  
  // Generate statistics for related documents on server side
  const generateConsistentRandom = (slug: string, multiplier: number, offset: number) => {
    // Very simple deterministic: sum of character codes
    let sum = 0;
    for (let i = 0; i < slug.length; i++) {
      sum += slug.charCodeAt(i);
    }
    return (sum % multiplier) + offset;
  };
  
  const related = (await fetchTaskPosts("pdf", 6))
    .filter((item) => item.slug !== post.slug)
    .filter((item) => {
      if (!category) return true;
      const itemContent = item.content && typeof item.content === "object" ? item.content : {};
      const itemCategory =
        typeof (itemContent as Record<string, unknown>).category === "string"
          ? (itemContent as Record<string, unknown>).category
          : "";
      return itemCategory === category;
    })
    .slice(0, 3);
  
  // Add statistics to related documents
  const relatedWithStats = related.map(item => ({
    ...item,
    views: generateConsistentRandom(item.slug, 2000, 100),
    downloads: generateConsistentRandom(item.slug, 500, 50)
  }));
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "PDF Library",
        item: `${baseUrl}/pdf`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${baseUrl}/pdf/${post.slug}`,
      },
    ],
  };

  return (
    <PdfDetailClient 
      post={post}
      fileUrl={fileUrl}
      viewerUrl={viewerUrl}
      category={category}
      related={relatedWithStats}
      breadcrumbData={breadcrumbData}
      views={views}
      downloads={downloads}
    />
  );
}
