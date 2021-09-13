import Link from "next/link";

import { ProductCard } from "./ProductCard";
import { productList } from "../const/productInfo";

export const Products = () => {
  return (
    <section id="products" className={"mt-16 pt-8 lg:mt-28"}>
      <div className={"tracking-wider"}>
        <p className={"text-indigo-800 text-lg font-semibold"}>PRODUCTS</p>
        <h2 className={"text-2xl font-bold tracking-wider lg:text-3xl"}>
          制作物
        </h2>
      </div>
      <div
        className={
          "glass-container mt-8 px-6 py-10 space-y-24 lg:space-y-40 lg:px-10"
        }
      >
        <ProductCard
          key={productList[0].title}
          isEven={true}
          productInfo={productList[0]}
        />
        <ProductCard
          key={productList[1].title}
          isEven={false}
          productInfo={productList[1]}
        />
        <div className={"text-center"}>
          <Link href="/products-detail">
            <a
              className={
                "shadow-xl inline-block px-8 py-3 rounded-full transition duration-300 bg-indigo-500 text-white hover:text-indigo-500 hover:bg-white lg:px-16 lg:py-4"
              }
            >
              もっと見る
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};
