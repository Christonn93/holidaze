// Importing React
import React from "react";
import { useSearchParams } from "react-router-dom";

// Importing MUI
import { Box, Typography } from "@mui/material";

// Importing hooks and functions
import useApi from "../../hooks/useApi";
import { venues } from "../../api/constants";

// Importing Components
import VenueCard from "../Cards/VenueCards/VenueCard";
import UiFeedback from "../../components/UiFeedback/UiFeedback";
import Loading from "../../components/Loading/Loading";

const VenueList = () => {
 let [searchParams] = useSearchParams();
 let limit = 50;
 let search = "";
 let endpoint = venues + `?_owner=true&_bookings=true&limit=${limit}`;

 // eslint-disable-next-line
 let [key, value] = searchParams.entries();

 //
 if (key === undefined) key = "";
 if (key) endpoint = venues + `?_owner=true&_bookings=true&limit=${limit}&sort=${key[0]}&sortOrder=${key[1]}`;
 if (key[0] === "search") {
  endpoint = venues + `?_owner=true&_bookings=true&limit=${limit}/search=${key[1]}`;
  search = key[1];
 }

 const method = "GET";

 const { data, isLoading, isError } = useApi(endpoint, method);

 if (isLoading) return <Loading />;

 if (isError) {
  console.error(isError);
  return <UiFeedback severity="error" title={"An unexpected error have accrued"} message={"Please refresh the page"} />;
 }

 if (!data.map) {
  console.log(data);
  return <UiFeedback severity="error" title={"An unexpected error have accrued"} message={"Please refresh the page"} />;
 }

 console.log("Data", data);
 //  console.log("endpoint", endpoint);
 // console.log("Params", params);

 const EmptyResults = (
  <>
   <Box>
    <Typography variant="body1">There is no match to your search</Typography>
   </Box>
  </>
 );

 return (
  <>
   {data
    .filter((venue) => {
     return (
      venue.name.toLowerCase().includes(search.toLowerCase()) ||
      venue.location.country.toLowerCase().includes(search.toLowerCase()) ||
      venue.location.continent.toLowerCase().includes(search.toLowerCase()) ||
      venue.location.city.toLowerCase().includes(search.toLowerCase())
     );
    })
    .map((venue) => {
     // console.log("Full venue list", venue);
     return (
      <Box
       key={venue.id}
       sx={{
        marginTop: 2,
       }}
      >
       {!venue ? <EmptyResults /> : <VenueCard data={venue} />}
      </Box>
     );
    })}
  </>
 );
};

export default VenueList;

// search.toLowerCase() === venue.name.toLowerCase()
// ? venue
// : venue.name.toLowerCase().includes(search)

// return search.toLowerCase() === venue.name.toLowerCase() ? venue : venue.name.toLowerCase().includes(search);
