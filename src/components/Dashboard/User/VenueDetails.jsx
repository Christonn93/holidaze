import { Box, Button, Chip, Stack } from "@mui/material";
import React from "react";
import ListingCards from "../Listings/ListingCards";

const VenueDetails = ({ data }) => {
 console.log("VenueDetails", data);

 if (!data) {
  console.error(data);
  return <h1>There was no data found</h1>;
 }

 const handleNewVenue = () => {
  alert("button worked");
 };

 return (
  <>
   <Box
    sx={{
     display: "flex",
     justifyContent: "space-between",
     alignItems: "center",
    }}
   >
    <h2>Venues you manage</h2>
    <Button variant="contained" color="info" onClick={handleNewVenue}>
     Add new venue
    </Button>
   </Box>
   <Stack
    spacing={2}
    sx={{
     marginTop: 2,
    }}
   >
    {data.map((e) => {
     const status = false;

     return (
      <>
       <ListingCards name={e.name} infoChildren={<Chip label={!status ? "Free" : "rented out"} color={!status ? "success" : "error"} variant="outlined" />} buttonChildren={"Manage venue"} />
      </>
     );
    })}
   </Stack>
  </>
 );
};

export default VenueDetails;
