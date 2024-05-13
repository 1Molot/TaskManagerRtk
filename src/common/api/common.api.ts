import axios from "axios";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  //withCredentials: true,
  headers: {
    'API-KEY': 'de0c020c-dd6c-405b-bbe4-e54523e78d81',
    "Authorization": "Bearer 786566ee-a0d5-4dd1-b899-5bc981895f5a"
  },
});
