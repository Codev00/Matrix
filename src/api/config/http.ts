import axios, { AxiosInstance } from "axios";

class Http {
   instance: AxiosInstance;
   constructor() {
      this.instance = axios.create({
         baseURL: "https://api.themoviedb.org/3/",
         timeout: 5000,
      });
   }
}

const http = new Http().instance;
export default http;
