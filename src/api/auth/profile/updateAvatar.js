import { profiles } from "../../constants";
import { headers } from "../headers";

export async function updateAvatar(credentials) {
 const Url = "https://api.noroff.dev/api/v1/holidaze";

 const storedData = localStorage.getItem("UserData");
 const data = JSON.parse(storedData);

 const id = data.id;

 const endPoint = profiles + `/${id}/media`;

 return fetch(Url + endPoint, {
  method: "PUT",
  headers: headers("application/json"),
  body: JSON.stringify(credentials),
 }).then((data) => data.json());
}
