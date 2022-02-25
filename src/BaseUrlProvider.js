import axios from "axios";
import { getCookie } from "./FrontendHelper";

// FOR ADMIN LOGIN
const Token = getCookie("token");
export const API = axios.create({
  // baseURL: "http://13.127.139.254:8080/payroller/v1/api",
  baseURL: "http://13.127.139.254:8080/restaurant/v1/api",

  // headers: {
  //   Authorization: `Bearer ${Token}`,
  // },
});

// Remember to change base url
// auth invitation employee
// http://13.127.139.254:8080/payroller => https://api.activaccount.com.au:8443/payroller
