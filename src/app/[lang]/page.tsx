import { getSortedPostsData } from "@/lib/blog";
import HomeClient from "@/components/HomeClient";
import { getDictionary } from "@/dictionaries";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'zh' | 'en' | 'fi');
  // We fetch localized posts by passing lang
  const allPostsData = getSortedPostsData(lang);
  const recentPosts = allPostsData.slice(0, 3);
  return <HomeClient posts={recentPosts} lang={lang as 'zh' | 'en' | 'fi'} dict={dict} />;
}
