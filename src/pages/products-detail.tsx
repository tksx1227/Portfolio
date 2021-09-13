import Head from "next/head";

import { Layout } from "../components/Layout";
import { productList } from "../const/productInfo";
import { ProductDetailCard } from "../components/ProductDetailCard";

const ProductsDetail = () => {
  return (
    <>
      <Head>
        <title>tksx1227 - products detail</title>
        <meta name="description" content="tsxk1227's products detail" />
      </Head>
      <Layout>
        <section id="products">
          <div className={"tracking-wider mt-8 md:mt-16"}>
            <p className={"text-indigo-800 text-lg font-semibold"}>PRODUCTS</p>
            <h2 className={"text-2xl font-bold tracking-wider md:text-3xl"}>
              制作物
            </h2>
          </div>
          <div
            className={
              "glass-container mt-8 mb-24 px-6 py-10 space-y-24 md:mb-48 md:px-10 md:space-y-36"
            }
          >
            {productList.map((productInfo, idx) => {
              return (
                <ProductDetailCard
                  key={productInfo.title}
                  productInfo={productInfo}
                />
              );
            })}
            <div className={"text-center"}>
              <p
                className={
                  "inline-block bg-white bg-opacity-50 rounded shadow-lg px-12 py-4 cursor-default"
                }
              >
                \\ 随時更新中 //
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default ProductsDetail;
