import { Chip, Stack } from "@mui/material";
import React from "react";
import ListingCards from "../Listings/ListingCards";

const VenueDetails = ({ data }) => {
 console.log("VenueDetails", data);

 return (
  <>
   <h2>Venues you manage</h2>
   <Stack spacing={2}>
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
