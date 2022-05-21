export type ProductInfo = {
  title: string;
  images: {
    src: string;
    width: number;
    height: number;
  }[];
  overview: string;
  description: string[];
  pointList: string[];
  githubURL: string;
  period: string;
  role: string;
  memberNum: number;
  techList: {
    type: string;
    techs: string[];
  }[];
};
