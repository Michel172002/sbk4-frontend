import axios from "axios";

const sbk4Fetch = axios.create({
  baseURL: "https://sbk4.api.japa.boo",
  headers: {
    "Content-Type": "application/json",
  },
});

sbk4Fetch.interceptors.request.use((config) => {
  //const token = localStorage.getItem('token')

  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlzcyI6IkFQSSBTQks0IiwiZXhwIjoxNjk3MDU0MjM2fQ.ctYZa6Eka3lB6kBxHN3KZlNbd_8Og0tCpyswmObSu_U";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default sbk4Fetch;
