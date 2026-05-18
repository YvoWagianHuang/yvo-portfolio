import { Mail } from "lucide-react";
import { Linkedin } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-8 border-b border-gray-100 pb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
              Yvo Wagian
            </h2>
            <p className="text-gray-500 font-medium">Learning Experience Designer</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a
              href="mailto:yvo.wagian.huang@gmail.com"
              className="text-gray-500 hover:text-gray-900 flex items-center transition-colors group px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <Mail className="w-5 h-5 mr-2 text-gray-400 group-hover:text-gray-900 transition-colors" />
              <span className="text-sm font-medium">Email</span>
            </a>
            <a
              href="https://linkedin.com/in/yvo-wagian-1545b23a5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 flex items-center transition-colors group px-4 py-2 bg-gray-50 rounded-lg hover:bg-blue-50"
            >
              <Linkedin className="w-5 h-5 mr-2 text-gray-400 group-hover:text-blue-600 transition-colors" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
        <p className="text-center text-sm text-gray-400 font-medium tracking-wide">
          &copy; {new Date().getFullYear()} Yvo Wagian. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
