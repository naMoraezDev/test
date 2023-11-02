export type Giftbox = {
  hash: string;
  status: number;
  message: string;
  cached: boolean;
  hasCampaign: boolean;
  categorySlugPage: string[];
  dataCampaign: DataCampaign[];
};

export type DataCampaign = {
  icon: Icon;
  date: Date;
  id: string;
  name: string;
  mediaData: MediaData;
  slugCampaign: string;
  linkCampaign: string;
  description: string | null;
  categorySlugCampaign: string[];
};

export type Icon = {
  url: string;
  alt: string;
};

export type Date = {
  end: string;
  start: string;
};

export type MediaData = {
  url: string;
  alt: string;
  type: string;
};
