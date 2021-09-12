import Image from "next/image";

type Props = {
  title: string;
  isLastItem?: boolean;
  logoList: {
    available: {
      src: string;
      alt: string;
    }[];
    learning: {
      src: string;
      alt: string;
    }[];
  };
};

export const SkillsCard = (props: Props) => {
  const { isLastItem = false, title, logoList } = props;

  return (
    <div className={isLastItem ? "" : "mb-12"}>
      <p className={"font-bold text-xl text-indigo-900 tracking-wide pb-2"}>
        {title}
      </p>
      <div
        className={
          "h-0.5 bg-gradient-to-r from-indigo-400 via-blue-500 to-green-300"
        }
      ></div>
      <p className={"text-lg tracking-widest font-semibold mt-4"}>
        ある程度使える
      </p>
      <div className={"flex flex-wrap mb-8"}>
        {logoList.available.map(({ src, alt }) => {
          return (
            <div className={"m-3"} key={alt}>
              <div>
                <Image src={src} alt={alt} width="80" height="80"></Image>
              </div>
            </div>
          );
        })}
      </div>
      <p className={"text-lg tracking-widest font-semibold"}>学習中</p>
      <div className={"flex flex-wrap mb-8"}>
        {logoList.learning.map(({ src, alt }) => {
          return (
            <div className={"m-3"} key={alt}>
              <div>
                <Image src={src} alt={alt} width="80" height="80"></Image>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
