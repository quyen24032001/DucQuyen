import { AxiosRequestConfig } from 'axios';
import instance from './axios';

export default class BaseService {
  constructor() {}

  async get({ url, config }: { url: string; config?: AxiosRequestConfig }) {
    const res = await instance.get(url, config);
    return res;
  }

  async post({
    url,
    data,
    config,
  }: {
    url: string;
    data: any;
    config?: AxiosRequestConfig;
  }) {
    const res = await instance.post(url, data, config);
    return res;
  }

  async put({
    url,
    data,
    config,
  }: {
    url: string;
    data: any;
    config?: AxiosRequestConfig;
  }) {
    const res = await instance.put(url, data, config);
    return res;
  }

  async delete({ url, config }: { url: string; config?: AxiosRequestConfig }) {
    const res = await instance.delete(url, config);
    return res;
  }
}
