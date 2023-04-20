import React from "react";
import VenueCard from "../../components/Cards/VenueCards/VenueCard";

import useApi from "../../hooks/useApi";
import { venues } from "../../api/constants";
import { Box } from "@mui/material";

const Home = () => {
 const endpoint = venues + `?_owner=true&_bookings=true`;
 const method = "GET";

 const { data, isLoading, isError } = useApi(endpoint, method);

 if (isLoading) return <h1>Loading...</h1>;

 if (isError) console.error(isError);

 return (
  <>
   <h1>Home</h1>
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
