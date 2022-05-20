import { TimelineInfoType } from "../types/timelineInfo";

type TimelineCardType = {
  timelineInfo: TimelineInfoType;
  idx: number;
};

export const TimelineCard = (props: TimelineCardType) => {
  const { timelineInfo, idx } = props;
  const { start, finish = "" } = timelineInfo.period;
  let period: string;

  if (start === finish) {
    period = start;
  } else {
    period = start + " ~ " + finish;
  }

  return (
    <div className={"md:pr-24"}>
      <div className={`${idx === 0 ? null : "hidden"} border-l-2 border-gray-200 pl-6 md:ml-14 h-4 md:pl-24 md:h-8 dark:border-gray-700`}></div>
      <div className={"relative pl-6 md:ml-14 md:pl-24"}>
        <p className={"border-l-2 border-transparent text-slate-500 dark:text-gray-400"}>{period}</p>
        <div className={"absolute top-0 -left-4"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={idx === 0 ? "text-green-400 dark:text-green-700" : "text-gray-400 dark:text-gray-500"}>
            <circle cx="17.1" cy="12.7" r="5" strokeWidth="3.0"></circle>
            <line x1="5.1" y1="12.7" x2="12.1" y2="12.7" strokeWidth="3.0"></line>
            <line x1="22.1" y1="12.7" x2="28.1" y2="12.7" strokeWidth="3.0"></line>
          </svg>
        </div>
      </div>
      <div className={"border-l-2 border-gray-200 pl-6 pb-20 md:ml-14 md:pl-24 md:pb-32 dark:border-gray-700"}>
        <p className={"mb-8 text-slate-500 dark:text-gray-400"}>
          {timelineInfo.type}
        </p>
        <h3
          className={
            "text-indigo-700 text-2xl mb-3 font-bold dark:text-indigo-300"
          }
        >
          {timelineInfo.title}
        </h3>
        <div
          className={
            "mb-6 h-0.5 bg-gradient-to-r from-indigo-400 via-blue-500 to-green-300"
          }
        ></div>
        <div className={"text-left md:inline-block"}>
          {timelineInfo.descriptions.map((shortDescription) => {
            return (
              <div key={shortDescription} className={"mt-4 leading-relaxed"}>
                <p>{shortDescription}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};
