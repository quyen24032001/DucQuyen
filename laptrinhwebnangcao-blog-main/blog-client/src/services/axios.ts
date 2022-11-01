import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

const config: AxiosRequestConfig = {
  baseURL: "http://localhost:8001/api",
};

const instance = axios.create();

function onRequest(config: AxiosRequestConfig) {
  return config;
}

function onRequestError(error: AxiosError) {
  console.log("error", error);
  return Promise.reject(error);
}

function onResponse(response: AxiosResponse) {
  return response;
}

function onResponseError(error: AxiosError) {
  console.log("error", error);
  return Promise.reject(error);
}

instance.interceptors.request.use(onRequest, onRequestError);
instance.interceptors.response.use(onResponse, onResponseError);

export default instance;