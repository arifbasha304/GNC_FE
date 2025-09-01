import axios, { AxiosInstance } from 'axios';

const DEFAULT_TIMEOUT_MS = 30000;

// Prefer Vite-style env var if available; fall back to runtime window var, else undefined
const baseURL = (import.meta as any)?.env?.VITE_API_BASE_URL
  ?? (typeof window !== 'undefined' ? (window as any).VITE_API_BASE_URL : undefined)
  ?? undefined;

export const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  timeout: DEFAULT_TIMEOUT_MS,
  withCredentials: false,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
); 