import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    externalResolver: true,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req;
  const interval = Number(query.time);

  setTimeout(() => {
    res.send({ interval });
  }, interval);
}
