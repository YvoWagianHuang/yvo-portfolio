import { getSortedPostsData } from "@/lib/blog";
import HomeClient from "@/components/HomeClient";

export default function Page() {
  const allPostsData = getSortedPostsData();
  const recentPosts = allPostsData.slice(0, 3);
  return <HomeClient posts={recentPosts} />;
}
