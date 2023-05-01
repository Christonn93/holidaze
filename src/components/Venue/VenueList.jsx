// Importing React
import React from "react";
import { useSearchParams } from "react-router-dom";

// Importing MUI
import { Box } from "@mui/material";

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
 let endpoint = venues + `?_owner=true&_bookings=true&limit=${limit}`;

 // eslint-disable-next-line
 const [key, value] = searchParams.entries();
 if (key) endpoint = venues + `?_owner=true&_bookings=true&limit=${limit}&sort=${key[0]}&sortOrder=${key[1]}`;
 if (key === "search") endpoint = venues + `?_owner=true&_bookings=true&limit=${limit}`;

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

 //  console.log("endpoint", endpoint);
 // console.log("Data", data);
 // console.log("Params", params);

 return (
  <>
   {data.map((venue) => {
    // console.log("Full venue list", venue);
    return (
     <Box
      key={venue.id}
      sx={{
       marginTop: 2,
      }}
     >
      <VenueCard data={venue} />
     </Box>
    );
   })}
  </>
 );
};

export default VenueList;
