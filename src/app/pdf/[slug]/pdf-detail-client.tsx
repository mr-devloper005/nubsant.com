"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/shared/footer";
import { NavbarShell } from "@/components/shared/navbar-shell";
import { TaskPostCard } from "@/components/shared/task-post-card";
import { SchemaJsonLd } from "@/components/seo/schema-jsonld";
import { buildPostUrl } from "@/lib/task-data";
import { Download, Eye, Share2, FileText, Clock, Tag, ArrowLeft, Maximize2, Grid3X3 } from "lucide-react";
import { useState, useEffect } from "react";

interface PdfDetailClientProps {
  post: any;
  fileUrl: string;
  viewerUrl: string;
  category: string;
  related: any[];
  breadcrumbData: any;
  views?: number;
  downloads?: number;
}

export function PdfDetailClient({ 
  post, 
  fileUrl, 
  viewerUrl, 
  category, 
  related, 
  breadcrumbData,
  views = 0,
  downloads = 0
}: PdfDetailClientProps) {
  
  // Use server-generated values directly to avoid hydration issues
  const clientViews = views;
  const clientDownloads = downloads;
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowCopyNotification(true);
    setTimeout(() => setShowCopyNotification(false), 3000);
  };

  const handleFullscreen = () => {
    const iframe = document.querySelector('iframe');
    if (iframe && iframe.requestFullscreen) {
      iframe.requestFullscreen();
    }
  };

  return (
    <div className="min-h-screen bg-[#f2f6ee]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <SchemaJsonLd data={breadcrumbData} />
        
        {/* Enhanced Header */}
        <div className="mb-8">
          <div className="mb-6 flex items-center justify-between">
            <Link
              href="/pdf"
              className="group inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-800"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to PDF Library
            </Link>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-gray-300 bg-white text-gray-600 hover:bg-gray-50"
                onClick={handleFullscreen}
              >
                <Maximize2 className="h-4 w-4 mr-2" />
                Fullscreen
              </Button>
            </div>
          </div>
          
          {/* PDF Title Section */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-3">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 uppercase tracking-wider">
                      PDF Document
                    </span>
                    {category && (
                      <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                        {category}
                      </span>
                    )}
                  </div>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">{post.title}</h1>
                <p className="mt-4 text-lg text-gray-600">
                  {post.summary || "Explore this comprehensive PDF document with detailed insights and information."}
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col gap-3">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg hover:from-green-600 hover:to-emerald-600"
                >
                  <a href={fileUrl} target="_blank" rel="noreferrer">
                    <Download className="h-5 w-5 mr-2" />
                    Download PDF
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-gray-300 bg-white text-gray-600 hover:bg-gray-50"
                  onClick={handleShare}
                >
                  <Share2 className="h-5 w-5 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* PDF Viewer Section */}
        <div className="mb-8">
          <div className="rounded-3xl border border-gray-200 bg-white p-1 shadow-lg">
            <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">PDF Preview</h2>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                    ● Interactive Viewer
                  </span>
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl">
                <iframe
                  src={viewerUrl}
                  title={post.title}
                  className="h-[70vh] w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Related Documents Section */}
        {related.length ? (
          <section className="mb-8">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Related Documents</h2>
                <p className="mt-1 text-gray-600">Discover more PDFs similar to this one</p>
              </div>
              <Link
                href="/pdf"
                className="group inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
              >
                View All
                <ArrowLeft className="h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <div key={item.id} className="group">
                  <Link href={buildPostUrl("pdf", item.slug)} className="block">
                    <div className="rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-green-300 hover:shadow-xl hover:shadow-green-200/20">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-2">
                          <FileText className="h-4 w-4 text-white" />
                        </div>
                        <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-600">
                          Available
                        </span>
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-gray-700">
                        {item.title}
                      </h3>
                      <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                        {item.summary || "Comprehensive PDF document with detailed information and insights."}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-gray-500">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        ) : null}
        
        {/* Copy Notification */}
        {showCopyNotification && (
          <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-2 fade-in-0">
            <div className="rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-gray-900">URL copied to clipboard!</span>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
