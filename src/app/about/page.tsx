import Link from "next/link";
import { PageShell } from "@/components/shared/page-shell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockTeamMembers } from "@/data/mock-data";
import { SITE_CONFIG } from "@/lib/site-config";

const highlights = [
  { label: "PDFs indexed for reading", value: "2.1k+" },
  { label: "Monthly visitors", value: "31k" },
  { label: "Active documents", value: "480+" },
];

const values = [
  { title: "Document-first design", description: "We keep PDF browsing calm and legible so titles and open actions stay obvious in every viewport." },
  { title: "Clean interface", description: "A lagoon-and-sage palette helps navigation and trust cues without cheap gradients or neon noise." },
  { title: "Focus on content", description: "No distractions, no clutter - just your documents presented clearly and professionally." },
];

export default function AboutPage() {
  return (
    <PageShell
      title={`About ${SITE_CONFIG.name}`}
      description={`${SITE_CONFIG.name} provides a clean, professional platform for sharing and reading PDF documents online.`}
      actions={
        <>
          <Button variant="outline" asChild>
            <Link href="/pdf">PDF library</Link>
          </Button>
          <Button asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="border-2 border-[#7da78c] bg-white/90">
          <CardContent className="space-y-4 p-6">
            <Badge className="border border-[#35858e]/30 bg-[#e6eec9] text-[#153234]">Our story</Badge>
            <h2 className="text-2xl font-semibold text-foreground">
              A professional platform for document sharing and reading
            </h2>
            <p className="text-sm text-muted-foreground">
              {SITE_CONFIG.name} was created to provide a clean, focused environment for sharing and reading PDF documents. We eliminate the noise of generic platforms and deliver a purpose-built experience that puts your content first.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="rounded-xl border-2 border-[#c2d099] bg-[#f4f7f0] p-4">
                  <div className="text-2xl font-semibold text-[#153234]">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          {values.map((value) => (
            <Card key={value.title} className="border-2 border-[#c2d099] bg-white/80">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

    </PageShell>
  );
}
