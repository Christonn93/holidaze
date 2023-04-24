import axios from "axios";

const token = localStorage.getItem("ApiToken");

export default axios.create({
 baseURL: "https://api.noroff.dev/api/v1/holidaze",
 timeout: 1000,
 headers: {
  "Content-Type": "application/json",
  Authorization: `Bearer ${token}`,
 },
});

// const [data, isError, isLoading] = useAxios({
//  axiosInstance: axios,
//  method: "GET",
//  endPoint: "/venues?_owner=true&_bookings=true",
//  requestConfig: {
//   timeout: 1000,
//   headers: {
//    "Content-Type": "application/json",
//   },
//  },
// });
