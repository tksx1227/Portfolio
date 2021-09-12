export type ProductInfo = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  description: string;
  introduction: string[];
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
