export type Posts = {
  data: Data;
  status: number;
  message: string;
  cached: boolean;
};

export type Data = {
  itens: Iten[];
  pageInfo: PageInfo;
};

export type Iten = {
  id: string;
  slug: string;
  uri: string;
  title: string;
  status: string;
  date: string;
  modified: string;
  extraFields: ExtraFields;
  customFields: CustomFields;
  category: Category;
};

export type ExtraFields = {
  subtitle: string;
  image: Image;
  matchDate: any;
  hasMatch: boolean;
};

export type Image = {
  sourceUrl: string;
  altText: string;
  caption: any;
  description: any;
};

export type CustomFields = {
  customTitle: any;
  customSubtitle: any;
  customCategory: any;
};

export type Category = {
  parentId: string;
  slug: string;
  name: string;
  isPrimary: boolean;
  color: any;
  background: any;
};

export type PageInfo = {
  endCursor: string;
  hasNextPage: boolean;
  offsetPagination: OffsetPagination;
};

export type OffsetPagination = {
  hasMore: boolean;
};
