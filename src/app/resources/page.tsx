"use client";

import { useTranslation } from "react-i18next";
import { portfolioData } from "@/data/portfolioData";
import { BookOpen, Download, ExternalLink, MessageSquare } from "lucide-react";

export default function Resources() {
  const { t } = useTranslation();
  const { resources } = portfolioData;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "external-link":
        return <ExternalLink className="w-5 h-5 mr-2" />;
      case "message-square":
        return <MessageSquare className="w-5 h-5 mr-2" />;
      default:
        return <Download className="w-5 h-5 mr-2" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="flex items-center mb-10">
        <BookOpen className="w-8 h-8 mr-4 text-blue-600" />
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          {t("nav.resources")}
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {resources.map((res) => (
          <div
            key={res.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            <div className="h-56 overflow-hidden relative">
              <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-10 transition-opacity z-10 duration-300"></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={res.thumbnail}
                alt={res.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow-sm z-20">
                {res.tag || "PDF"}
              </div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {res.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                {res.description}
              </p>
              <a
                href={res.url || res.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all duration-300 transform active:scale-95"
              >
                {getIcon(res.icon || "download")}
                {res.buttonText || t("common.downloadPdf")}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
