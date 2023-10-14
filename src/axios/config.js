import axios from "axios";

const sbk4Fetch = axios.create({
  baseURL: "https://sbk4.api.japa.boo",
  headers: {
    "Content-Type": "application/json",
  },
});

sbk4Fetch.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('token'))

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default sbk4Fetch;
