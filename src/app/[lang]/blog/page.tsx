import { getSortedPostsData } from "@/lib/blog";
import BlogListClient from "@/components/BlogListClient";
import { getDictionary } from "@/dictionaries";

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'zh' | 'en' | 'fi');
  // We need to fetch localized posts later, but for now we pass lang
  const allPostsData = getSortedPostsData();
  return <BlogListClient posts={allPostsData} lang={lang as 'zh' | 'en' | 'fi'} dict={dict} />;
}
