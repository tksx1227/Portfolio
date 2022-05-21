import { skills } from '../cms/types/response';
import { SkillsCard } from './SkillsCard';

type Props = {
  skillInfoStructure: {
    languageList: skills[] | null;
    frameworkList: skills[] | null;
    otherList: skills[] | null;
  };
};

export const Skills = (props: Props) => {
  const { skillInfoStructure } = props;
  const { languageList, frameworkList, otherList } = skillInfoStructure;

  return (
    <section id='skills' className={'mt-16 pt-8 md:mt-28'}>
      <div className={'tracking-wider'}>
        <p className={'text-lg font-semibold text-indigo-800 dark:text-indigo-300'}>SKILLS</p>
        <h2 className={'text-2xl font-bold tracking-wider md:text-3xl'}>所有スキル</h2>
      </div>
      <div
        className={
          'glass-container-light mt-8 px-6 py-10 space-y-16 md:px-10 dark:glass-container-dark'
        }>
        {languageList ? <SkillsCard title={'Languages'} skillList={languageList} /> : null}
        {frameworkList ? <SkillsCard title={'Frameworks'} skillList={frameworkList} /> : null}
        {otherList ? <SkillsCard title={'Others'} skillList={otherList} /> : null}
        {languageList || frameworkList || otherList ? null : (
          <div className={'py-8 text-center'}>
            <h3>有効なアイテムがありません。</h3>
          </div>
        )}
      </div>
    </section>
  );
};
