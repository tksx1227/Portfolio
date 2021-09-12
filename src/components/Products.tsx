import { ProductCard } from "./ProductCard";

const productList = [
  {
    title: "Morning To Do",
    description: "エンジニア向けの朝用ToDoアプリ",
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
    description: "今まさに開いているサイト",
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

export const Products = () => {
  return (
    <section id="products" className={"mt-24 lg:mt-36"}>
      <div className={"tracking-wider"}>
        <p className={"text-indigo-800 text-lg font-semibold"}>PRODUCTS</p>
        <h2 className={"text-2xl font-bold tracking-wider lg:text-3xl"}>
          制作物
        </h2>
      </div>
      <div className={"glass-container mt-8 px-6 py-10 space-y-28 lg:px-10"}>
        {productList.map((productInfo, idx) => (
          <ProductCard
            key={productInfo.title}
            isEven={idx % 2 == 0}
            productInfo={productInfo}
          />
        ))}
        <div className={"mt-24 text-center"}>
          <button
            className={
              "shadow-xl px-16 py-4 rounded-full transition duration-300 bg-indigo-500 text-white hover:text-indigo-500 hover:bg-white"
            }
          >
            もっと見る
          </button>
        </div>
      </div>
    </section>
  );
};
