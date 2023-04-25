// Importing React
import React from "react";

// Importing MUI
import { Box } from "@mui/material";

// Importing hooks and functions
import useApi from "../../hooks/useApi";
import { venues } from "../../api/constants";

// Importing Components
import VenueCard from "../Cards/VenueCards/VenueCard";
import UiFeedback from "../../components/UiFeedback/UiFeedback";
import Loading from "../../components/Loading/Loading";
import { decodeSearchParams } from "../Filter/searchParams";

const VenueList = ({ params }) => {
 let endpoint = venues + `?_owner=true&_bookings=true`;

 const method = "GET";

 const { data, isLoading, isError } = useApi(endpoint, method);

 if (isLoading) return <Loading />;

 if (isError) {
  console.error(isError);
  return <UiFeedback severity="error" title={"An unexpected error have accrued"} message={"Please refresh the page"} />;
 }

 const paramsArray = [];

 if (params) {
  paramsArray.push(JSON.parse(params));
  console.log("paramsArray", paramsArray);
 }

 return (
  <>
   {data
    .filter((venue) => {
     // console.log("Filtered Venue list params", params);
     return venue;
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
       <VenueCard data={venue} />
      </Box>
     );
    })}
  </>
 );
};

export default VenueList;
