import { getNoteBySlug, getNoteSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";

export async function generateStaticParams() {
  const slugs = getNoteSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.mdx$/, ""),
  }));
}

const components = {
  h1: (props: any) => <h1 className="text-4xl font-bold font-sans mt-12 mb-6 text-white" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-bold font-sans mt-10 mb-4 text-[#00f0ff]" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-bold font-sans mt-8 mb-3 text-white" {...props} />,
  p: (props: any) => <p className="font-serif text-white/70 leading-relaxed mb-6 text-lg" {...props} />,
  a: (props: any) => <a className="text-[#ff5e00] hover:underline" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside space-y-2 mb-6 font-serif text-white/70" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside space-y-2 mb-6 font-serif text-white/70" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-[#00f0ff] pl-6 my-8 italic font-serif text-white/60 bg-white/[0.02] py-4 pr-4 rounded-r-xl" {...props} />
  ),
  code: (props: any) => {
    if (props.className) {
      return (
        <pre className="p-6 rounded-xl bg-black border border-white/10 overflow-x-auto mb-6 mt-2">
          <code className="font-mono text-sm text-[#00f0ff]" {...props} />
        </pre>
      );
    }
    return <code className="bg-white/10 px-1.5 py-0.5 rounded text-sm font-mono text-[#ff5e00]" {...props} />;
  },
};

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const note = getNoteBySlug(resolvedParams.slug);

  if (!note) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 px-4 md:px-8">
      <article className="max-w-3xl mx-auto">
        <Link href="/#notes" className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-12 font-mono text-sm tracking-widest uppercase transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Notes
        </Link>
        
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold font-sans tracking-tight mb-6">
            {note.meta.title}
          </h1>
          <div className="flex items-center gap-4 text-sm font-mono text-[#00f0ff] uppercase tracking-wider">
            <span>{note.meta.date}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff5e00]" />
            <span>{note.meta.readingTime}</span>
          </div>
        </header>

        <div className="prose prose-invert max-w-none">
          <MDXRemote source={note.content} components={components} />
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex justify-between items-center">
          <p className="font-serif text-white/50">Enjoyed the read?</p>
          <Button variant="outline" href="https://twitter.com">
            Share on Twitter
          </Button>
        </div>
      </article>
    </div>
  );
}
