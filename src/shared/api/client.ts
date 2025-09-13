import { createApiInstance } from './createApiInstance/createApiInstance';

const API_AUTH_URL = process.env.NEXT_PUBLIC_API_AUTH_URL;

export const tesseractApi = createApiInstance({
  baseURL: API_AUTH_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
