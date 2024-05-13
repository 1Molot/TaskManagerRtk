import axios from "axios";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
  headers: {
    // "API-KEY": "5a156657-6985-42ea-9262-b6e3873afb30"
    "API-KEY": "e7931c25-37d3-4feb-a7b5-21f44ccacb05"
  },
});
