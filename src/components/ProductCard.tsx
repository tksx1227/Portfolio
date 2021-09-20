import Image from "next/image";
import { ProductInfo } from "../types/productInfo";

type Props = {
  isEven: boolean;
  productInfo: ProductInfo;
};

export const ProductCard = (props: Props) => {
  const { isEven, productInfo } = props;

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isEven ? "" : "md:flex-row-reverse"
      }`}
    >
      <div className={"block md:hidden"}>
        <h3
          className={
            "text-indigo-700 text-2xl mb-3 font-bold dark:text-indigo-300"
          }
        >
          {productInfo.title}
        </h3>
        <div
          className={
            "mb-6 h-0.5 bg-gradient-to-r from-indigo-400 via-blue-500 to-green-300 md:mb-12"
          }
        ></div>
      </div>
      <div className={"md:w-2/3 flex justify-center"}>
        <div>
          <div className={"flex product-card-img rounded overflow-hidden"}>
            <Image
              src={productInfo.images[0].src}
              alt={productInfo.title}
              objectFit="contain"
              width={productInfo.images[0].width}
              height={productInfo.images[0].height}
            />
          </div>
        </div>
      </div>
      <div
        className={`mt-8 leading-relaxed md:mt-0 md:w-1/3 ${
          isEven ? "md:ml-12 md:text-left" : "md:mr-12 md:text-right"
        }`}
      >
        <div className={"text-left md:inline-block"}>
          <p
            className={
              "hidden text-xl text-indigo-700 font-bold md:block dark:text-indigo-300"
            }
          >
            {productInfo.title}
          </p>
          <p className={"mb-6"}>{productInfo.overview}</p>
          <p>
            <span className={"font-bold"}>開発期間</span>：{productInfo.period}
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
                  "text-blue-600 transition duration-200 hover:opacity-60 dark:text-blue-300"
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
                    className={"list-disc grid grid-cols-2 gap-x-6 md:gap-x-12"}
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
  );
};
