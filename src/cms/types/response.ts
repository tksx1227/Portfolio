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

export interface EndPoints {
  get: {
    timeline: timeline<'get'>;
    products: products<'get'>;
  };
  gets: {
    timeline: timeline<'gets'>;
    products: products<'gets'>;
  };
  post: {
    timeline: timeline<'post'>;
    products: products<'post'>;
  };
  put: {
    timeline: timeline<'put'>;
    products: products<'put'>;
  };
  patch: {
    timeline: timeline<'patch'>;
    products: products<'patch'>;
  };
}
