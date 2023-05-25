import { profiles } from "../../constants";
import { headers } from "../headers";
import env from "react-dotenv";

export async function getProfile(credentials) {
 const Url = env.API_BASEURL;

 const storedData = localStorage.getItem("UserData");
 const data = JSON.parse(storedData);

 const name = data.name;

 const endPoint = profiles + `/${name}?_bookings=true&_venues=true`;

 return fetch(Url + endPoint, {
  method: "GET",
  headers: headers("application/json"),
  body: JSON.stringify(credentials),
 }).then((data) => data.json());
}
