import Image from "next/image";

type Props = {
  isEven: boolean;
  productInfo: {
    title: string;
    description: string;
    imgPath: string;
    period: string;
    numOfDev: number;
    techList: {
      type: string;
      techs: string[];
    }[];
  };
};

export const ProductCard = (props: Props) => {
  const { isEven, productInfo } = props;

  return (
    <div
      className={`flex flex-col lg:flex-row ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
    >
      <div
        className={
          "container product-card-img min-h-full rounded overflow-hidden lg:w-2/3"
        }
      >
        <Image
          src={productInfo.imgPath}
          alt={productInfo.title}
          objectFit="cover"
          // className={"opacity-20"}
          width={1920}
          height={1080}
        />
      </div>
      <div
        className={`mt-8 leading-relaxed lg:mt-0 lg:w-1/3 ${
          isEven ? "lg:ml-12 lg:text-left" : "lg:mr-12 lg:text-right"
        }`}
      >
        <div className={"inline-block text-left"}>
          <p className={"text-xl font-bold text-indigo-700"}>
            {productInfo.title}
          </p>
          <p>{productInfo.description}</p>
          <br />
          <p>
            <span className={"font-bold"}>開発期間</span>：{productInfo.period}
          </p>
          <p>
            <span className={"font-bold"}>制作人数</span>：
            {productInfo.numOfDev}人
          </p>
          <div>
            <span className={"font-bold"}>使用技術</span>：
            {productInfo.techList.map((techInfo) => {
              return (
                <div key={techInfo.type} className={"mb-4"}>
                  <p>{techInfo.type}</p>
                  <div className={"grid grid-cols-2"}>
                    {techInfo.techs.map((tech) => {
                      return (
                        <li key={tech} className={"ml-4"}>
                          {tech}
                        </li>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
