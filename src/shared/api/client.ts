import axios from "axios";

const API_AUTH_URL = process.env.REACT_APP_API_AUTH_URL;

const tesseractApi = axios.create({
  baseURL: API_AUTH_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default tesseractApi;
