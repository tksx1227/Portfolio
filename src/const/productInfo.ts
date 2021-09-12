export const productList = [
  {
    title: "Morning To Do",
    githubURL: "https://github.com/tksx1227/Morning-To-Do",
    description: "エンジニア向けの朝用ToDoアプリ",
    introduction: [
      "TechBowl主催のハッカソンにて開発したアプリです。",
      "ハッカソンのテーマは「朝弱いエンジニアのための何かを創れ」というものであり、朝専用のToDoアプリを開発しました。",
    ],
    pointList: [
      "明るい色をメインで使い、タスクを付箋用紙のようなデザインすることで、全体的に柔らかい雰囲気のUIになるように心がけた。",
      "達成したタスクの個数に応じて、GitHubを模した形でログを残し、視覚的にもモチベーションを保てるようにした。",
    ],
    imgPath: "/product_images/morning-to-do.png",
    period: "3週間",
    numOfDev: 1,
    techList: [
      {
        type: "フロントエンド",
        techs: ["HTML", "CSS", "JavaScript", "jQuery"],
      },
      { type: "バックエンド", techs: ["PHP", "MySQL"] },
    ],
  },
  {
    title: "Portfolio",
    githubURL: "https://github.com/tksx1227/Portfolio",
    description: "今まさに開いているサイト",
    introduction: [
      "自分のこれまでの活動、これからの目標等を簡潔にまとめるためにポートフォリオを作りました。",
    ],
    pointList: [
      "学び始めて日の浅い技術をメインで使ってみた（Next.js, Tailwind CSS）。",
      "自分が綺麗だと思うデザインをFigmaで作ってみて、そのラフ案を実装するまで短期間で行った（背景画像も自作）。",
    ],
    imgPath: "/product_images/portfolio.png",
    period: "3日",
    numOfDev: 1,
    techList: [
      {
        type: "フロントエンド",
        techs: ["TypeScript", "Next.js", "Tailwind CSS"],
      },
    ],
  },
];
