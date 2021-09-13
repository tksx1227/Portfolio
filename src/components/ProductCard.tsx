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
      className={`flex flex-col lg:flex-row ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
    >
      <h3 className={"block text-2xl mb-6 font-bold text-indigo-700 lg:hidden"}>
        {productInfo.title}
      </h3>
      <div className={"lg:w-2/3 flex justify-center"}>
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
        className={`mt-8 leading-relaxed lg:mt-0 lg:w-1/3 ${
          isEven ? "lg:ml-12 lg:text-left" : "lg:mr-12 lg:text-right"
        }`}
      >
        <div className={"inline-block text-left"}>
          <p className={"hidden text-xl font-bold text-indigo-700 lg:block"}>
            {productInfo.title}
          </p>
          <p className={"mb-6"}>{productInfo.description}</p>
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
                  <ul className={"list-disc grid grid-cols-2"}>
                    {techInfo.techs.map((tech) => {
                      return (
                        <li key={tech} className={"ml-4"}>
                          {tech}
                        </li>
                      );
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