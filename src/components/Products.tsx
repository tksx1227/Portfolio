import Image from "next/image";

export const Products = () => {
  return (
    <section id="products" className={"mt-36"}>
      <div className={"tracking-wider"}>
        <p className={"text-indigo-800 text-lg font-semibold"}>PRODUCTS</p>
        <h2 className={"text-gray-600 text-3xl font-bold tracking-wider"}>
          制作物
        </h2>
      </div>
      <div className={"glass-container p-10 mt-8"}>
        <div className={"flex flex-row"}>
          <div className={"container shadow-lg w-2/3 bg-red-100"}>
            <Image
              src="/product_images/morning-to-do.png"
              alt="Morning to do"
              className={"border-2 opacity-80"}
              objectFit="cover"
              width={1920}
              height={1080}
            />
          </div>
          <div className={"ml-12 w-1/3"}>
            <p>Morning To Do</p>
            <p>エンジニア向けの朝用ToDoアプリ</p>
            <br />
            <p>開発期間：3週間</p>
            <p>制作人数：1人</p>
            <p>
              使用技術：
              <br />
              &nbsp;&nbsp;フロント：HTML, CSS, JavaScript, jQuery
              <br />
              &nbsp;&nbsp;バックエンド：PHP, MySQL
            </p>
          </div>
        </div>
        <div className={"flex flex-row mt-24"}>
          <div className={"ml-12 w-1/3"}>
            <p>Morning To Do</p>
            <p>エンジニア向けの朝用ToDoアプリ</p>
            <br />
            <p>開発期間：3週間</p>
            <p>制作人数：1人</p>
            <p>
              使用技術：
              <br />
              &nbsp;&nbsp;フロント：HTML, CSS, JavaScript, jQuery
              <br />
              &nbsp;&nbsp;バックエンド：PHP, MySQL
            </p>
          </div>
          <div className={"container shadow-lg w-2/3 bg-red-100"}>
            <Image
              src="/product_images/morning-to-do.png"
              alt="Morning to do"
              className={"border-2 opacity-80"}
              objectFit="cover"
              width={1920}
              height={1080}
            />
          </div>
        </div>
        <div className={"mt-24 text-center"}>
          <button
            className={
              "shadow-lg px-16 py-4 rounded-full transition duration-300 bg-indigo-500 text-white hover:text-indigo-500 hover:bg-white"
            }
          >
            もっと見る
          </button>
        </div>
      </div>
    </section>
  );
};
