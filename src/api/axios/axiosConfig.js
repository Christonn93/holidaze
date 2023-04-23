import axios from "axios";

const token = localStorage.getItem("ApiToken");

export default axios.create({
 baseURL: process.env.API_BASEURL,
 timeout: 1000,
 headers: {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
 },
});
