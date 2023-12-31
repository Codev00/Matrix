import axios from "axios";
import queryString from "query-string";

const baseURL = "http:127.0.0.1:8080/api/v1";

const privateClient = axios.create({
   baseURL,
   paramsSerializer: {
      encode: (params) => queryString.stringify(params),
   },
});

privateClient.interceptors.request.use(async (config: any) => {
   return {
      ...config,
      headers: {
         "Content-Type": "application/json",
         Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
   };
});

privateClient.interceptors.response.use(
   (response) => {
      if (response && response.data) {
         return response.data;
      }
      return response;
   },
   (error) => {
      throw error.response.data;
   }
);

export default privateClient;
