import fs from 'fs';
import path from 'path';
import { portfolioData } from './src/data/portfolioData.js';

const postsDir = path.join(process.cwd(), 'content/blog');
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

portfolioData.posts.forEach(post => {
  const content = `---
title: "${post.title.replace(/"/g, '\\"')}"
date: "${post.date}"
excerpt: "${post.excerpt.replace(/"/g, '\\"').replace(/\n/g, ' ')}"
${post.imageUrl ? `imageUrl: "${post.imageUrl}"\n` : ''}${post.pdfUrl ? `pdfUrl: "${post.pdfUrl}"\n` : ''}---

${post.content}
`;
  fs.writeFileSync(path.join(postsDir, `${post.id}.md`), content);
});
console.log('Migration complete.');

