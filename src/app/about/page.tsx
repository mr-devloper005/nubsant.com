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
  { label: "Public profiles", value: "480+" },
  { label: "Monthly opens", value: "31k" },
];

const values = [
  { title: "Clarity for files", description: "We keep PDF browsing calm and legible so titles and open actions stay obvious in every viewport." },
  { title: "People in context", description: "Social profiles are designed to sit next to documents, not compete with them as a second feed." },
  { title: "Color with purpose", description: "A lagoon-and-sage palette helps navigation and trust cues without cheap gradients or neon noise." },
];

export default function AboutPage() {
  return (
    <PageShell
      title={`About ${SITE_CONFIG.name}`}
      description={`${SITE_CONFIG.name} helps you share PDFs in a reading-first layout and present a public social profile on the same site.`}
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
              A small team focused on documents and identity—not another generic “platform.”
            </h2>
            <p className="text-sm text-muted-foreground">
              {SITE_CONFIG.name} was started so readers can find long-form files without wading through unrelated post types, and so authors can show who they are
              in a social-style profile card. We keep the technology stack from the shared base system; the experience here is purpose-built for PDFs + presence.
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

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {mockTeamMembers.map((member) => (
          <Card key={member.id} className="border-2 border-[#7da78c] bg-white transition-transform hover:-translate-y-0.5">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border-2 border-[#c2d099]">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold text-foreground">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
              <p className="mt-3 text-xs text-muted-foreground">{member.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
