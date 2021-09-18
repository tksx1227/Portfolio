import { ProductInfo } from "../types/productInfo";

export const productList: ProductInfo[] = [
  {
    title: "Portfolio",
    githubURL: "https://github.com/tksx1227/Portfolio",
    overview: "今まさに開いているサイト",
    description: [
      "自分のこれまでの活動、自分の紹介等を簡潔にまとめるためにポートフォリオを作りました。",
      "案外いいデザインに仕上がったと思っているので自己満しています。",
    ],
    pointList: [
      "学び始めて日の浅い技術をメインで使ってみた（Next.js, Tailwind CSS）。",
      "自分が綺麗だと思うデザインを Figma で作ってみて、そのラフ案を実装するまで短期間で行った（背景画像も自作）。",
    ],
    image: {
      src: "/product_images/portfolio.png",
      width: 1920,
      height: 1080,
    },
    period: "3日",
    memberNum: 1,
    role: "デザイン, 設計, 実装",
    techList: [
      {
        type: "フロントエンド",
        techs: ["TypeScript", "Next.js", "Tailwind CSS"],
      },
      { type: "デザイン", techs: ["Figma"] },
    ],
  },
  {
    title: "Morning To Do",
    image: {
      src: "/product_images/morning-to-do.png",
      width: 1920,
      height: 1080,
    },
    overview: "エンジニア向けの朝用ToDoアプリ",
    description: [
      "TechBowl主催のハッカソンにて開発したアプリです。",
      "ハッカソンのテーマは「朝弱いエンジニアのための何かを創れ」というものであり、朝専用のToDoアプリを開発しました。",
    ],
    pointList: [
      "明るい色をメインで使い、タスクを付箋用紙のようなデザインすることで、全体的に柔らかい雰囲気のUIになるように心がけた。",
      "達成したタスクの個数に応じて、GitHub を模した形でログを残し、視覚的にもモチベーションを保てるようにした。",
    ],
    githubURL: "https://github.com/tksx1227/Morning-To-Do",
    period: "3週間",
    role: "デザイン, 設計, 実装",
    memberNum: 1,
    techList: [
      {
        type: "フロントエンド",
        techs: ["HTML", "CSS", "JavaScript", "jQuery"],
      },
      { type: "バックエンド", techs: ["PHP", "MySQL"] },
    ],
  },
  {
    title: "リゼロ新着通知Bot",
    image: {
      src: "/product_images/rezero-notification-bot.jpg",
      width: 750,
      height: 1334,
    },
    overview:
      "「Re：ゼロから始める異世界生活」の最新話更新をお知らせする LINE Bot",
    description: [
      "「小説家になろう」にて連載中の小説、通称”リゼロ”が更新されたときに、その旨を知らせてくれる LINE Bot を作りました。",
      "リゼロは不定期更新かつ、公式からのお知らせが特に無いため、こちらのアカウントを友だち登録しておくといち早く最新話を読むことができます。",
    ],
    pointList: [
      "Cloud Functions の TimeScheduler を使用し、5分毎に更新を確認することで、更新後すぐに通知を飛ばすことができる。",
    ],
    githubURL: "https://github.com/tksx1227/rezero-notification-bot",
    period: "2日",
    role: "設計, 実装",
    memberNum: 1,
    techList: [
      {
        type: "バックエンド",
        techs: ["Node.js", "TypeScript", "Cloud Functions", "Firestore"],
      },
    ],
  },
  {
    title: "換気促進アプリ",
    image: {
      src: "/product_images/co2-sensor.png",
      width: 1920,
      height: 1080,
    },
    description: "二酸化炭素濃度を検知して換気を促すIoTアプリ",
    introduction: [
      "HaitLab内で開催されたハッカソンにて開発したアプリです。",
      "ハッカソンの条件は「Arduino・機械学習のいずれかを含むWebアプリケーションを作る」というものであり、Arduinoを用いたIoTアプリを開発しました。",
    ],
    pointList: [
      "二酸化炭素センサとダストセンサの２つを使い、室内の空気の状態を定量化することで、換気のタイミングを合理的に決めることができるようにした。",
      "Realtime Databaseを採用することで、室内の状態がリアルタイムでグラフ描画されるようになっている。",
    ],
    githubURL: "https://github.com/tksx1227/team1",
    period: "3週間",
    role: "Arduinoの回路設計、バックエンド",
    memberNum: 3,
    techList: [
      { type: "デバイス", techs: ["Arduino"] },
      {
        type: "フロントエンド",
        techs: ["TypeScript", "Next.js"],
      },
      { type: "バックエンド", techs: ["Python", "Firebase"] },
    ],
  },
  // {
  //   title: "Qiitaくん",
  //   image: {
  //     src: "/product_images/rezero-notification-bot.jpg",
  //     width: 1920,
  //     height: 1080,
  //   },
  //   overview: "Qiita のトレンド記事を教えてくれる Alexa スキル",
  //   description: [
  //     "期間と記事数を教えると、該当する Qiita のトレンド記事を読み上げてくれます。",
  //   ],
  //   pointList: [
  //     "自分用として開発したものであるため、オプションとして、読み上げた記事を LINE の方に送信する機能も搭載している。",
  //   ],
  //   githubURL: "https://github.com/tksx1227/Qiita_Trend",
  //   period: "2日",
  //   role: "設計, 実装",
  //   memberNum: 1,
  //   techList: [
  //     {
  //       type: "バックエンド",
  //       techs: ["Python", "Flask", "Heroku"],
  //     },
  //   ],
  // },
  // {
  //   title: "女優識別Bot",
  //   image: {
  //     src: "/product_images/rezero-notification-bot.jpg",
  //     width: 1920,
  //     height: 1080,
  //   },
  //   overview: "5人の女優を判別する LINE Bot",
  //   description: [
  //     "深層学習を組み込むことで画像認識を行う LINE Bot を作りました。",
  //     "こちらは深層学習を体系的に学んだ後に、アウトプットとして最初に実装したアプリです。",
  //     "仕組みとしては、LINE 側で受信した画像を一度保存し、その画像をあらかじめ学習しているモデルに通すことで、類似度を算出、返信するようになっています。",
  //   ],
  //   pointList: [
  //     "画像データの収集から、モデルの構築、学習までを全て自分で行っている。",
  //     "当時、学習してからまだ日の浅かった PyTorch を採用している。",
  //   ],
  //   githubURL: "https://github.com/tksx1227/Actress_Identification_bot",
  //   period: "1週間",
  //   role: "設計, 実装",
  //   memberNum: 1,
  //   techList: [
  //     {
  //       type: "バックエンド",
  //       techs: ["Python", "Flask", "Heroku"],
  //     },
  //     {
  //       type: "モデル構築・学習",
  //       techs: ["PyTorch"],
  //     },
  //   ],
  // },
];
