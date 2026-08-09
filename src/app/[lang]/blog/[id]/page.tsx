import { getPostData, getSortedPostsData } from "@/lib/blog";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, ArrowUpRight } from "lucide-react";
import type { Metadata } from 'next';
import aboutData from "@/data/about.json";
import { getDictionary } from "@/dictionaries";

export async function generateMetadata({ params }: { params: Promise<{ id: string, lang: string }> }): Promise<Metadata> {
  const { id, lang } = await params;
  const postData = await getPostData(id, lang);
  
  return {
    title: `${postData.title} | 伊理教育 YiliEdTech`,
    description: postData.excerpt || '伊理教育部落格文章',
    openGraph: {
      title: `${postData.title} | 伊理教育 YiliEdTech`,
      description: postData.excerpt || '伊理教育部落格文章',
      images: postData.imageUrl ? [postData.imageUrl] : [],
    },
  };
}

export async function generateStaticParams() {
  // We need to generate paths for all languages.
  // For now, let's just get posts from zh since they are the source of truth,
  // or we'll update getSortedPostsData to return posts for all langs.
  const posts = getSortedPostsData('zh');
  
  const paths = [];
  for (const lang of ['zh', 'en', 'fi']) {
    for (const post of posts) {
      paths.push({ lang, id: post.id });
    }
  }
  return paths;
}

export default async function Post({ params }: { params: Promise<{ id: string, lang: string }> }) {
  const { id, lang } = await params;
  const dict = await getDictionary(lang as 'zh' | 'en' | 'fi');
  
  // Pass lang to blog functions
  const postData = await getPostData(id, lang);
  const allPosts = getSortedPostsData(lang);
  const currentIndex = allPosts.findIndex((p) => p.id === id);
  
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  const role = lang === 'zh' ? aboutData.role_zh : aboutData.role_en;
  const bio = lang === 'zh' ? aboutData.bio_zh : aboutData.bio_en;

  return (
    <article className="max-w-3xl mx-auto py-12">
      <Link
        href={`/${lang}/blog`}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> {dict.nav.blog}
      </Link>
      <header className="mb-10 pb-10 border-b border-gray-100">
        <div className="flex items-center gap-4 mb-5">
          {postData.category && (
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-full">
              {postData.category}
            </span>
          )}
          <p className="text-sm text-gray-500 font-medium flex items-center">
            <Calendar className="w-4 h-4 mr-1.5" />
            {postData.date}
          </p>
        </div>
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

      {/* Author Box */}
      <div className="mt-16 p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img src={aboutData.avatarUrl} alt="Author" className="w-24 h-24 rounded-full object-cover shadow-sm border-2 border-white" />
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold text-gray-900">{aboutData.name.split('/')[0]} (Yvo)</h3>
          <p className="text-blue-600 font-medium text-sm mt-1 mb-3">{role}</p>
          <p className="text-gray-600 text-sm leading-relaxed">{bio.substring(0, 115)}...</p>
        </div>
      </div>

      {/* CTA Box */}
      <div className="mt-8 bg-blue-600 text-white rounded-3xl p-8 sm:p-10 text-center shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">{dict.blog.consultationText}</h3>
          <p className="text-blue-100 mb-8 max-w-lg mx-auto">
            {lang === "zh" ? "無論是預約客製化課程、留學申請文件輔導，或是教材設計合作，都歡迎隨時與我聯繫，讓我為你的目標提供專業協助。" : "Whether you are looking to book a customized course, need help with study abroad application documents, or want to collaborate on material design, feel free to contact me at any time."}
          </p>
          <Link href={`/${lang}/contact`} className="inline-flex items-center bg-white text-blue-600 font-bold py-3.5 px-8 rounded-xl hover:bg-gray-50 transition-colors shadow-sm group">
            {dict.blog.bookConsultation}
            <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
        {/* Decorative backgrounds */}
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-blue-500 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-700 rounded-full opacity-50 blur-2xl"></div>
      </div>

      {/* Post Navigation */}
      <div className="mt-16 pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          {prevPost && (
            <Link
              href={`/${lang}/blog/${prevPost.id}`}
              className="group block p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all text-left"
            >
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">
                {dict.common.prevPage}
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
              href={`/${lang}/blog/${nextPost.id}`}
              className="group block p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all text-right flex flex-col items-end"
            >
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 block">
                {dict.common.nextPage}
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
