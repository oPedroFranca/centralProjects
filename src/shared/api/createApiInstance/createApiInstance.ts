import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";

export const createApiInstance = (config: AxiosRequestConfig): AxiosInstance => {
  const instance = axios.create(config);

  instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const publicRoutes = ['/User/Login', '/User/Register'];
    const isPublicRoute = publicRoutes.some(route => config.url?.includes(route));

    if (!isPublicRoute) {
      const token = localStorage.getItem("TESSEACT_TOKEN");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  });

  return instance;
}
