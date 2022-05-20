export type TimelineInfoType = {
  title: string;
  period: {
    start: string;
    finish: string | undefined;
  };
  type: string;
  descriptions: string[];
};
