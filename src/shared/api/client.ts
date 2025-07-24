import axios from "axios";

const API_AUTH_URL = process.env.NEXT_PUBLIC_API_AUTH_URL;

export const tesseractApi = axios.create({
  baseURL: API_AUTH_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
