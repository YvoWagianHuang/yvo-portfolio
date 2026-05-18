"use client";

import { useTranslation } from "react-i18next";
import { Mail, Send } from "lucide-react";
import { Linkedin } from "@/components/Icons";
import { useState } from "react";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "zh" | "en";
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    const subjectMap: Record<string, string> = {
      course: lang === "zh" ? "預約課程 (私人家教/線上課程)" : "Course Booking",
      speak: lang === "zh" ? "演講邀約" : "Speaking Engagement",
      material: lang === "zh" ? "教材設計合作" : "Material Design Collaboration",
      other: lang === "zh" ? "其他事項" : "Other",
    };

    const mailSubject = encodeURIComponent(`[${subjectMap[subject] || subject}] 來自 ${name} 的聯絡訊息`);
    const mailBody = encodeURIComponent(
      `姓名 / Name: ${name}\n信箱 / Email: ${email}\n\n訊息內容 / Message:\n${message}`
    );

    window.location.href = `mailto:yvo.wagian.huang@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    
    // Show success state briefly
    setStatus("success");
    form.reset();
    setTimeout(() => {
      setStatus("idle");
    }, 5000);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-2xl mb-6">
          <Mail className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          {lang === "zh" ? "聯絡我" : "Contact Me"}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {lang === "zh"
            ? "歡迎隨時來信！無論是預約課程、演講邀約或是教材合作，我都會盡快回覆您。"
            : "Feel free to reach out! Whether it's for booking a course, speaking engagements, or material collaborations, I will get back to you as soon as possible."}
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
        {status === "success" ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {lang === "zh" ? "訊息已送出！" : "Message Sent!"}
            </h2>
            <p className="text-gray-600">
              {lang === "zh"
                ? "感謝您的來信，我會盡快與您聯繫。"
                : "Thank you for reaching out. I will get back to you shortly."}
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-8 px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
            >
              {lang === "zh" ? "再傳送一則訊息" : "Send another message"}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {lang === "zh" ? "您的姓名 / 單位" : "Your Name / Organization"}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-gray-50 focus:bg-white"
                  placeholder={lang === "zh" ? "王小明" : "John Doe"}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {lang === "zh" ? "聯絡信箱 (Email)" : "Email Address"}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-gray-50 focus:bg-white"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                {lang === "zh" ? "主旨 / 洽談項目" : "Subject"}
              </label>
              <select
                name="subject"
                id="subject"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-gray-50 focus:bg-white"
              >
                <option value="course">{lang === "zh" ? "預約課程 (私人家教/線上課程)" : "Course Booking"}</option>
                <option value="speak">{lang === "zh" ? "演講邀約" : "Speaking Engagement"}</option>
                <option value="material">{lang === "zh" ? "教材設計合作" : "Material Design Collaboration"}</option>
                <option value="other">{lang === "zh" ? "其他事項" : "Other"}</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                {lang === "zh" ? "訊息內容" : "Message"}
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow bg-gray-50 focus:bg-white resize-y"
                placeholder={lang === "zh" ? "請描述您的需求..." : "How can I help you?..."}
              ></textarea>
            </div>

            {status === "error" && (
              <p className="text-red-500 text-sm">
                {lang === "zh"
                  ? "抱歉，訊息傳送失敗，請稍後再試，或直接發送 Email 給我。"
                  : "Sorry, the message failed to send. Please try again later or email me directly."}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full flex justify-center items-center py-4 px-8 border border-transparent rounded-xl shadow-sm text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <span className="animate-pulse">{lang === "zh" ? "傳送中..." : "Sending..."}</span>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  {lang === "zh" ? "送出訊息" : "Send Message"}
                </>
              )}
            </button>
          </form>
        )}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-500 mb-4">{lang === "zh" ? "或者透過以下方式直接聯絡我：" : "Or contact me directly via:"}</p>
        <div className="flex justify-center gap-4">
          <a
            href="mailto:yvo.wagian.huang@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-xl transition-colors border border-gray-200"
          >
            <Mail className="w-5 h-5 mr-2 text-gray-400" />
            yvo.wagian.huang@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/yvo-wagian-1545b23a5"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium rounded-xl transition-colors border border-blue-100"
          >
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
