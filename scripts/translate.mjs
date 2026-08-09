import fs from 'fs';
import path from 'path';
import 'dotenv/config';

// 選擇使用的 API (OpenAI 或 Gemini)
// 請在 .env 檔案中設定 OPENAI_API_KEY 或 GEMINI_API_KEY
const USE_API = process.env.OPENAI_API_KEY ? 'openai' : (process.env.GEMINI_API_KEY ? 'gemini' : null);

if (!USE_API) {
  console.error('❌ 請在 .env 檔案中設定 OPENAI_API_KEY 或 GEMINI_API_KEY');
  process.exit(1);
}

async function translateText(text, targetLang) {
  const prompt = `Translate the following markdown content to ${targetLang}. 
Maintain all markdown formatting, frontmatter (YAML), and HTML tags exactly as they are. 
Only translate the human-readable text. Do not add any extra explanations.
Here is the content:
\n\n${text}`;

  try {
    if (USE_API === 'openai') {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: prompt }]
        })
      });
      const data = await response.json();
      return data.choices[0].message.content;
    } else if (USE_API === 'gemini') {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${process.env.GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });
      const data = await response.json();
      if (!data.candidates) {
        console.error('API Error Response:', JSON.stringify(data, null, 2));
        return null;
      }
      return data.candidates[0].content.parts[0].text;
    }
  } catch (error) {
    console.error(`翻譯失敗 (${targetLang}):`, error);
    return null;
  }
}

async function processBlogPosts() {
  const zhDir = path.join(process.cwd(), 'content/blog/zh');
  const enDir = path.join(process.cwd(), 'content/blog/en');
  const fiDir = path.join(process.cwd(), 'content/blog/fi');

  if (!fs.existsSync(zhDir)) return;

  const files = fs.readdirSync(zhDir).filter(f => f.endsWith('.md'));

  for (const file of files) {
    const zhPath = path.join(zhDir, file);
    const enPath = path.join(enDir, file);
    const fiPath = path.join(fiDir, file);

    const zhContent = fs.readFileSync(zhPath, 'utf8');

    // 翻譯成英文
    if (!fs.existsSync(enPath)) {
      console.log(`🌐 正在翻譯 ${file} 為英文...`);
      const enContent = await translateText(zhContent, 'English');
      if (enContent) {
        fs.writeFileSync(enPath, enContent, 'utf8');
        console.log(`✅ 成功建立 ${enPath}`);
      }
    }

    // 翻譯成芬蘭文
    if (!fs.existsSync(fiPath)) {
      console.log(`🌐 正在翻譯 ${file} 為芬蘭文...`);
      const fiContent = await translateText(zhContent, 'Finnish');
      if (fiContent) {
        fs.writeFileSync(fiPath, fiContent, 'utf8');
        console.log(`✅ 成功建立 ${fiPath}`);
      }
    }
  }
}

async function processAboutJson() {
  const aboutPath = path.join(process.cwd(), 'src/data/about.json');
  if (!fs.existsSync(aboutPath)) return;

  const aboutData = JSON.parse(fs.readFileSync(aboutPath, 'utf8'));
  let updated = false;

  const fieldsToTranslate = [
    { key: 'role', zh: aboutData.role_zh },
    { key: 'bio', zh: aboutData.bio_zh },
    { key: 'manifesto', zh: aboutData.manifesto_zh }
  ];

  for (const field of fieldsToTranslate) {
    if (field.zh) {
      if (!aboutData[`${field.key}_en`]) {
        console.log(`🌐 正在翻譯 ${field.key} 為英文...`);
        const translated = await translateText(field.zh, 'English');
        if (translated) {
          aboutData[`${field.key}_en`] = translated;
          updated = true;
        }
      }
      if (!aboutData[`${field.key}_fi`]) {
        console.log(`🌐 正在翻譯 ${field.key} 為芬蘭文...`);
        const translated = await translateText(field.zh, 'Finnish');
        if (translated) {
          aboutData[`${field.key}_fi`] = translated;
          updated = true;
        }
      }
    }
  }

  if (updated) {
    fs.writeFileSync(aboutPath, JSON.stringify(aboutData, null, 2), 'utf8');
    console.log(`✅ 成功更新 about.json`);
  }
}

async function main() {
  console.log('🚀 開始自動翻譯流程...');
  await processBlogPosts();
  await processAboutJson();
  console.log('🎉 翻譯流程結束！');
}

main();
