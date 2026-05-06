"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContentImage } from "@/components/shared/content-image";
import { SchemaJsonLd } from "@/components/seo/schema-jsonld";
import { NavbarShell } from "@/components/shared/navbar-shell";
import { Footer } from "@/components/shared/footer";
import { TaskPostCard } from "@/components/shared/task-post-card";
import { buildPostUrl } from "@/lib/task-data";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface ProfileDetailClientProps {
  post: any;
  content: Record<string, any>;
  logoUrl?: string;
  brandName: string;
  website?: string;
  domain?: string;
  descriptionHtml: string;
  suggestedArticles: any[];
  breadcrumbData: any;
  currentUrl: string;
}

export function ProfileDetailClient({ 
  post, 
  content, 
  logoUrl, 
  brandName, 
  website, 
  domain, 
  descriptionHtml, 
  suggestedArticles, 
  breadcrumbData, 
  currentUrl 
}: ProfileDetailClientProps) {
  const router = useRouter();
  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const handleFollow = () => {
    router.push('/login');
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setShowCopyNotification(true);
      setTimeout(() => setShowCopyNotification(false), 3000);
    } catch (err) {
      console.error('Failed to copy URL:', err);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <NavbarShell />
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <SchemaJsonLd data={breadcrumbData} />
        <section className="rounded-3xl border border-border/60 bg-white/90 p-8 shadow-sm md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-start">
            {/* Left side - Logo and Stats */}
            <div className="space-y-6">
              {/* Logo Card */}
              <div className="relative overflow-hidden rounded-xl border-2 border-green-500/30 bg-gradient-to-br from-green-50 to-white p-4 shadow-sm">
                <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-2xl border-2 border-green-500/50 bg-gradient-to-br from-green-100 to-green-200">
                  {logoUrl ? (
                    <ContentImage src={logoUrl} alt={post.title} fill className="object-cover" sizes="192px" intrinsicWidth={192} intrinsicHeight={192} />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-5xl font-bold text-green-600">
                      {post.title.slice(0, 1).toUpperCase()}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  onClick={handleFollow}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-sm"
                >
                  Follow
                </Button>
                <Button 
                  onClick={handleShare}
                  variant="outline" 
                  className="w-full border-border/60 bg-gradient-to-br from-slate-50 to-white hover:bg-slate-100 shadow-sm"
                >
                  Share
                </Button>
              </div>
              
              {/* Copy Notification */}
              {showCopyNotification && (
                <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 fade-in-0">
                  <div className="rounded-lg border border-border/60 bg-white px-4 py-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm font-medium text-foreground">URL copied to clipboard!</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Right side - Company Info */}
            <div className="space-y-6">
              {/* Company Header */}
              <div className="space-y-2">
                <h1 className="text-4xl font-bold text-foreground sm:text-5xl">{brandName}</h1>
                {content.location ? (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm font-medium">{content.location}</span>
                  </div>
                ) : null}
                {domain ? (
                  <p className="text-sm font-medium text-muted-foreground">{domain}</p>
                ) : null}
              </div>
              
              {/* Story Section */}
              <div className="rounded-2xl border border-border/40 bg-gradient-to-br from-slate-50/50 to-white p-6">
                <h2 className="mb-4 text-lg font-semibold text-foreground">MY STORY</h2>
                <article
                  className="article-content prose prose-slate max-w-none text-base leading-relaxed prose-p:my-3 prose-a:text-primary prose-a:underline prose-strong:font-semibold"
                  dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                />
              </div>
              
              {/* Website Link */}
              {website ? (
                <div className="rounded-2xl border border-border/40 bg-gradient-to-br from-blue-50 to-white p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground">Official Website</h3>
                      <p className="mt-1 font-mono text-sm text-foreground">{website}</p>
                    </div>
                    <Button asChild size="lg" className="px-6">
                      <Link href={website} target="_blank" rel="noopener noreferrer">
                        Visit Site
                      </Link>
                    </Button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {suggestedArticles.length ? (
          <section className="mt-12">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">Suggested articles</h2>
              <Link href="/articles" className="text-sm font-medium text-primary hover:underline">
                View all
              </Link>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {suggestedArticles.slice(0, 3).map((article) => (
                <TaskPostCard
                  key={article.id}
                  post={article}
                  href={buildPostUrl("article", article.slug)}
                  compact
                />
              ))}
            </div>
            <nav className="mt-6 rounded-2xl border border-border bg-card/60 p-4">
              <p className="text-sm font-semibold text-foreground">Related links</p>
              <ul className="mt-2 space-y-2 text-sm">
                {suggestedArticles.slice(0, 3).map((article) => (
                  <li key={`related-${article.id}`}>
                    <Link
                      href={buildPostUrl("article", article.slug)}
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      {article.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/profile" className="text-primary underline-offset-4 hover:underline">
                    Browse all profiles
                  </Link>
                </li>
              </ul>
            </nav>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
