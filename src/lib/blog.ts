import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkBreaks from "remark-breaks";

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  imageUrl?: string;
  pdfUrl?: string;
  category?: string;
}

const getPostsDirectory = (lang: string = "zh") => path.join(process.cwd(), `content/blog/${lang}`);

export function getSortedPostsData(lang: string = "zh"): BlogPost[] {
  const postsDirectory = getPostsDirectory(lang);
  
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "").normalize('NFC');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);

      const rawDate = matterResult.data.date;
      const dateStr = rawDate instanceof Date ? rawDate.toISOString().split('T')[0] : String(rawDate || '');

      return {
        id,
        ...(matterResult.data as Omit<BlogPost, "id" | "content" | "date">),
        date: dateStr,
        content: matterResult.content,
      };
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id: string, lang: string = "zh"): Promise<BlogPost> {
  const decodedId = decodeURIComponent(id);
  const postsDirectory = getPostsDirectory(lang);
  let fullPath = path.join(postsDirectory, `${decodedId}.md`);
  
  // Fallback to zh if not found
  if (!fs.existsSync(fullPath) && lang !== 'zh') {
    fullPath = path.join(getPostsDirectory('zh'), `${decodedId}.md`);
  }
  
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(remarkBreaks)
    .use(html, { sanitize: false })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const rawDate = matterResult.data.date;
  const dateStr = rawDate instanceof Date ? rawDate.toISOString().split('T')[0] : String(rawDate || '');

  return {
    id,
    ...(matterResult.data as Omit<BlogPost, "id" | "content" | "date">),
    date: dateStr,
    content: contentHtml,
  };
}
