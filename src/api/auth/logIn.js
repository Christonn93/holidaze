import { authLogin } from "../constants";
import env from "react-dotenv";

const Url = env.API_BASEURL;
const endPoint = authLogin;

export async function loginUser(credentials) {
 console.log(credentials);

 return fetch(Url + endPoint, {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
  },
  body: JSON.stringify(credentials),
 }).then((data) => data.json());
}
