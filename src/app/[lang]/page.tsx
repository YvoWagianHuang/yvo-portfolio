import { getSortedPostsData } from "@/lib/blog";
import HomeClient from "@/components/HomeClient";
import { getDictionary } from "@/dictionaries";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as 'zh' | 'en' | 'fi');
  // We need to fetch localized posts later, but for now we pass lang
  const allPostsData = getSortedPostsData();
  const recentPosts = allPostsData.slice(0, 3);
  return <HomeClient posts={recentPosts} lang={lang as 'zh' | 'en' | 'fi'} dict={dict} />;
}
