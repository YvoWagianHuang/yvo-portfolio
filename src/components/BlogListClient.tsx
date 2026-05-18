"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FileText, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export default function BlogListClient({ posts }: { posts: BlogPost[] }) {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="flex items-center mb-10 border-b border-gray-200 pb-6">
        <FileText className="w-8 h-8 mr-4 text-gray-800" />
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          {t("nav.blog")}
        </h1>
      </div>
      <div className="space-y-10">
        {currentPosts.map((post) => (
          <article key={post.id} className="group cursor-pointer flex flex-col md:flex-row gap-8 items-start">
            {post.imageUrl && (
              <div className="w-full md:w-1/3 shrink-0 rounded-2xl overflow-hidden shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="flex-1">
              <p className="text-sm text-gray-400 mb-2 font-medium tracking-wide uppercase">
                {post.date}
              </p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed text-lg">{post.excerpt}</p>
              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                {t("common.readMore")}
                <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </article>
        ))}
        {currentPosts.length === 0 && (
          <p className="text-gray-500 text-center py-10">目前還沒有文章喔！</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-16 pt-8 border-t border-gray-200 flex justify-between items-center">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
              currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <ChevronLeft className="w-5 h-5 mr-1" /> 上一頁
          </button>
          <span className="text-sm text-gray-500 font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors ${
              currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            下一頁 <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>
      )}
    </div>
  );
}
