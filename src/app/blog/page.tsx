import { getSortedPostsData } from "@/lib/blog";
import BlogListClient from "@/components/BlogListClient";

export default function BlogPage() {
  const allPostsData = getSortedPostsData();
  return <BlogListClient posts={allPostsData} />;
}
