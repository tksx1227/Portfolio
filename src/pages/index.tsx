import Head from "next/head";
import Image from "next/image";

const USER_NAME = "TOMORI";

const languageLogoList = {
  available: [
    { src: "/logos/c.svg", alt: "c" },
    { src: "/logos/php.svg", alt: "php" },
    { src: "/logos/css.svg", alt: "css" },
    { src: "/logos/html.svg", alt: "html" },
    { src: "/logos/python.svg", alt: "python" },
    { src: "/logos/javascript.svg", alt: "javascript" },
    { src: "/logos/typescript.svg", alt: "typescript" },
  ],
  learning: [
    { src: "/logos/csharp.svg", alt: "csharp" },
    { src: "/logos/nodejs.svg", alt: "node.js" },
  ],
};

const frameworkLogoList = {
  available: [
    { src: "/logos/pytorch.svg", alt: "pytorch" },
    { src: "/logos/tensorflow.svg", alt: "tensorflow" },
  ],
  learning: [
    { src: "/logos/nextjs.svg", alt: "nest.js" },
    { src: "/logos/flutter.svg", alt: "flutter" },
    { src: "/logos/electron.svg", alt: "electron" },
  ],
};

const othersLogoList = {
  available: [
    { src: "/logos/mysql.svg", alt: "mysql" },
    { src: "/logos/flask.svg", alt: "flask" },
    { src: "/logos/react.svg", alt: "react" },
    { src: "/logos/jquery.svg", alt: "jquery" },
    { src: "/logos/firebase.svg", alt: "firebase" },
  ],
  learning: [{ src: "/logos/unity.svg", alt: "unity" }],
};

const Home = () => {
  return (
    <>
      <div className={"font-mono container mx-auto px-16"}>
        <Head>
          <title>tksx1227</title>
          <meta name="description" content="@tksx1227's Portfolio" />
        </Head>
        <header className={""}>
          <div className={"font-bold flex flex-row justify-end space-x-6 p-10"}>
            <a href="#top">HOME</a>
            <a href="#skills">SILLS</a>
            <a href="#products">PRODUCTS</a>
            <a href="#profile">PROFILE</a>
          </div>
        </header>
        <main>
          <section id="top" className={"text-center"}>
            <Image
              src="/icon.jpg"
              alt="Profile Icon"
              className={"rounded-full mx-auto"}
              width={150}
              height={150}
            />
            <p>{USER_NAME}</p>
            <p>JAPAN FUKUOKA</p>
            <div className={"text-center"}>
              <p className={"tracking-widest"}>地方の情報系大学3年生</p>
              <p className={"tracking-widest"}>
                エンターテイメントに関する事業で活躍したい願望があります。
              </p>
            </div>
          </section>
          <section id="skills" className={"mt-28"}>
            <div className={"tracking-wider"}>
              <p>SKILLS</p>
              <h2>所有スキル</h2>
            </div>
            <div className={"glass-container p-10"}>
              <div className={"mb-6"}>
                <p className={"font-bold text-lg tracking-wide mb-4"}>
                  Languages
                </p>
                <p className={"tracking-widest"}>ある程度使える</p>
                <div className={"flex flex-wrap"}>
                  {languageLogoList.available.map(({ src, alt }) => {
                    return (
                      <div className={"m-3"} key={alt}>
                        <div className="hidden pointer-events-none select-none lg:block">
                          <Image
                            src={src}
                            alt={alt}
                            width="80"
                            height="80"
                          ></Image>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className={"text-lg tracking-widest"}>学習中</p>
                <div className={"flex flex-wrap"}>
                  {languageLogoList.learning.map(({ src, alt }) => {
                    return (
                      <div className={"m-3"} key={alt}>
                        <div className="hidden pointer-events-none select-none lg:block">
                          <Image
                            src={src}
                            alt={alt}
                            width="80"
                            height="80"
                          ></Image>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className={"mb-6"}>
                <p className="font-bold text-lg tracking-wide mb-4">
                  Frameworks
                </p>
                <p className={"tracking-widest"}>ある程度使える</p>
                <div className={"flex flex-wrap"}>
                  {frameworkLogoList.available.map(({ src, alt }) => {
                    return (
                      <div className={"m-3"} key={alt}>
                        <div className="hidden pointer-events-none select-none lg:block">
                          <Image
                            src={src}
                            alt={alt}
                            width="80"
                            height="80"
                          ></Image>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className={"text-lg tracking-widest"}>学習中</p>
                <div className={"flex flex-wrap"}>
                  {frameworkLogoList.learning.map(({ src, alt }) => {
                    return (
                      <div className={"m-3"} key={alt}>
                        <div className="hidden pointer-events-none select-none lg:block">
                          <Image
                            src={src}
                            alt={alt}
                            width="80"
                            height="80"
                          ></Image>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <p className="font-bold text-lg tracking-wide mb-4">Others</p>
                <p className={"tracking-widest"}>ある程度使える</p>
                <div className={"flex flex-wrap"}>
                  {othersLogoList.available.map(({ src, alt }) => {
                    return (
                      <div className={"m-3"} key={alt}>
                        <div className="hidden pointer-events-none select-none lg:block">
                          <Image
                            src={src}
                            alt={alt}
                            width="80"
                            height="80"
                          ></Image>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className={"text-lg tracking-widest"}>学習中</p>
                <div className={"flex flex-wrap"}>
                  {othersLogoList.learning.map(({ src, alt }) => {
                    return (
                      <div className={"m-3"} key={alt}>
                        <div className="hidden pointer-events-none select-none lg:block">
                          <Image
                            src={src}
                            alt={alt}
                            width="80"
                            height="80"
                          ></Image>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
          <section id="products" className={"mt-28"}>
            <div className={"tracking-wider"}>
              <p>PRODUCTS</p>
              <h2 className={"tracking-wider"}>制作物</h2>
            </div>
            <div className={"glass-container p-10"}>
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
                    "shadow-lg px-16 py-4 rounded-full transition duration-200 bg-indigo-500 text-white hover:text-indigo-500 hover:bg-white"
                  }
                >
                  もっと見る
                </button>
              </div>
            </div>
          </section>
          <section id="profile" className={"mt-28"}>
            <div className={"tracking-wider"}>
              <p>PROFILE</p>
              <h2 className={"tracking-wider"}>プロフィール</h2>
            </div>
            <div className={"glass-container p-10"}>
              <div className={"flex flex-row space-x-10"}>
                <div className={"flex-shrink-0"}>
                  <Image
                    src="/icon.jpg"
                    alt="Profile Icon"
                    className={"rounded-full mx-auto"}
                    width={150}
                    height={150}
                  />
                  <p className={"text-center"}>{USER_NAME}</p>
                  <div className={"flex flex-row justify-around"}>
                    <div>
                      <a
                        href="https://github.com/tksx1227"
                        target="_brank"
                        title="Github"
                      >
                        <svg
                          width="35"
                          height="35"
                          viewBox="0 0 35 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={
                            "transition duration-200 text-gray-400 fill-current hover:text-indigo-400"
                          }
                        >
                          <path
                            d="M17.4998 34.9997C27.1647 34.9997 34.9997 27.1647 34.9997 17.4998C34.9997 7.83495 27.1647 0 17.4998 0C7.83495 0 0 7.83495 0 17.4998C0 27.1647 7.83495 34.9997 17.4998 34.9997Z"
                            fill="white"
                          />
                          <path d="M32.6525 8.73014C31.0876 6.04446 28.9649 3.9182 26.2839 2.35089C23.6025 0.783496 20.6751 0 17.4998 0C14.325 0 11.3967 0.783736 8.7158 2.35089C6.03453 3.91812 3.91193 6.04446 2.34703 8.73014C0.78237 11.4157 0 14.3484 0 17.5281C0 21.3477 1.11254 24.7823 3.33818 27.8329C5.56358 30.8838 8.43847 32.9949 11.9626 34.1664C12.3728 34.2426 12.6765 34.189 12.8739 34.0068C13.0715 33.8244 13.1701 33.5959 13.1701 33.3224C13.1701 33.2767 13.1662 32.8661 13.1586 32.0899C13.1508 31.3138 13.1471 30.6367 13.1471 30.059L12.623 30.1498C12.2889 30.2111 11.8673 30.2371 11.3584 30.2297C10.8497 30.2226 10.3216 30.1692 9.77479 30.0699C9.22778 29.9715 8.71899 29.7433 8.24804 29.3857C7.77733 29.0281 7.44317 28.5601 7.24564 27.9823L7.01778 27.4571C6.86591 27.1074 6.6268 26.719 6.30014 26.2932C5.97348 25.867 5.64315 25.5781 5.30899 25.426L5.14945 25.3116C5.04314 25.2356 4.9445 25.1439 4.85328 25.0375C4.76213 24.9311 4.6939 24.8246 4.64833 24.718C4.60268 24.6113 4.64051 24.5237 4.76221 24.4551C4.88392 24.3864 5.10388 24.3531 5.42303 24.3531L5.87859 24.4212C6.18242 24.4822 6.55824 24.6644 7.00653 24.9689C7.45458 25.2732 7.8229 25.6687 8.11157 26.1554C8.46113 26.7794 8.88228 27.2549 9.37622 27.5821C9.86976 27.9093 10.3674 28.0726 10.8686 28.0726C11.3698 28.0726 11.8027 28.0346 12.1674 27.9588C12.5317 27.8827 12.8735 27.7684 13.1927 27.6163C13.3294 26.5964 13.7016 25.8129 14.3091 25.2653C13.4433 25.1741 12.6649 25.0369 11.9735 24.8544C11.2825 24.6716 10.5685 24.375 9.83185 23.9638C9.09482 23.5532 8.4834 23.0432 7.99744 22.4349C7.5114 21.8262 7.11252 21.0271 6.80134 20.0384C6.49 19.0492 6.3343 17.9081 6.3343 16.6148C6.3343 14.7734 6.93446 13.2064 8.13455 11.913C7.57238 10.5286 7.62545 8.97659 8.29393 7.25723C8.73448 7.12014 9.3878 7.22302 10.2536 7.56524C11.1195 7.90763 11.7535 8.20093 12.1562 8.44411C12.5589 8.68721 12.8816 8.89321 13.1247 9.06029C14.5377 8.66482 15.9959 8.46705 17.4997 8.46705C19.0034 8.46705 20.462 8.66482 21.8751 9.06029L22.7409 8.51278C23.333 8.14745 24.0322 7.81266 24.8369 7.50833C25.642 7.20415 26.2576 7.12038 26.6832 7.25747C27.3665 8.97691 27.4274 10.5288 26.8651 11.9132C28.0651 13.2066 28.6655 14.774 28.6655 16.6151C28.6655 17.9083 28.5092 19.053 28.1983 20.0498C27.8871 21.0467 27.4848 21.845 26.9912 22.4463C26.4971 23.0476 25.8818 23.5535 25.1452 23.9641C24.4084 24.375 23.6941 24.6715 23.0031 24.8543C22.3118 25.037 21.5334 25.1744 20.6676 25.2657C21.4573 25.9501 21.8522 27.0305 21.8522 28.5064V33.3217C21.8522 33.5953 21.9471 33.8237 22.1372 34.0062C22.3271 34.1884 22.6269 34.242 23.0372 34.1657C26.5618 32.9943 29.4367 30.8832 31.662 27.8323C33.8871 24.7817 35 21.3471 35 17.5275C34.9992 14.3482 34.2164 11.4157 32.6525 8.73014Z" />
                        </svg>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://twitter.com/tksx1227"
                        target="_brank"
                        title="Twitter"
                      >
                        <svg
                          width="35"
                          height="35"
                          viewBox="0 0 35 35"
                          xmlns="http://www.w3.org/2000/svg"
                          className={
                            "transition duration-200 text-gray-400 fill-current hover:text-indigo-400"
                          }
                        >
                          <path d="M17.5008 34.9997C27.1657 34.9997 35.0007 27.1647 35.0007 17.4998C35.0007 7.83495 27.1657 0 17.5008 0C7.83595 0 0.00100708 7.83495 0.00100708 17.4998C0.00100708 27.1647 7.83595 34.9997 17.5008 34.9997Z" />
                          <path
                            d="M28.2194 12.5768C27.4695 12.9093 26.6628 13.1342 25.8168 13.2347C26.6806 12.7172 27.3435 11.8983 27.6563 10.9209C26.8481 11.4004 25.9525 11.7482 25.0001 11.9357C24.237 11.1231 23.1499 10.6152 21.9461 10.6152C19.6364 10.6152 17.7631 12.4885 17.7631 14.7982C17.7631 15.1261 17.8002 15.4452 17.872 15.7515C14.3956 15.5771 11.3132 13.9119 9.24997 11.3805C8.88998 11.9981 8.68346 12.7172 8.68346 13.4836C8.68346 14.9345 9.42248 16.2154 10.5443 16.9653C9.8589 16.9438 9.21347 16.7557 8.64977 16.4416C8.64946 16.4593 8.64946 16.4771 8.64946 16.4946C8.64946 18.5213 10.0919 20.2118 12.0051 20.5958C11.6545 20.6919 11.2842 20.7427 10.9033 20.7427C10.6332 20.7427 10.3714 20.7168 10.1163 20.6682C10.6484 22.3296 12.1929 23.5391 14.0238 23.5731C12.5919 24.6952 10.7885 25.3637 8.82821 25.3637C8.4913 25.3637 8.15752 25.344 7.8309 25.305C9.68109 26.4923 11.8803 27.1845 14.2424 27.1845C21.9364 27.1845 26.144 20.8107 26.144 15.2827C26.144 15.1014 26.1399 14.9208 26.1318 14.7417C26.9498 14.1521 27.6588 13.4156 28.2194 12.5768Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://zenn.dev/tksx1227"
                        target="_brank"
                        title="Zenn"
                      >
                        <svg
                          width="35"
                          height="35"
                          viewBox="0 0 35 35"
                          xmlns="http://www.w3.org/2000/svg"
                          className={
                            "transition duration-200 text-gray-400 fill-current hover:text-indigo-400"
                          }
                        >
                          <rect width="35" height="35" rx="17.5" />
                          <path
                            d="M7.23921 28.3625H11.7618C12.0014 28.3625 12.2137 28.2291 12.3471 28.0431L24.7978 7.58529C24.9575 7.31941 24.7715 7 24.4521 7H20.169C19.9558 7 19.7698 7.10617 19.6636 7.2931L7.02687 27.9905C6.94702 28.1502 7.05318 28.3625 7.23921 28.3625ZM22.8296 28.0431L28.7088 18.5987C28.8948 18.3056 28.6825 17.9335 28.3367 17.9335H24.08C23.9203 17.9335 23.7606 18.0134 23.6808 18.1468L17.6419 27.8044C17.4822 28.044 17.6682 28.3634 17.9613 28.3634H22.2979C22.5102 28.3625 22.7225 28.2563 22.8296 28.0431V28.0431Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={"border border-gray-200"}></div>
                <div>
                  <p className={"font-medium leading-relaxed"}>
                    地方の情報系大学に通う大学3年生
                    <br />
                    <br />
                    幼い頃からモノづくりが好きで、親から工学系に進むといいと吹き込まれる。
                    <br />
                    中学時代にインターネットにハマり、この頃辺りから情報系の分野に興味を持つ。
                    <br />
                    <br />
                    大学は情報系の学部へ進路を決定し、入学後初めてプログラミング（C言語）に触れる。
                    <br />
                    <br />
                    学部１年生の頃から、自主的にプログラミングを学ぶ習慣を付け、独学でHTML,
                    CSS, JavaScriptの勉強を始める。
                    <br />
                    その後、ハッカソンや勉強会へ参加することで経験を積みながら、機械学習などの新たな技術の学習もするようになる。
                    <br />
                    <br />
                    現在は、モダンJSやネイティブアプリ、ゲームエンジンについて学習しつつ、趣味としてBlenderを嗜んでいる。
                    <br />
                    <br />
                    将来的には、エンターテイメントに関する事業のバックエンドエンジニアとして活躍したい。
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className={"bg-gray-200 w-full h-24"}>
          <p className={"text-center"}>&copy; Copyright 2021 tksx1227.</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
