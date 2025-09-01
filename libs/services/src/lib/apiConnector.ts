import { axiosInstance } from './axiosInstance';
import type { AxiosRequestHeaders, Method } from 'axios';

export const apiConnector = (
  method: Method,
  url: string,
  bodyData?: object | null,
  headers?: AxiosRequestHeaders,
  params?: string | object,
) => {
  return axiosInstance({
    method,
    url,
    data: bodyData ?? null,
    headers: sessionStorage.getItem('token')
      ? {
          ...headers,
          Authorization: `Bearer ${localStorage.getItem('GNC_Token') || sessionStorage.getItem('token')}`,
        }
      : headers ?? undefined,
    params: params ?? undefined,
  });
}; 