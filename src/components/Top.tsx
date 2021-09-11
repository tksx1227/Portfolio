import Image from "next/image";

export const Top = () => {
  return (
    <section id="top" className={"text-center"}>
      <Image
        src="/icon.jpg"
        alt="Profile Icon"
        className={"rounded-full"}
        width={150}
        height={150}
      />
      <p className={"text-2xl mt-4 tracking-wider"}>TOMORI</p>
      <p className={"text-gray-400"}>JAPAN FUKUOKA</p>
      <div
        className={
          "glass-container mt-4 p-6 text-left text-sm leading-relaxed tracking-widest lg:p-10 lg:text-center lg:text-base"
        }
      >
        <p>地方の情報系大学3年生</p>
        <p>エンターテイメントに関する事業で活躍したい願望があります。</p>
      </div>
    </section>
  );
};
