// data.js
// 這邊存放所有「會變動的內容」，包含多語系文字、公告、心得、資源等。
// 只要修改這個檔案，網站內容就會自動更新。

window.PortfolioData = {
  // 1. 語系設定檔 (i18n locales)
  locales: {
    zh: {
      nav: {
        home: "首頁",
        about: "個人簡介",
        resources: "資源區",
        blog: "公告欄"
      },
      common: {
        switchLang: "English",
        readMore: "閱讀更多",
        downloadPdf: "下載 PDF"
      },
      home: {
        title: "讓所有人都愛上學習",
        announcements: "最新公告",
        testimonials: "學生心得"
      }
    },
    en: {
      nav: {
        home: "Home",
        about: "About",
        resources: "Resources",
        blog: "Blog"
      },
      common: {
        switchLang: "中文",
        readMore: "Read More",
        downloadPdf: "Download PDF"
      },
      home: {
        title: "Let everyone love learning",
        announcements: "Latest Announcements",
        testimonials: "Student Testimonials"
      }
    }
  },

  // 2. 公告 / 部落格文章 (Announcements / Blog Posts)
  posts: [
    {
      id: 6,
      title: "遊戲化教學的理想與現實——台灣教育現場的「效率陷阱」",
      date: "2026-05-03",
      excerpt: "一場在師大的試教冒險，讓我看見了台灣教育結構底層的寒意。為什麼所有人都認同遊戲化能提升動機，卻在現實中選擇放棄？",
      content: "【前言：點數與渴望的記憶】\n\n八歲那年，我對「教育」的定義不是課本，而是老師手上的點數卡。為了在那張卡片上蓋滿印章，我每一秒都緊盯著老師，渴望他趕快拋出下一個問題。那種極致的專注與求知慾，就是「遊戲化教學」（Gamification）最純粹的模樣。\n\n然而，當我從學生變成老師，走進台灣的教育現場時，我才發現，這份純粹在「標準化工廠」的邏輯面前，顯得如此脆弱。\n\n【一場「預謀」的教學冒險：實習現場的挫敗】\n\n在師大實習的最後一場試教，對其他同學來說是教師甄試的前哨戰，對我而言，卻是一場「學習經驗設計師」的實驗。我決定放手一搏，將遊戲化教學導入最傳統的文言文課堂。\n\n我精心準備了許多「手工教材」：\n- 文化獎勵：針對國文系學生設計的《甄嬛傳》人物卡片。\n- 探索感設計：將課文製成「遮蔽式小書」，讓學生在翻頁間體驗解謎的期待感。\n- 機制設計：嚴謹的加分與分組競賽機制。\n\n然而，現實給了我沉重的一擊。當我下令「請大家站起來分組」時，台下的師培生們卻像被按下了暫停鍵，呆坐原地。我重複了三次，他們才驚覺「這不是演示，是真的要玩」。這短短幾分鐘的尷尬沉默，揭示了一個荒謬的現狀：台灣的學生，早就被「講述法」馴化得太過徹底。\n\n最終，在教甄規定的十分鐘內，我只教了兩句文言文就響鈴了。這場冒險在成績單上或許不是完美的 A+，卻讓我看見了教育結構底層的寒意。\n\n<iframe class=\"w-full aspect-video my-8 rounded-xl shadow-lg border border-gray-100\" src=\"https://www.youtube.com/embed/_gYetZL17QU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n【數據背後的真相：為什麼我們不玩？】\n\n不甘於挫敗的我，對現場的高年級師培生發放了問卷，試圖找出「遊戲化」難以落地的主因。數據結果令人玩味：\n- 經驗斷層：僅有 27% 的人在求學過程中體驗過遊戲化教學。\n- 理論與實務的脫節：雖然 90% 的人在教育學程中學過相關理論，但在現實中卻選擇放棄。\n- 效率的代價：所有人皆認同遊戲化能提升動機，但一致認為「教學時數不足」與「進度壓力」是無法跨越的高牆。\n\n結論很殘酷：台灣的老師並非不會遊戲化，而是不敢遊戲化。 在高師生比的環境下，效率最高的做法就是「講述法」——用最少的老師，在最短時間內，向最多的學生灌輸標準化的知識。\n\n<a href=\"https://docs.google.com/spreadsheets/d/19mIM16XaFSIFvn0gVgJjMqSVAI3bsTIZAOs1-SlfmSQ/edit?usp=sharing\" target=\"_blank\" class=\"inline-flex items-center px-6 py-3 mt-4 mb-8 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-md\">📊 查看完整問卷數據與分析</a>\n\n【未來展望：科技作為現場老師的「外骨骼」】\n\n我不會因此放棄遊戲化教學，因為我見識過它點亮學生眼睛的力量。\n\n目前的困境在於「人力成本」。當老師忙於維持秩序與趕課時，遊戲化成了奢侈品。但我相信，教育科技（EdTech）正是解決這場效率僵局的鑰匙。 透過軟體系統，我們可以實現「自動化」的遊戲機制、即時反饋與個人化助教，減輕老師的負擔。\n\n雖然目前先進的 EdTech 方案多集中在資源優渥的私立或國際學校，但我深信，隨著開發成本降低與政策支持，公立學校終將迎來這場變革。而我，正致力於成為那個為現場老師開發「科技外骨骼」的人，讓教育不再是單向的灌輸，而是一場重新點燃渴望的旅程。\n\n---\n\n**The Gamification Bottleneck: Why Taiwan’s Education Remains a \"Standardized Factory\"**\n\n[Prologue: A Memory of Points and Passion]\n\nAt eight years old, my education wasn't defined by textbooks but by the stamps on my teacher's point card. To fill that card, I hung on every word my teacher said, desperate for the next challenge. That state of total immersion and intellectual hunger is the purest essence of Gamification.\n\nYears later, stepping into the classroom as an educator, I realized that this purity is incredibly fragile when confronted with the logic of the \"standardized factory.\"\n\n[The Failed Experiment: A Teaching Internship Reflection]\n\nDuring my final teaching demonstration at National Taiwan Normal University (NTNU), while my peers were rehearsing for the formal teacher recruitment exam, I was operating as a Learning Experience Designer. I decided to challenge the status quo: integrating gamification into a traditional Classical Chinese lesson.\n\nI meticulously crafted \"low-tech, high-touch\" materials:\n- Cultural Incentives: Character cards from Empresses in the Palace designed specifically for Chinese literature majors.\n- Curiosity-Driven Design: \"Accordion books\" with hidden text to spark excitement during the unveiling.\n- Structured Mechanics: A rigorous group-based competition and scoring system.\n\nHowever, reality hit hard. When I asked the class to \"stand up and form groups,\" the students—themselves prospective teachers—sat frozen. It took three repetitions for them to realize I wasn't just performing a demonstration; I was actually inviting them to engage. This awkward silence revealed a stark truth: Taiwanese students have been so thoroughly conditioned by \"Direct Instruction\" that active participation feels like an anomaly.\n\nIn the high-pressure, ten-minute demo format, I managed to cover only two lines of text before the bell rang. While it wasn't the \"A+\" performance expected for the exam, it was a profound diagnostic moment for my career.\n\n<iframe class=\"w-full aspect-video my-8 rounded-xl shadow-lg border border-gray-100\" src=\"https://www.youtube.com/embed/_gYetZL17QU\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n\n[The Data Behind the Silence: Why We Don't Play]\n\nRefusing to accept failure at face value, I surveyed my peers—senior teacher trainees—to understand the resistance to gamification. The data was illuminating:\n- Experiential Gap: Only 27% had ever experienced gamification as students.\n- Theory vs. Reality: While 90% learned the theory in their pedagogy courses, they felt unable to implement it.\n- The Efficiency Trap: Everyone agreed gamification boosts motivation, yet cited \"lack of instructional hours\" and \"pacing pressure\" as insurmountable barriers.\n\nThe conclusion is sobering: Teachers in Taiwan don't lack the skill to gamify; they lack the permission. In high student-to-teacher ratio environments, \"Direct Instruction\" is the most efficient way to deliver standardized knowledge to the masses in the shortest time.\n\n<a href=\"https://docs.google.com/spreadsheets/d/19mIM16XaFSIFvn0gVgJjMqSVAI3bsTIZAOs1-SlfmSQ/edit?usp=sharing\" target=\"_blank\" class=\"inline-flex items-center px-6 py-3 mt-4 mb-8 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-md\">📊 View the Complete Survey Data</a>\n\n[Future Vision: EdTech as the Educator’s \"Exoskeleton\"]\n\nDespite these bottlenecks, I remain an advocate for gamification. I have seen the spark it ignites in a learner’s eyes.\n\nThe current struggle is one of \"human resource cost.\" When a teacher is overwhelmed by classroom management and rigid schedules, gamification becomes a luxury. I believe EdTech is the key to breaking this deadlock. Through software, we can automate game mechanics, provide instant feedback, and deploy AI assistants to shoulder the administrative burden.\n\nWhile advanced EdTech is currently concentrated in elite private schools, I believe that as development costs decrease and policy shifts, public education will inevitably embrace these tools. I aspire to be the developer who builds the \"technological exoskeleton\" for frontline teachers—ensuring that education is no longer a one-way transmission, but a journey that reignites the desire to learn.",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "別讓 AI 成為另一道高牆：我與 Hiroki Terashima 的教育對話",
      date: "2026-05-03",
      excerpt: "在開發 AI 助教時，我正面撞上了隱形的「語言稅」。如果未來教育由 AI 驅動，不擅長英文的孩子是否註定落後？我帶著疑問與 UC Berkeley 教授展開了一場深度對話...",
      content: "最近在 WISE 平台開發 AI 助教時，我正面撞上了一個隱形的障礙。\n\n我的目標是讓助教能引導學生自主思考，而非直接給答案。但在實測中，我清楚看見了那份「隱形的語言稅」：同樣的邏輯，模型用英文對答如流，換成中文卻像變了個人。這是因為主流 LLM 的訓練資料仍以英文為主。我不禁焦慮：如果未來的教育由 AI 驅動，那不擅長英文的孩子，是否註定會被甩在後頭？\n\n帶著這個疑問，我在台師大的講座後，找上了 WISE 平台創始人、柏克萊大學教授 Hiroki Terashima。\n\n【多樣性設計：偏見的隱身斗篷】\n\n我直言不諱地詢問 Hiroki：這種數據驅動的語言鴻溝，是否會讓教育資源更加不平等？\n\n他的回答讓我當頭棒喝。他沒談演算法，而是談「人」。他說：「多樣性設計（Diversity in Design）不是選項，而是必然。」\n\n他解釋道，如果開發團隊背景單一，AI 的偏見就會像穿了「隱身斗篷」，消失在開發者的視線裡。唯有引入不同文化、不同母語的「守門人」，我們才能在模型傷害特定族群前，精準地揪出錯誤。在那場高層次的對話中，我感受到大腦全速運轉的「心流」，那是我對 EdTech 最純粹的熱愛。\n\n【從硬體到系統：做時代的領頭羊】\n\n令人驚喜的是，講座散場時，Hiroki 竟在人流中主動找到了我，交換聯絡方式並希望我持續分享見解。\n\n從他身上我看到，EdTech 專家的價值不只是調校模型，而是讓科技具備「同理心」。當代的教育科技已從「電子白板」的硬體層面，跨越到 AI 系統的架構面。我會繼續當那個敢於挑戰演算法的人，確保科技的進步是為了翻轉階級，而非加深鴻溝。\n\n---\n\n**Beyond the Algorithm: A Dialogue on AI Equity with Hiroki Terashima**\n\n[The \"Language Tax\" Anxiety]\n\nWhile developing an AI teaching assistant on the WISE platform, I encountered an invisible barrier.\n\nMy goal was to create an AI that guides students toward inquiry rather than just providing answers. However, I observed a recurring \"Linguistic Tax\": models that are articulate and logical in English often lose their nuance in Chinese. This data bias, rooted in English-centric training sets, keeps me up at night: If the future of education is AI-driven, are non-native English speakers destined to be left behind?\n\nI took this concern to Professor Hiroki Terashima (UC Berkeley), the founder of WISE, during his session at NTNU.\n\n[Diversity as a \"Safety Feature\"]\n\nI asked Hiroki point-blank: Will this data-driven linguistic gap exacerbate educational inequality?\n\nHis response shifted my perspective entirely. He didn't talk about code; he talked about humanity. \"Diversity in Design is not a choice; it is a necessity,\" stated.\n\nHe explained that in a homogenous team, bias acts like an \"invisibility cloak,\" undetected by those within the bubble. We need \"gatekeepers\" from diverse linguistic and cultural backgrounds to detect failures before they harm learners. Engaging in such a high-level exchange put me in a state of \"flow\"—a moment where my passion for EdTech felt more vivid than ever.\n\n[The Future: Empathy-Driven Systems]\n\nTo my surprise, as the session ended, Hiroki sought me out in the crowd to exchange contact information, eager to hear more about my insights.\n\nHiroki embodies the true value of an EdTech expert: it’s not just about building \"smarter\" models, but building \"empathetic\" systems. Modern EdTech has evolved from hardware like smartboards into complex AI ecosystems. I am committed to being the one who challenges the algorithm—not just as a developer, but as a pioneer ensuring that technology serves as a bridge, not a wall, for every learner.",
      imageUrl: "./blog_pdfs/Hiroki.jpg"
    },
    {
      id: 4,
      title: "🇫🇮 跨文化鷹架：將台芬對話遊戲化",
      date: "2026-05-02",
      excerpt: "我們該如何設計教育工具，來促進真實的跨文化交流？這是一場在工程學與文化人類學的有趣交會中畫下句點的實踐。",
      content: "我們該如何設計教育工具，來促進真實的跨文化交流？在本週的 ERG 交流會中，我們非常榮幸地邀請到來自芬蘭的軟體工程師 Otto 先生。\n\n為了克服潛在的語言障礙並降低「情感濾網（affective filter）」，我開發了一款客製化的 HTML 互動工具，靈感來自日本的「花牌（Karuta）」與記憶配對遊戲機制。這套「遊戲化鷹架」成功地引導了我們的對話，讓我們能夠流暢地探討複雜的社會文化現象——從芬蘭的桑拿文化與數位工具的應用，一路比較到台灣的職場生態與社會中的委婉表達習慣。\n\n活動中的一大亮點，是我們地理系背景的 Udella 全程使用英文進行簡報，精采地向 Otto 介紹了台灣的地形與民間信仰如何影響基礎建設——這是一次完美的跨學科「現象式學習（Phenomenon-based Learning）」的展現！\n\n這場交流最終在工程學與文化人類學的有趣交會中畫下句點：我們送給 Otto 一包台灣獨有的科技護身符「乖乖」，保佑他的硬體設備運作順暢！這次的活動再次印證了，教育科技（EdTech）真正的教學可供性（pedagogical affordance），在於搭建起人類經驗交流的橋樑。\n\n---\n\n**[Original English Post]**\n\n🇫🇮 Cross-Cultural Scaffolding: Gamifying the Finnish-Taiwanese Dialogue\n\nHow do we design educational tools to facilitate authentic, cross-cultural discourse? In this week’s ERG session, we had the privilege of hosting Mr. Otto, a software engineer from Finland.\n\nTo overcome potential language barriers and lower the affective filter, I developed a custom HTML-based interactive tool inspired by Japanese Karuta (花牌) and memory-matching mechanics. This \"Gamified Scaffolding\" successfully guided our dialogue, allowing us to seamlessly navigate complex socio-cultural phenomenons—comparing Finnish sauna norms and digital tool adoption with Taiwan's workplace dynamics and social indirectness.\n\nA major highlight was our Geography major, Udella, delivering a full-English presentation on how Taiwan’s topology and folk customs shape its infrastructure—a brilliant demonstration of interdisciplinary Phenomenon-based Learning. We concluded the session at the intersection of engineering and cultural anthropology: gifting Otto a pack of \"Kuai Kuai\" (乖乖), Taiwan’s unique tech-talisman for keeping hardware running smoothly! This session reaffirmed that EdTech’s true pedagogical affordance lies in bridging human experiences.",
      imageUrl: "./blog_pdfs/cross_cultural_scaffolding.jpg"
    },
    {
      id: 1,
      title: "從「篩子」到「鷹架」：為什麼少子化時代，合作是比競爭更高端的技術？",
      date: "2026-05-02",
      excerpt: "現代教育何嘗不是另一種篩子？透過標準化的考試與分發，我們精確地將學生分成三六九等。在少子化的時代，「合作」才是教育該超前部署的生存技術。",
      content: "「時代就像是一個篩子，篩得人顛沛流離。」這是王鼎鈞在《碎琉璃》中留下的名句，也是台灣國文課堂的經典篇章。\n\n但我常在想，現代教育何嘗不是另一種篩子？透過標準化的考試與分發，我們精確地將學生分成三六九等。這種「工廠化生產」的邏輯——追求良率、剔除不良品、迷信升學率——正是教育批判學者眼中的隱憂。\n\n在師大修習教育學程期間，我曾深深著迷於這些反思。在我的期中申論中，我提出了核心論點：在少子化的時代，「合作」才是教育該超前部署的生存技術。\n\n### 1. 從「存量競爭」轉向「增量價值」\n\n農業時代的教育邏輯是「資源搶奪」，因為資源有限，所以必須崇尚競爭。但現代台灣教育資源已趨於過剩，真正的危機不再是「進不去學校」，而是「進去後失去了靈魂」。我們仍保留著工業時代的篩選殘餘，卻忽視了在資源充足的現代，如何透過協作來創造「1+1>2」的品質躍遷。\n\n### 2. 學校應是「社會化鷹架」，而非「孤獨賽場」\n\n少子化讓許多孩子成了「孤島上的公主與王子」。在家庭中，他們享有優渥資源卻缺乏與手足分工、分享、甚至衝突後和解的經驗。學校，作為孩子難得聚集的場域，不應只是另一個埋頭刷題的競技場，而應成為一個具備「社會化鷹架（Social Scaffolding）」的功能體。我們該教的，是孩子如何直視他人的眼睛，和諧地在分歧中找到共識。\n\n### 3. 專案協作：未來 30 年的「職場硬實力」\n\n放眼未來，單打獨鬥的英雄時代已經過去。無論是跨國專案還是 AI 協作，這並非單純的「社交」，而是一種涉及專案管理、情緒韌性與團隊動能的「戰略素養」。在伊理教育的教材設計中，「合作」從來不是隨機分配，而是導入差異化教學（Differentiated Instruction）：\n\n我們不把任務推給「能者多勞」的強者，而是透過設計，讓不同程度的學生在團隊中都能找到自己的「Zone of Proximal Development (ZPD)」，讓每一位學生都能在特定時刻，成為帶領團隊的英雄。\n\n就像美國海豹部隊的精神：「隨時準備領導他人，隨時準備被領導。」\n\n你的孩子具備這樣的精神嗎？面對充滿不確定的 2026 甚至 2050 年，競爭固然重要，但「合作」絕對是未來 30 年最關鍵的生存課題。",
      imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
      pdfUrl: "./blog_pdfs/從篩子到鷹架.pdf"
    }
  ],

  // 3. 資源 / 教材 (Resources)
  resources: [

    {
      id: 2,
      title: "思考鏈：由思緒連結文字",
      thumbnail: "./resources/chain_of_thought_cover.png",
      pdfUrl: "./resources/思考鏈：由思緒連結文字.pdf",
      description: "這是我專為高中生設計的作文教材，引導學生運用「思考鏈」的邏輯架構，將零散的思緒精準地轉化為結構清晰、具備說服力的文字。"
    },
    {
      id: 3,
      title: "英語辯論遊戲化教材",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=300&q=80",
      pdfUrl: "./resources/英語辯論遊戲化教材.pdf",
      description: "將 RPG 機制引入英語課堂，解決小學生學習動機痛點的代表作。"
    },
    {
      id: 4,
      title: "梅西英語數位教材",
      thumbnail: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=300&q=80",
      pdfUrl: "./resources/英語素養閱讀（梅西與手機）.pdf",
      description: "結合媒體素養與體育敘事的數位教學方案，讓學生可以在國際學校中以英文表達完整想法。"
    },
    {
      id: 5,
      title: "三隻小豬倒數計時器",
      thumbnail: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=300&q=80",
      url: "./resources/三隻小豬倒數計時器拷貝.html",
      buttonText: "體驗工具",
      icon: "external-link",
      tag: "HTML 工具",
      description: "這是我開發的一個課堂倒數計時小工具，透過可愛的三隻小豬視覺設計，增加課堂活動的趣味性與參與感。"
    },
    {
      id: 6,
      title: "學術英文寫作入門：A Guide to SAQ",
      thumbnail: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&w=300&q=80",
      pdfUrl: "./resources/A Guide to Short Answer Questions.pdf",
      description: "這是我專為大學生設計的學術英文寫作入門教材。針對常見的簡答申論題 (Short Answer Questions) 提供系統化的寫作框架，幫助學生快速建立專業的學術表達能力。"
    }
  ],

  // 4. 學生心得 (Testimonials)
  testimonials: [
    {
      id: 1,
      name: {
        zh: "中華民國教育部 教材研發計畫資歷",
        en: "Curriculum Development Project, MOE Taiwan"
      },
      content: {
        zh: "參與教育部生涯發展教育教案開發，將專業 LXD 邏輯導入國家級教材，影響全台國中生。",
        en: "Project recognized by the Ministry of Education (MOE) for Career Development Curriculum. Successfully integrated LXD logic into national-level educational materials."
      }
    },
    {
      id: 2,
      name: {
        zh: "TWISE使用者測試回饋",
        en: "User Feedback from TWISE Course"
      },
      content: {
        zh: "AI 不直接給答案，而是透過引導讓我敢於下筆。這是我第一次在寫作時感到安全且有方向感。",
        en: "The AI doesn't just give answers; it provides a safe space for me to start writing through guided scaffolding. For the first time, I felt confident and directed."
      }
    },
    {
      id: 3,
      name: {
        zh: "台北市高中生",
        en: "High School Student, Taipei"
      },
      content: {
        zh: "Yvo老師教我高中國文，但我感覺他不只是在教學寫作技巧，更多的是拆解了學習背後的機制，幫助我更順利地學習，並且認識自己為什麼總是不敢寫作",
        en: "Teacher Yvo taught me high school Chinese, but I felt he wasn't just teaching writing skills. He deconstructed the mechanisms behind learning, helping me study more smoothly and understand why I was always afraid to write."
      }
    },
    {
      id: 4,
      name: {
        zh: "伊理國文合作老師",
        en: "Collaborating Teacher, Yili Education"
      },
      content: {
        zh: "使用Yvo的教材時，我的學生擁有更多動手操作的機會，雖然我講述知識的時間變少了，卻反而提升了學生的學習效果，我認為Yvo看似大膽創新實則細膩的學習體驗設計，解決了傳統教育的壓抑",
        en: "When using Yvo's materials, my students have more hands-on opportunities. Although my lecturing time decreased, the students' learning outcomes actually improved. Yvo's seemingly bold yet meticulous learning experience design resolves the oppression of traditional education."
      }
    },
    {
      id: 5,
      name: {
        zh: "學生。現就讀Brighton國際學校",
        en: "Student, Brighton College"
      },
      content: {
        zh: "Yvo老師在我們小時候幫我們考上了英國的國際學校，他用了很活潑的教材與角色扮演遊戲，讓我們自然地學會用英文表達想法。",
        en: "When we were young, Teacher Yvo helped us get accepted into a British international school. He used lively materials and role-playing games, allowing us to naturally learn how to express our thoughts in English."
      }
    },
    {
      id: 6,
      name: {
        zh: "國立台灣師範大學。博士生。",
        en: "Ph.D. Student, NTNU"
      },
      content: {
        zh: "在師大的所有英語讀書會中，Yvo主辦的EdTech讀書會是最有趣的，他教會了我與AI共做製作HTML工具的理論與技巧",
        en: "Among all the English study groups at NTNU, the EdTech study group hosted by Yvo was the most engaging. He taught me the theories and techniques of co-creating HTML tools with AI."
      }
    }
  ],

  // 5. 個人簡介 (About Profile)
  about: {
    name: "黃啟恩 (Chi-En Huang) / Yvo Wagian",
    role: {
      zh: "學習體驗設計師 (Learning Experience Designer, LXD)",
      en: "Learning Experience Designer (LXD)"
    },
    bio: {
      zh: "Yvo 是一位擁有臺灣與菲律賓雙重文化背景的學習體驗設計師 (LXD)。以「學習設計」為核心信念，秉持芬蘭 Sisu 精神，長年投身於教育革新，專注於設計跨域、以學習者為中心的敎學體驗，致力於提升亞洲數位學習品質，以科技解決傳統教育的高壓與焦慮。\n\n【第一線教學實戰：六年淬鍊的引導者】\n從 18 歲起深耕教育現場，我累積了 6 年的教學實戰經驗，涵蓋 5 年個人化家教與 4 年大型補習班資歷。作為「伊理教育」創辦人，我具備獨立營運品牌的市場洞察力。我曾擔任台北市公立國中作文班講師，並協辦多場論語、雙語及暑期營隊。憑藉跨學科教學力，我成功輔導無數學生考取頂尖高中、大學與國際學校，並專精於大學申請文件的深度輔導。\n\n【教育科技與研發：結合 AI 與遊戲化的體驗設計】\n具備師大正式教師培訓背景與中等教育學程根基，我擅長將抽象理論轉化為數位教材。在「精準提示工程 (Prompt Engineering)」上，我能撰寫結構化的 System Prompt，實現「非直接給答案」的 AI 鷹架系統（TWISE AI 系統已累積破百人次實測）。在教材設計上，我成功開發結合 RPG 元素的英語辯論遊戲化教材、多模態敘事教學，並產出「SAQ 攻堅指南」，將複雜的邏輯寫作轉譯為可操作的模塊。\n\n【學術成就與國際視野：從台灣走向全球】\n我精通中、英、菲三語（TOEFL 95, Reading 28），具備天然的跨文化溝通優勢與 EMI 全英環境下的學習支架設計能力。在師大期間不僅獲頒模擬教甄傑出獎，以 GPA 3.6 於教育領域表現卓越，更曾與 UC Berkeley 教授針對「AI 語言霸權」進行深度學術辯論。高中時期便作為 EDGE 國際科展代表進行全英語科學發表。2026 年，我將帶著這些經驗，前往全球教育巔峰——芬蘭坦佩雷大學 (TAU) 進行深造。\n\n【個人特質與跨界影響力：擁抱多元身份】\n身為台菲混血，這份跨文化基因讓我能從邊緣與中心的交界點，以更寬廣的視角審視全球教育議題。在專業領域外，我也展現了強大的藝術策展與組織力——不僅創辦了「愛哭男孩」樂團，更透過數位敘事力製作了「師大's Story」Podcast 及「菲菲在台灣」Vlog，持續用多元的媒介發揮社會影響力。",
      en: "As a mixed-heritage (Taiwanese/Philippine) educator and EdTech Architect, Yvo harnesses the Finnish ‘Sisu’ resilience and Learning Experience Design (LXD) expertise to lead transformative education projects. Passionate about bridging cultures and advancing digital learning, Yvo empowers 21st-century learners for the age of AI.\n\n[Frontline Teaching & Practical Experience]\nDeeply engaged in education since the age of 18, I bring 6 years of frontline teaching experience, including 5 years of personalized tutoring and 4 years in large-scale cram schools. As the founder of \"Yili Education,\" I combine pedagogical insight with entrepreneurial thinking. My experience spans from lecturing writing classes in Taipei public middle schools to organizing bilingual summer camps. With cross-disciplinary expertise in Chinese, English, and international curricula, I have successfully guided countless students to top high schools and universities, specializing in university application counseling.\n\n[EdTech & R&D Assets: Fusing AI and Gamification]\nBacked by formal teacher training from NTNU, I excel at translating abstract pedagogical theories into impactful digital materials. In Prompt Engineering, I design structured System Prompts to realize scaffolding AI tools that guide rather than spoon-feed (with the TWISE AI system already surpassing 100+ interactions). My R&D portfolio includes gamified English debate materials with RPG elements, multimodal narratives, and \"A Guide to SAQ,\" which breaks down complex academic writing into actionable modules.\n\n[Academic Excellence & Global Reach]\nFluent in Mandarin, English (TOEFL 95, Reading 28), and Tagalog (B2), I possess a natural advantage in cross-cultural communication and EMI (English as a Medium of Instruction) scaffolding. Having achieved an Outstanding Award in the NTNU Teaching Simulation and a 3.6 GPA in educational disciplines, I have engaged in deep academic debates on \"AI Linguistic Hegemony\" with UC Berkeley professors. My global engagement began early as Taiwan's representative at the EDGE International Science Fair. In 2026, I will further my studies at the pinnacle of global education: Tampere University (TAU) in Finland.\n\n[Identity & Leadership: Embracing Diversity]\nMy Taiwanese-Philippine heritage allows me to examine global educational issues from the intersection of the margins and the center. Beyond academics, I demonstrate strong organizational and artistic curation skills—as the founder of the \"Cryboy\" band, and through digital storytelling in projects like the \"NTNU's Story\" Podcast and \"Fifi in Taiwan\" Vlog, continuously expanding my social impact through diverse media."
    },
    avatarUrl: "./resources/profile_photo_enhanced.png"
  },

  // 6. 首頁大公告 (Featured Announcement)
  featuredAnnouncement: {
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
    title: {
      zh: "2026 芬蘭坦佩雷大學 (TAU) 交換計畫啟動",
      en: "2026 TAU Finland Exchange Program Launched"
    },
    description: {
      zh: "秉持著芬蘭 Sisu 精神，Yvo 將於 2026 年前往芬蘭坦佩雷大學進行教育科技與媒體教育的深度交換，期待帶回最前沿的學習體驗設計觀念。",
      en: "Embracing the Finnish spirit of Sisu, Yvo will embark on an in-depth exchange in Educational Technology and Media Education at Tampere University in 2026, looking forward to bringing back cutting-edge concepts in Learning Experience Design."
    }
  },

  // 7. 首頁精選專案 (Featured Project)
  featuredProject: {
    imageUrl: "./resources/三隻小豬遊戲照片.jpg",
    title: {
      zh: "遊戲化教學實踐：三隻小豬差異化解謎",
      en: "Gamified Differentiated Instruction: Three Little Pigs Puzzle"
    },
    description: {
      zh: "這是我將「差異化教學」與「遊戲化」結合的實踐案例。不同程度的孩子會拿到不同的「機密文件」，他們無法靠自己單打獨鬥過關，必須互相溝通、合作，拼湊各自的線索才能解決問題。這不僅解決了學習動機的痛點，更是在課堂中打造了真實的社會化鷹架（Social Scaffolding）。",
      en: "A practical case combining 'Differentiated Instruction' and 'Gamification'. Students of different levels receive different 'secret documents'. They cannot pass the level alone; they are forced to communicate, cooperate, and piece together their clues to solve the problem. This not only addresses the pain point of learning motivation but also builds real social scaffolding in the classroom."
    },
    documents: [
      { name: "機密文件 A (Sophie 版)", url: "./resources/三隻小豬＿SOPHIE.pdf" },
      { name: "機密文件 B (Cindy 版)", url: "./resources/三隻小豬＿cindy.pdf" }
    ]
  },

  // 8. 遊戲化教學理念 (Gamification Philosophy)
  gamificationPhilosophy: {
    title: {
      zh: "遊戲化教學：將心理學注入學習基因",
      en: "Gamified Teaching: Infusing Psychology into the DNA of Learning"
    },
    description: {
      zh: "遊戲化教學是 Yvo 老師長年鑽研的專業核心。透過精準導入遊戲化元素（Gamification），並深度結合教育心理學與教材教法的專業知識，我為每一位學習者打造出有趣、無壓力且具高度鼓勵性的學習環境。我們不只是在玩遊戲，而是在具備「教學鷹架」的動態情境中，激發學習者的內在動機，讓知識的獲取成為一場充滿成就感的探索。",
      en: "Gamified instruction is a core expertise cultivated by Yvo over years of specialized practice. By meticulously integrating game mechanics with educational psychology and advanced pedagogical strategies, I design immersive, stress-free, and encouraging learning environments. Our mission transcends mere play; we utilize \"pedagogical scaffolding\" within dynamic contexts to ignite intrinsic motivation, transforming the acquisition of knowledge into a rewarding journey of discovery."
    }
  }
};
