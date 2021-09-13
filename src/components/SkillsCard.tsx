import Image from "next/image";

type Props = {
  title: string;
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
  const { title, logoList } = props;

  return (
    <div>
      <h3 className={"font-bold text-xl text-indigo-900 tracking-wide pb-2"}>
        {title}
      </h3>
      <div
        className={
          "h-0.5 bg-gradient-to-r from-indigo-400 via-blue-500 to-green-300"
        }
      ></div>
      <p className={"text-lg tracking-widest font-semibold mt-6 mb-4"}>
        ある程度使える
      </p>
      <div className={"flex flex-wrap mb-8"}>
        {logoList.available.map(({ src, alt }) => {
          return (
            <div className="m-3" key={alt}>
              <div className="hidden select-none md:block">
                <Image src={src} alt={alt} width="80" height="80"></Image>
              </div>
              <div className="block select-none md:hidden">
                <Image src={src} alt={alt} width="50" height="50"></Image>
              </div>
            </div>
          );
        })}
      </div>
      <p className={"text-lg tracking-widest font-semibold mb-4"}>学習中</p>
      <div className={"flex flex-wrap"}>
        {logoList.learning.map(({ src, alt }) => {
          return (
            <div className="m-3" key={alt}>
              <div className="hidden select-none md:block">
                <Image src={src} alt={alt} width="80" height="80"></Image>
              </div>
              <div className="block select-none md:hidden">
                <Image src={src} alt={alt} width="50" height="50"></Image>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
