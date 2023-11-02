/* eslint-disable no-unused-vars */
import { GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import { setCookie, parseCookies } from 'nookies';
import axios, { AxiosError, AxiosResponse } from 'axios';

type FaildRequest = {
  onSuccess: (token: string) => void;
  onFailure: (err: AxiosError<unknown, any>) => void;
};

type FaildRequestsQueue = FaildRequest[];

const origin = process.env.PRIVATE_API_ORIGIN;
const baseUrl = process.env.PRIVATE_API_URL;
const apiKey = process.env.PRIVATE_API_KEY;

let isGettingToken = false;
let faildRequestsQueue: FaildRequestsQueue = [];

export default function apiServer(context?: GetServerSidePropsContext) {
  let cookies = parseCookies(context);

  const api = axios.create({
    baseURL: baseUrl,
    headers: {
      Origin: origin,
      'x-access-token': cookies.token,
    },
  });

  api.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError<NodeJS.ErrnoException>) => {
      if (error.response?.status === 401) {
        cookies = parseCookies(context);

        const originalConfig = error.config;

        if (!isGettingToken) {
          isGettingToken = true;

          api.defaults.headers['x-access-api-key'] = apiKey || '';

          api
            .post('/generateToken')
            .then(response => {
              const { token } = response.data;

              setCookie(context, 'token', token);

              api.defaults.headers.token = token;

              faildRequestsQueue.forEach(request => request.onSuccess(token));
              faildRequestsQueue = [];
            })
            .catch(err => {
              faildRequestsQueue.forEach(request => request.onFailure(err));
              faildRequestsQueue = [];
            })
            .finally(() => {
              isGettingToken = false;
            });
        }

        return new Promise((resolve, reject) => {
          faildRequestsQueue.push({
            onSuccess: (token: string) => {
              if (originalConfig) {
                originalConfig.headers['x-access-token'] = token;

                resolve(api(originalConfig));
              }
            },
            onFailure: (err: AxiosError) => {
              reject(err);
            },
          });
        });
      }

      return Promise.reject(error);
    },
  );

  return api;
}
