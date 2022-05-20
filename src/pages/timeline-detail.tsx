import Head from "next/head";

import { Layout } from "../components/Layout";
import { TimelineCard } from "../components/TimelineCard";
import { timelineInfoList } from "../const/timelineInfo";
import { TimelineInfoType } from "../types/timelineInfo";

const TimelineDetail = () => {
  return (
    <>
      <Head>
        <title>tksx1227 - timeline detail</title>
        <meta name="description" content="tsxk1227's timeline detail" />
      </Head>
      <Layout>
        <section id="timeline" className={"mt-16 pt-8 md:mt-28"}>
          <div className={"tracking-wider"}>
            <p
              className={
                "text-lg font-semibold text-indigo-800 dark:text-indigo-300"
              }
            >
              TIMELINE
            </p>
            <h2 className={"text-2xl font-bold tracking-wider md:text-3xl"}>
              タイムライン
            </h2>
          </div>
          <div
            className={
              "glass-container-light mt-8 mb-24 px-6 py-10 md:mb-48 md:px-10 dark:glass-container-dark"
            }
          >
            {timelineInfoList.map((timelineInfo: TimelineInfoType, idx: number) =>
              <TimelineCard key={timelineInfo.title} timelineInfo={timelineInfo} idx={idx} />
            )}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default TimelineDetail;
