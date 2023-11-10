/* eslint-disable import/prefer-default-export */
// import { getErrorMsg } from '@utils/serverError';
import axios, { InternalAxiosRequestConfig } from 'axios';
import { getCookie } from 'typescript-cookie';

export const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
});

instance.interceptors.request.use((config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const accessToken = getCookie('accessToken');
  console.log(process.env.REACT_APP_API_URL);
  console.log(process.env.REACT_APP_KAKAO_REDIRECT_URL);
  console.log("뭐가 문제지?");
  if (accessToken) {
    const newConfig = config;
    newConfig.headers.Authorization = getCookie('accessToken');

    return newConfig;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.data.error.message === '링크 실패') {
      return Promise.resolve(error.response);
    }
    return Promise.reject(error);
  },
);
