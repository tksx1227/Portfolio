export type TimelineInfoType = {
  title: string;
  period: {
    start: string;
    finish?: string;
  };
  type: string;
  descriptions: string[];
};
