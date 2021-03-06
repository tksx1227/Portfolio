type Reference<T, R> = T extends 'get' ? R : string | null;
interface GetsType<T> {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
}
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
type Structure<T, P> = T extends 'get'
  ? { id: string } & DateType & Required<P>
  : T extends 'gets'
  ? GetsType<{ id: string } & DateType & Required<P>>
  : Partial<DateType> & (T extends 'patch' ? Partial<P> : P);

export type timeline<T = 'get'> = Structure<
  T,
  {
    /**
     * タイトル
     */
    title: string;
    /**
     * カテゴリ
     */
    category: string;
    /**
     * 説明
     */
    description: string;
    /**
     * 開始日時
     */
    started_at: string;
    /**
     * 終了日時
     */
    finished_at?: string;
  }
>;

export type skills<T = 'get'> = Structure<
  T,
  {
    /**
     * タイトル
     */
    title: string;
    /**
     * 画像パス
     */
    image_path: { url: string; width: number; height: number };
    /**
     * ステータス
     */
    status: ['available' | 'learning'];
    /**
     * カテゴリ
     */
    category: ['language' | 'framework' | 'other'];
  }
>;

export type products<T = 'get'> = Structure<
  T,
  {
    /**
     * タイトル
     */
    title: string;
    /**
     * 概要
     */
    overview: string;
    /**
     * 説明
     */
    description: string;
    /**
     * GitHubのリンク
     */
    github_url?: string;
    /**
     * アピールポイント
     */
    appeal_points?: string;
    /**
     * 期間
     */
    period: string;
    /**
     * 役割
     */
    role: ('フロントエンド' | 'デザイン' | '設計' | '実装' | 'バックエンド')[];
    /**
     * メンバー数
     */
    member_num: number;
    /**
     * 画像情報
     */
    image_info: products_image_info[];
    /**
     * 完成日
     */
    finished_at?: string;
    /**
     * 使用技術
     */
    tech_info: products_tech_info[];
  }
>;

interface products_image_info {
  /**
   * 画像パス
   */
  path: { url: string; width: number; height: number };
  /**
   * 横幅
   */
  width: number;
  /**
   * 縦幅
   */
  height: number;
}
interface products_tech_info {
  /**
   * 技術領域
   */
  category: ['フロントエンド' | 'バックエンド' | 'デザイン' | 'インフラ' | 'マイコン'];
  /**
   * 技術名を;で連結した文字列
   */
  tech_names: string;
}

export interface EndPoints {
  get: {
    timeline: timeline<'get'>;
    skills: skills<'get'>;
    products: products<'get'>;
  };
  gets: {
    timeline: timeline<'gets'>;
    skills: skills<'gets'>;
    products: products<'gets'>;
  };
  post: {
    timeline: timeline<'post'>;
    skills: skills<'post'>;
    products: products<'post'>;
  };
  put: {
    timeline: timeline<'put'>;
    skills: skills<'put'>;
    products: products<'put'>;
  };
  patch: {
    timeline: timeline<'patch'>;
    skills: skills<'patch'>;
    products: products<'patch'>;
  };
}
