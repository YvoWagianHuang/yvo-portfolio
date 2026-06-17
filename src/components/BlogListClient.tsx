"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { FileText, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export default function BlogListClient({ posts }: { posts: BlogPost[] }) {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const postsPerPage = 5;

  const categories = ["全部", "教育科技", "教育觀點", "教學現場", "芬蘭留學日記"];

  const filteredPosts = posts.filter(post => 
    selectedCategory === "全部" || post.category === selectedCategory
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Reset to first page when category changes
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <div className="flex items-center mb-10 border-b border-gray-200 pb-6">
        <FileText className="w-8 h-8 mr-4 text-gray-800" />
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          {t("nav.blog")}
        </h1>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-blue-600 text-white shadow-md scale-105"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
            }`}
          >
            {cat}
          </button>
        ))}
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
              <div className="flex items-center gap-3 mb-2">
                {post.category && (
                  <span className="bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-0.5 rounded border border-blue-200">
                    {post.category}
                  </span>
                )}
                <p className="text-sm text-gray-400 font-medium tracking-wide uppercase">
                  {post.date}
                </p>
              </div>
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
