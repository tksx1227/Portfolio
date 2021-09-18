import Image from "next/image";

import { ProductInfo } from "../types/productInfo";

export const ProductDetailCard = (props: { productInfo: ProductInfo }) => {
  const { productInfo } = props;

  return (
    <div>
      <h3 className={"text-3xl font-bold mb-4 text-indigo-700"}>
        {productInfo.title}
      </h3>
      <div
        className={
          "mb-6 h-0.5 bg-gradient-to-r from-indigo-400 via-blue-500 to-green-300 md:mb-12"
        }
      ></div>
      <div className={"flex flex-col md:flex-row"}>
        <div className={"md:w-1/2 flex justify-center"}>
          <div>
            <div className={"flex product-card-img rounded overflow-hidden"}>
              <Image
                src={productInfo.image.src}
                alt={productInfo.title}
                objectFit="contain"
                width={productInfo.image.width}
                height={productInfo.image.height}
              />
            </div>
          </div>
        </div>
        <div
          className={
            "mt-8 leading-relaxed md:mt-0 md:w-1/2 md:ml-12 md:text-left"
          }
        >
          <div className={"inline-block text-left"}>
            <div>
              <p className={"text-xl font-semibold mb-2"}>備考</p>
              <p>{productInfo.overview}</p>
              <br />
              {productInfo.description.map((text) => (
                <p key={text}>{text}</p>
              ))}
              <br />
              <p className={"tracking-wider"}>主なポイント♪</p>
              <ul className={"list-disc space-y-2"}>
                {productInfo.pointList.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className={"text-xl font-semibold mt-8 mb-2"}>基本情報</p>
              <p>
                <span className={"font-bold"}>開発期間</span>：
                {productInfo.period}
              </p>
              <p>
                <span className={"font-bold"}>制作人数</span>：
                {productInfo.memberNum}人
              </p>
              <p>
                <span className={"font-bold"}>役割</span>：{productInfo.role}
              </p>
              {productInfo.githubURL !== "" && (
                <p>
                  <span className={"font-bold"}>リポジトリ</span>：
                  <a
                    href={productInfo.githubURL}
                    target="_brank"
                    title="Github"
                    className={
                      "transition duration-200 text-blue-600 hover:opacity-60"
                    }
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
                          "list-disc grid grid-cols-2 gap-x-6 md:gap-x-0 lg:grid-cols-3"
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
};
