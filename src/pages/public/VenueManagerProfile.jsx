import React from "react";

// Importing functions
import useApi from "../../hooks/useApi";
import { profiles } from "../../api/constants";
import { updateHead } from "../../js/updateHeader";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import VenueCard from "../../components/Cards/VenueCards/VenueCard";

const VenueManagerProfile = () => {
 const { name } = useParams();
 updateHead("Profile");

 const endpoint = profiles + `/${name}?_venues=true&_bookings=true`;
 const method = "GET";

 const { data, isLoading, isError } = useApi(endpoint, method);

 if (!data.venues) {
  return;
 }

 if (isLoading) return <h1>Loading....</h1>;

 if (isError) console.log(isError);

 if (!data.name) {
  console.error(name);
  return <h1>There was no data found</h1>;
 }

 // Capitalize title
 const fixedName = name.charAt(0).toUpperCase() + name.slice(1);

 return (
  <>
   <Typography variant="h1">Venue manager profile</Typography>
   <Box marginTop={2} marginBottom={2}>
    <Typography variant="body1">Hi, my name is {fixedName}. I'm a venue manager and have some good quality venues for you to visit.</Typography>
    <Typography variant="body1">
     If you want more information about my venues, feel free to contact me on{" "}
     <a href={`mailto:${data.email}`} target="_blank"  rel="noreferrer">
      email
     </a>
    </Typography>
   </Box>
   <Box marginTop={2} marginBottom={2}>
    <Typography variant="h2">My venues</Typography>
    {data.venues.map((venue) => {
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
   </Box>
  </>
 );
};

export default VenueManagerProfile;
