export type Terms = {
  data: Data;
  status: number;
  message: string;
  cached: boolean;
};

export type Data = {
  items: Group[];
};

export type Group = {
  letter: string;
  items: Term[];
};

export type Term = {
  name: string;
  description: string;
};
