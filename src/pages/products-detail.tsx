import Image from "next/image";

import { Layout } from "../components/Layout";
import { productList } from "../const/productInfo";

const ProductsDetail = () => {
  return (
    <Layout>
      <section id="products">
        <div className={"tracking-wider"}>
          <p className={"text-indigo-800 text-lg font-semibold"}>PRODUCTS</p>
          <h2 className={"text-2xl font-bold tracking-wider lg:text-3xl"}>
            制作物
          </h2>
        </div>
        <div
          className={
            "glass-container mt-8 px-6 py-10 space-y-24 lg:px-10 lg:space-y-36"
          }
        >
          {productList.map((productInfo, idx) => {
            return (
              <div key={idx}>
                <h3 className={"text-3xl font-bold mb-4 text-indigo-700"}>
                  {productInfo.title}
                </h3>
                <div
                  className={
                    "mb-6 h-0.5 bg-gradient-to-r from-indigo-400 via-blue-500 to-green-300 lg:mb-12"
                  }
                ></div>
                <div className={"flex flex-col lg:flex-row"}>
                  <div className={"rounded overflow-hidden lg:w-1/2"}>
                    <Image
                      src={productInfo.imgPath}
                      alt={productInfo.title}
                      objectFit="contain"
                      className={""}
                      width={1920}
                      height={1080}
                    />
                  </div>
                  <div
                    className={
                      "mt-8 leading-relaxed lg:mt-0 lg:w-1/2 lg:ml-12 lg:text-left"
                    }
                  >
                    <div className={"inline-block text-left"}>
                      <div>
                        <p className={"text-xl font-semibold mb-2"}>備考</p>
                        <p>{productInfo.description}</p>
                        <br />
                        {productInfo.introduction.map((text) => (
                          <p key="text">{text}</p>
                        ))}
                        <br />
                        <p>
                          主なポイントは次の{productInfo.pointList.length}
                          点です。
                        </p>
                        <ul className={"list-disc space-y-2"}>
                          {productInfo.pointList.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className={"text-xl font-semibold mt-8 mb-2"}>
                          基本情報
                        </p>
                        <p>
                          <span className={"font-bold"}>開発期間</span>：
                          {productInfo.period}
                        </p>
                        <p>
                          <span className={"font-bold"}>制作人数</span>：
                          {productInfo.numOfDev}人
                        </p>
                        {productInfo.githubURL !== "" && (
                          <p>
                            <span className={"font-bold"}>リポジトリ</span>：
                            <a
                              href={productInfo.githubURL}
                              target="_brank"
                              title="Github"
                              className={"text-blue-600 hover:opacity-60"}
                            >
                              こちら
                            </a>
                          </p>
                        )}
                        <div>
                          <span className={"font-bold"}>使用技術</span>：
                          {productInfo.techList.map((techInfo) => {
                            return (
                              <div key={techInfo.type} className={"mb-4"}>
                                <p>{techInfo.type}</p>

                                <ul
                                  className={
                                    "list-inside list-disc grid grid-cols-2"
                                  }
                                >
                                  {techInfo.techs.map((tech) => {
                                    return <li key={tech}>{tech}</li>;
                                  })}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className={"text-center"}>
            <p
              className={
                "inline-block shadow-lg px-12 py-4 border-b-2 cursor-default"
              }
            >
              \\ 随時更新中 //
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductsDetail;
