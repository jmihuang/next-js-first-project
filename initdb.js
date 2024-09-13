const sql = require("better-sqlite3");
const db = sql("catalogue.db"); //開啟catalogue資料表
const products = [
  {
    alt: "自然淨化,環境清潔",
    name: "介觀植礦防護液",
    engName: "Natural All-Purpose Protective Spray",
    capacity: "50ml / 1.69fl.oz",
    image: "/assets/bath-containers-plant-table.png",
    slug: "1",
    price: "450",
    desc:
      "本產品含有天然植物精華和礦物成分，如茶樹油和微量礦物質，能有效去除空氣中及表面污染物，並形成長效保護層。\n\n" +
      "其溫和的配方無添加化學成分，不會刺激皮膚或呼吸系統，非常適合家庭環境使用，尤其是有小孩和寵物的家庭。\n\n" +
      "使用後無需過度擦拭，輕輕噴灑即可快速發揮功效，讓居家空間保持清新、健康，並為您帶來舒適的生活體驗。",
  },
  {
    alt: "芳香淨化,室內清潔",
    name: "香氛淨化噴霧",
    engName: "Aromatic Purifying Spray",
    capacity: "100ml / 3.38fl.oz",
    image: "/bath-containers-plant-table.png",
    slug: "2",
    price: "500",
    desc:
      "香氛淨化噴霧融合了薰衣草、茶樹和尤加利等多種天然精油，具備強效抗菌和淨化空氣的雙重功效。\n\n" +
      "精油的香氣能夠舒緩情緒，減少壓力，並改善室內空氣質量。這款噴霧非常適合用於臥室、客廳和浴室，讓空氣更加清新宜人。\n\n" +
      "其配方不含任何人工香精或有害化學物質，確保安全、環保。使用方便，噴灑後即可迅速發揮效力，持久清新香氣，營造放鬆的居家氛圍。",
  },
  {
    alt: "深層保濕,護膚產品",
    name: "深層保濕霜",
    engName: "Deep Moisturizing Cream",
    capacity: "30ml / 1fl.oz",
    image: "/bath-containers-plant-table.png",
    slug: "3",
    price: "600",
    desc:
      "深層保濕霜富含高濃度的透明質酸、維生素E和乳木果油等滋潤成分，能迅速滲透肌膚，達到深層保濕效果。\n\n" +
      "該產品能有效修復乾燥受損的肌膚屏障，提供全天候的水分補充，使肌膚長時間保持柔嫩平滑。\n\n" +
      "其不油膩的質地適合各種膚質，尤其是乾性和敏感性肌膚。可在早晚潔膚後使用，作為日常護膚程序中的重點保濕產品，為肌膚帶來健康自然的光澤。",
  },
  {
    alt: "抗皺修復,美容護理",
    name: "抗皺修護精華液",
    engName: "Anti-Wrinkle Repair Serum",
    capacity: "40ml / 1.35fl.oz",
    image: "/bath-containers-plant-table.png",
    slug: "4",
    price: "800",
    desc:
      "本精華液蘊含高效抗氧化成分，如胜肽、膠原蛋白和維生素C，專為減少細紋和皺紋設計。\n\n" +
      "其輕盈的質地可迅速滲透肌膚深層，促進細胞再生，恢復肌膚的緊緻彈性。定期使用能有效提升肌膚質感，令肌膚更顯年輕。\n\n" +
      "適合各種膚質，特別推薦給希望改善肌膚老化跡象的人士。搭配日常護膚程序使用，可顯著提升肌膚亮度與緊實度。",
  },
  {
    alt: "清爽淨化,去油護理",
    name: "清爽去油洗面奶",
    engName: "Refreshing Oil-Control Cleanser",
    capacity: "150ml / 5fl.oz",
    image: "/bath-containers-plant-table.png",
    slug: "5",
    price: "300",
    desc:
      "清爽去油洗面奶含有天然植物萃取成分，如綠茶和蘆薈，能溫和去除臉部多餘油脂和污垢。\n\n" +
      "特別針對油性和混合性肌膚設計，幫助調節皮脂分泌，防止毛孔堵塞和痘痘生成。使用後肌膚清爽不緊繃，適合每日使用。\n\n" +
      "富含保濕成分，確保在清潔的同時不會過度乾燥，讓肌膚保持水油平衡。清新自然的香氣帶來潔淨愉悅的洗臉體驗。",
  },
  {
    alt: "天然滋養,髮質修護",
    name: "天然滋養護髮素",
    engName: "Natural Nourishing Conditioner",
    capacity: "250ml / 8.45fl.oz",
    image: "/bath-containers-plant-table.png",
    slug: "6",
    price: "350",
    desc:
      "這款護髮素含有椰子油、霍霍巴油和乳木果油等多種天然滋養成分，能深層滋養並修護受損髮質。\n\n" +
      "專為乾燥和脆弱髮質設計，有效提升髮絲柔順度和光澤，減少毛躁和斷裂問題。\n\n" +
      "質地輕盈，使用後不會讓頭髮感到沉重，適合每日護理。持續使用，能夠讓頭髮更加健康強韌，易於打理。",
  },
  {
    alt: "溫和去角質,全身護理",
    name: "溫和去角質磨砂膏",
    engName: "Gentle Exfoliating Scrub",
    capacity: "200ml / 6.76fl.oz",
    image: "/bath-containers-plant-table.png",
    slug: "7",
    price: "400",
    desc:
      "溫和去角質磨砂膏蘊含天然杏仁顆粒和維生素E，有效去除老廢角質和死皮，讓肌膚光滑細緻。\n\n" +
      "配方溫和不刺激，適合全身使用，特別推薦用於手肘、膝蓋等粗糙部位。\n\n" +
      "使用後肌膚立即感受到柔嫩和潤澤，持續使用能改善膚質，提亮膚色，讓肌膚恢復自然光采。",
  },
  {
    alt: "深層清潔,毛孔護理",
    name: "深層清潔面膜",
    engName: "Deep Cleansing Mask",
    capacity: "120ml / 4fl.oz",
    image: "/bath-containers-plant-table.png",
    slug: "8",
    price: "450",
    desc:
      "含有活性炭和高嶺土的深層清潔面膜，能深入毛孔吸附多餘油脂和污垢，有效改善黑頭和粉刺問題。\n\n" +
      "同時添加蘆薈和維生素B5，具有保濕和舒緩功效，不會讓肌膚感到乾燥緊繃。\n\n" +
      "使用後肌膚感覺清爽潔淨，毛孔更顯細緻。適合一週使用兩次，幫助維持肌膚的潔淨與健康。",
  },
  {
    alt: "清新提神,天然護膚",
    name: "清新提神爽膚水",
    engName: "Refreshing Toner",
    capacity: "200ml / 6.76fl.oz",
    image: "/bath-containers-plant-table.png",
    slug: "9",
    price: "420",
    desc:
      "富含玫瑰水和金縷梅提取物的爽膚水，能有效收斂毛孔並平衡肌膚的pH值。\n\n" +
      "清新的配方有助於提亮膚色，並讓肌膚保持清爽水潤。使用後能迅速為肌膚補充水分，為後續保養步驟做好準備。\n\n" +
      "適合各種膚質，尤其適合油性和混合性肌膚。早晚潔膚後使用，讓肌膚呈現自然健康光澤。",
  },
  {
    alt: "天然潤唇,護唇產品",
    name: "天然滋潤護唇膏",
    engName: "Natural Lip Balm",
    capacity: "10g / 0.35oz",
    image: "/bath-containers-plant-table.png",
    slug: "10",
    price: "150",
    desc:
      "天然護唇膏融合了蜂蠟、乳木果油和椰子油等滋潤成分，能迅速為乾燥雙唇補充水分和營養。\n\n" +
      "質地輕盈不黏膩，能夠長效保濕，防止雙唇乾裂和脫皮。\n\n" +
      "小巧便攜，隨時隨地都能為雙唇提供滋潤保護。適合日常使用，讓雙唇保持柔嫩和健康。",
  },
  {
    alt: "美白保濕,日間護膚",
    name: "美白保濕乳液",
    engName: "Whitening Moisturizing Lotion",
    capacity: "50ml / 1.69fl.oz",
    image: "/bath-containers-plant-table.png",
    slug: "11",
    price: "480",
    desc:
      "本乳液含有熊果苷和維生素C衍生物，能有效提亮膚色和淡化暗沉，改善不均勻膚色問題。\n\n" +
      "同時富含玻尿酸和甘油等保濕成分，能深入滋潤肌膚，讓肌膚保持水潤柔軟。\n\n" +
      "輕盈質地易於吸收，不油膩，適合日間使用，提供全天候的保濕與美白效果，讓肌膚煥發光采。",
  },
  {
    alt: "夜間修復,深層滋養",
    name: "夜間修復精華霜",
    engName: "Night Repair Cream",
    capacity: "50ml / 1.69fl.oz",
    image: "/bath-containers-plant-table.png",
    slug: "12",
    price: "900",
    desc:
      "夜間修復精華霜蘊含視黃醇、胜肽和植物精華，能深層修復肌膚，同時促進膠原蛋白生成。\n\n" +
      "專為夜間修護設計，幫助在睡眠過程中修復受損肌膚細胞，減少細紋和皺紋的產生。\n\n" +
      "使用後肌膚感覺更加柔嫩緊緻。適合所有膚質，特別是成熟肌膚，讓肌膚重現青春光彩。",
  },
  {
    alt: "全身滋養,乾燥護理",
    name: "全身滋養潤膚露",
    engName: "Full-Body Nourishing Lotion",
    capacity: "500ml / 16.9fl.oz",
    image: "/bath-containers-plant-table.png",
    slug: "13",
    price: "550",
    desc:
      "富含乳木果油、可可脂和維生素E的全身滋養潤膚露，能有效滋潤乾燥肌膚，修復粗糙表面。\n\n" +
      "快速吸收且不油膩的質地，適合日常全身使用，特別是乾燥氣候下的保濕需求。\n\n" +
      "使用後肌膚感覺柔滑且富有彈性，適合各種膚質，讓全身肌膚都能得到呵護和滋養。",
  },
  {
    alt: "抗老護理,青春活膚",
    name: "青春活膚抗老霜",
    engName: "Youth Revitalizing Anti-Aging Cream",
    capacity: "60ml / 2fl.oz",
    image: "/bath-containers-plant-table.png",
    slug: "14",
    price: "980",
    desc:
      "這款抗老霜富含胜肽、膠原蛋白和透明質酸，有效提升肌膚彈性，減少皺紋和細紋。\n\n" +
      "其獨特配方能深層滋潤和修復肌膚，令肌膚更顯緊緻光滑，恢復年輕狀態。\n\n" +
      "適合所有膚質，尤其是熟齡肌膚，作為日常抗老護理的首選產品，提供全天候的保養與修復效果。",
  },
];

// 創建表格
db.prepare(
  `
    CREATE TABLE IF NOT EXISTS catalogue (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        alt TEXT NOT NULL,
        name TEXT NOT NULL,
        engName TEXT NOT NULL,
        capacity TEXT NOT NULL,
        image TEXT NOT NULL,
        slug TEXT NOT NULL UNIQUE,
        price TEXT NOT NULL,
        desc TEXT
    )
`
).run();

// 插入數據
async function initData() {
  const stmt = db.prepare(`
        INSERT INTO catalogue (alt, name, engName, capacity, image, slug, price) VALUES (
            @alt,
            @name,
            @engName,
            @capacity,
            @image,
            @slug,
            @price
        )
    `);

  for (const product of products) {
    stmt.run(product);
  }
}

// 執行數據初始化
initData();
