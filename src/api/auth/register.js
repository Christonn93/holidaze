import { authReg } from "../constants";

const Url = "https://api.noroff.dev/api/v1/holidaze";
const endPoint = authReg;

export async function registerUser(input) {
 console.log(input);

 return fetch(Url + endPoint, {
  method: "POST",
  headers: {
   "Content-Type": "application/json",
  },
  body: JSON.stringify(input),
 }).then((data) => data.json());
}
