import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface HttpClient extends AxiosInstance {
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}

const instance: HttpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

instance.interceptors.response.use((res) => res.data);
// 세션 스토리지로 로그인 유지
instance.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const accessToken = window.sessionStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `bearer ${accessToken}`;
    }
  }
  return config;
});

export default instance;
