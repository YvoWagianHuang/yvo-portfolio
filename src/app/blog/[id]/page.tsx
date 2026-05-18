import { getPostData, getSortedPostsData } from "@/lib/blog";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function Post({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const postData = await getPostData(id);
  const allPosts = getSortedPostsData();
  const currentIndex = allPosts.findIndex((p) => p.id === id);
  
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <article className="max-w-3xl mx-auto py-12">
      <Link
        href="/blog"
        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 mb-10 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> 返回公告欄
      </Link>
      <header className="mb-10 pb-10 border-b border-gray-100">
        <p className="text-sm text-blue-600 font-bold tracking-widest uppercase mb-3">
          {postData.date}
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          {postData.title}
        </h1>
      </header>
      {postData.imageUrl && (
        <div className="mb-12 rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={postData.imageUrl}
            alt={postData.title}
            className="w-full h-auto max-h-[500px] object-cover"
          />
        </div>
      )}
      <div
        className="prose prose-lg prose-blue max-w-none text-gray-700 leading-loose"
        dangerouslySetInnerHTML={{ __html: postData.content }}
      />

      {/* Post Navigation */}
      <div className="mt-16 pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          {prevPost && (
            <Link
              href={`/blog/${prevPost.id}`}
              className="group block p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all text-left"
            >
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">
                上一篇
              </span>
              <span className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                {prevPost.title}
              </span>
            </Link>
          )}
        </div>
        <div className="text-right">
          {nextPost && (
            <Link
              href={`/blog/${nextPost.id}`}
              className="group block p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all text-right flex flex-col items-end"
            >
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">
                下一篇
              </span>
              <span className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors flex items-center justify-end">
                {nextPost.title}
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
