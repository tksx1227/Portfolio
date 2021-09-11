import { SkillsCard } from "./SkillsCard";

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

export const Skills = () => {
  return (
    <section id="skills" className={"mt-24 lg:mt-36"}>
      <div>
        <p className={"text-indigo-800 text-lg font-semibold"}>SKILLS</p>
        <h2 className={"text-2xl font-bold tracking-wider lg:text-3xl"}>
          所有スキル
        </h2>
      </div>
      <div className={"glass-container mt-8 px-6 py-10 lg:px-10"}>
        <SkillsCard title={"Languages"} logoList={languageLogoList} />
        <SkillsCard title={"Frameworks"} logoList={frameworkLogoList} />
        <SkillsCard
          isLastItem={true}
          title={"Others"}
          logoList={othersLogoList}
        />
      </div>
    </section>
  );
};
