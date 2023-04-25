// Importing React
import React from "react";

// Importing MUI
import { Box } from "@mui/material";

// Importing hooks and functions
import useApi from "../../hooks/useApi";
import { venues } from "../../api/constants";
import { updateHead } from "../../js/updateHeader";

// Importing components
import VenueCard from "../../components/Cards/VenueCards/VenueCard";
import ListingFilter from "../../components/Filter/ListingFilter";
import UiFeedback from "../../components/UiFeedback/UiFeedback";
import Loading from "../../components/Loading/Loading";

const Home = () => {
 updateHead("Home");

 const endpoint = venues + `?_owner=true&_bookings=true`;
 const method = "GET";

 const { data, isLoading, isError } = useApi(endpoint, method);

 if (isLoading) return <Loading />;

 if (isError) {
  console.error(isError);
  return <UiFeedback severity="error" title={"An unexpected error have accrued"} message={"Please refresh the page"} />;
 }

 return (
  <>
   <h1>Home</h1>
   <ListingFilter />
   {data.map((venue) => {
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

export default Home;
