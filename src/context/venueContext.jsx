// Importing React
import { createContext, useState } from "react";

import { headers } from "../api/auth/headers";

export const VenueContext = createContext({
 venueDetails: {},
 getVenueMedia: () => {},
 getVenueData: () => {},
});

export function VenueProvider({ children }) {
 const [venueDetails, setVenueDetails] = useState(() => {
  const storedData = localStorage.getItem("VenueDetails");
  return storedData ? JSON.parse(storedData) : [];
 });

 async function getVenueData(id) {
  const baseUrl = "https://api.noroff.dev/api/v1/holidaze";
  const fetchedData = await fetch(baseUrl + `/venues/${id}?_owner=true&_bookings=true`, {
   method: "GET",
   headers: headers("application/json"),
  });
  const json = await fetchedData.json();
  setVenueDetails(json);
 }

 function getVenueMedia(media) {
  const storedData = JSON.parse(localStorage.getItem("VenueDetails"));
  let venueMedia = [];
  venueMedia = [...storedData.media];
  venueMedia.push(media);

  if (storedData) localStorage.setItem("VenueMedia", JSON.stringify(venueMedia));
 }

 const value = {
  venueDetails: venueDetails,
  getVenueMedia,
  getVenueData,
 };

 return <VenueContext.Provider value={value}>{children}</VenueContext.Provider>;
}
