export type MostRead = {
  data: Data;
  status: number;
  message: string;
  cached: boolean;
};

export type Data = {
  itens: Iten[];
};

export type Iten = {
  viewCount: number;
  id: string;
  slug: string;
  title: string;
  uri: string;
  primaryCatName: string;
  extraFields: ExtraFields;
  customFields: CustomFields;
};

export type ExtraFields = {
  image: Image;
};

export type Image = {
  sourceUrl: string;
};

export type CustomFields = {
  customCategory?: string;
  customTitle?: string;
  customSubtitle?: string;
};
