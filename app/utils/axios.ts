// utils/axios.ts
import axios from "axios";

const api = axios.create({

  baseURL: 'https://69d1348190cd06523d5df597.mockapi.io/', 
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;