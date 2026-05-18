"use client";

import { useTranslation } from "react-i18next";
import { portfolioData } from "@/data/portfolioData";
import { Mail } from "lucide-react";
import { Linkedin } from "@/components/Icons";

export default function About() {
  const { i18n } = useTranslation();
  const lang = i18n.language as "zh" | "en";
  const { about } = portfolioData;

  const role = typeof about.role === "string" ? about.role : about.role[lang] || about.role.zh;
  const bio = typeof about.bio === "string" ? about.bio : about.bio[lang] || about.bio.zh;

  return (
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start gap-16 py-16 px-4">
      <div className="w-48 h-48 md:w-64 md:h-64 shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={about.avatarUrl}
          alt={about.name}
          className="w-full h-full object-cover rounded-2xl shadow-sm border border-gray-200"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight whitespace-pre-line">
          {about.name}
        </h1>
        <h2 className="text-xl text-gray-500 font-medium mb-8 pb-4 border-b border-gray-100">
          {role}
        </h2>
        <div className="prose prose-gray text-gray-700 leading-relaxed text-lg space-y-6">
          {bio.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        {/* Brand Manifesto Section */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="bg-blue-600 text-white p-1.5 rounded-lg mr-3 shadow-sm">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            {lang === "zh" ? "伊理教育：顛覆傳統的邀請" : "Yili Education: An Invitation to Disrupt Tradition"}
          </h3>
          <div className="prose prose-gray text-gray-700 leading-relaxed space-y-4">
            {(typeof about.manifesto === "string" ? about.manifesto : about.manifesto?.[lang] || about.manifesto?.zh)?.split("\n").map((line, index) => (
              <p key={index} className={line.match(/^\d+\./) ? "pl-4 font-medium" : ""}>
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6">
            {lang === "zh"
              ? "聯絡我 (預約課程・演講邀約・教材合作)"
              : "Contact Me (Courses・Speaking・Materials)"}
          </h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:yvo.wagian.huang@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 hover:shadow-md transition-all"
            >
              <Mail className="w-5 h-5 mr-3" />
              yvo.wagian.huang@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/yvo-wagian-1545b23a5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-700 border border-gray-200 font-medium rounded-xl hover:bg-gray-50 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm"
            >
              <Linkedin className="w-5 h-5 mr-3 text-blue-600" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
