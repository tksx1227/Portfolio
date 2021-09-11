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
    <div className={isLastItem ? "" : "mb-6"}>
      <p
        className={
          "font-bold text-xl text-indigo-900 tracking-wide pb-2 border-b-2"
        }
      >
        {title}
      </p>
      <p className={"text-lg tracking-widest font-semibold mt-4"}>
        ある程度使える
      </p>
      <div className={"flex flex-wrap mb-8"}>
        {logoList.available.map(({ src, alt }) => {
          return (
            <div className={"m-3"} key={alt}>
              <div className="hidden pointer-events-none select-none lg:block">
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
              <div className="hidden pointer-events-none select-none lg:block">
                <Image src={src} alt={alt} width="80" height="80"></Image>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};