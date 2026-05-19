"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";
import { portfolioData } from "@/data/portfolioData";
import { Gamepad2, Bell, MessageSquare, Briefcase, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { motion } from "framer-motion";

export default function HomeClient({ posts }: { posts: BlogPost[] }) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "zh" | "en";
  const { testimonials, featuredAnnouncement, featuredProject, gamificationPhilosophy, services } = portfolioData;

  const getText = (obj: any) => (typeof obj === "string" ? obj : obj[lang] || obj.zh);

  return (
    <div className="space-y-20 py-8">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center py-16"
      >
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          {t("home.title")}
        </h1>
      </motion.section>

      {/* Featured Announcement */}
      {featuredAnnouncement && (
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            <div className="h-64 sm:h-80 w-full overflow-hidden relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featuredAnnouncement.imageUrl}
                alt="Featured"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 sm:p-8">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
                  Featured
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {featuredAnnouncement.title[lang] || featuredAnnouncement.title.zh}
                </h2>
              </div>
            </div>
            <div className="p-6 sm:p-8 bg-white">
              <p className="text-gray-700 text-lg leading-relaxed">
                {featuredAnnouncement.description[lang] || featuredAnnouncement.description.zh}
              </p>
            </div>
          </div>
        </motion.section>
      )}

      {/* Gamification Philosophy */}
      {gamificationPhilosophy && (
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-2xl mb-6">
            <Gamepad2 className="w-8 h-8 text-purple-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
            {gamificationPhilosophy.title[lang] || gamificationPhilosophy.title.zh}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            {gamificationPhilosophy.description[lang] || gamificationPhilosophy.description.zh}
          </p>
        </motion.section>
      )}

      {/* Featured Project */}
      {featuredProject && (
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
            <div className="w-full md:w-1/2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featuredProject.imageUrl}
                alt="Featured Project"
                className="w-full h-auto rounded-2xl shadow-md transform -rotate-1 hover:rotate-0 transition-transform duration-500"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-extrabold rounded-full mb-6 uppercase tracking-widest shadow-sm">
                Project Spotlight
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
                {featuredProject.title[lang] || featuredProject.title.zh}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {featuredProject.description[lang] || featuredProject.description.zh}
              </p>

              {featuredProject.link && (
                <a
                  href={featuredProject.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-purple-200 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95"
                >
                  <MessageSquare className="w-5 h-5 mr-3" />
                  {featuredProject.link.label[lang] || featuredProject.link.label.zh}
                </a>
              )}
            </div>
          </div>
        </motion.section>
      )}

      {/* Announcements */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center">
          <Bell className="w-6 h-6 mr-3 text-blue-500" />
          {t("home.announcements")}
        </h2>
        <div className="grid gap-6">
          {posts.slice(0, 3).map((post) => (
            <div
              key={post.id}
              className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              <Link href={`/blog/${post.id}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3 font-medium">{post.date}</p>
                <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
              </Link>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center px-4 sm:px-0">
          <MessageSquare className="w-6 h-6 mr-3 text-purple-500" />
          {t("home.testimonials")}
        </h2>
        <div
          className="flex overflow-x-auto space-x-6 pb-8 snap-x px-4 sm:px-0 hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="snap-center shrink-0 w-80 bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-2xl shadow-xl transform transition duration-300 hover:-translate-y-2"
            >
              <MessageSquare className="w-8 h-8 text-gray-600 mb-4 opacity-50" />
              <p className="italic mb-6 text-gray-200 leading-relaxed">
                "{getText(item.content)}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 flex items-center justify-center font-bold text-gray-900">
                  {getText(item.name).charAt(0)}
                </div>
                <p className="ml-4 text-gray-300 font-medium">{getText(item.name)}</p>
              </div>
            </div>
          ))}
        </div>
        <style>
          {`
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>
      </motion.section>

      {/* Services Section */}
      {services && services.length > 0 && (
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center">
            <Briefcase className="w-6 h-6 mr-3 text-indigo-500" />
            {lang === "zh" ? "服務項目" : "Services"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const cardStyles = [
                { bg: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)" },
                { bg: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)" },
                { bg: "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)" },
                { bg: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)" },
              ];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                  className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
                  style={{
                    background: cardStyles[idx % cardStyles.length].bg,
                    minHeight: "180px",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="relative z-10 p-6 flex flex-col items-center text-center h-full">
                    <h3 className="text-xl font-extrabold text-white mb-2 tracking-tight drop-shadow-sm">
                      {service.title[lang] || service.title.zh}
                    </h3>
                    {service.target && (
                      <span className="inline-block px-3 py-0.5 mb-3 rounded-full text-xs font-semibold bg-white/25 text-white tracking-wide">
                        {service.target[lang] || service.target.zh}
                      </span>
                    )}
                    <p className="text-sm text-white/90 leading-relaxed">
                      {service.description[lang] || service.description.zh}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <p className="mt-8 text-center text-gray-500 text-sm">
            {lang === "zh"
              ? "有興趣合作？歡迎來信洽談："
              : "Interested in working together? Feel free to reach out:"}{" "}
            <a
              href="mailto:yvo.wagian.huang@gmail.com"
              className="font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              yvo.wagian.huang@gmail.com
            </a>
          </p>
        </motion.section>
      )}
    </div>
  );
}
