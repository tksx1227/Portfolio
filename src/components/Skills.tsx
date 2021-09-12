import { SkillsCard } from "./SkillsCard";

import {
  languageLogoList,
  frameworkLogoList,
  othersLogoList,
} from "../const/logoInfo";

export const Skills = () => {
  return (
    <section id="skills" className={"mt-24 lg:mt-36"}>
      <div>
        <p className={"text-indigo-800 text-lg font-semibold"}>SKILLS</p>
        <h2 className={"text-2xl font-bold tracking-wider lg:text-3xl"}>
          所有スキル
        </h2>
      </div>
      <div className={"glass-container mt-8 px-6 py-10 space-y-16 lg:px-10"}>
        <SkillsCard title={"Languages"} logoList={languageLogoList} />
        <SkillsCard title={"Frameworks"} logoList={frameworkLogoList} />
        <SkillsCard title={"Others"} logoList={othersLogoList} />
      </div>
    </section>
  );
};
