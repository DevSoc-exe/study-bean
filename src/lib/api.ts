import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL,
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if(error.response && error.response.status === 401) {
      if (error.response && error.response.status === 401) {
        window.location.replace("/auth");
        return
      }

      return error
    }
  }
)