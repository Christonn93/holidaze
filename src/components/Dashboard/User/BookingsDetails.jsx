import React from "react";

import { Typography, Box, Stack } from "@mui/material";
import { changeTimeFormat } from "../../../js/changeTimeFormat";
import ListingCards from "../Listings/ListingCards";

const BookingsDetails = ({ data }) => {
 console.log("BookingsDetails", data);

 return (
  <>
   <h2>Here will your bookings be displayed</h2>
   <Stack spacing={2}>
    {data.map((e) => {
     const starts = changeTimeFormat(e.dateFrom);
     const ends = changeTimeFormat(e.dateTo);

     const info = (
      <Box>
       <Typography>Check in: {starts}</Typography>
       <Typography>Check out: {ends}</Typography>
      </Box>
     );

     return (
      <>
       <ListingCards name={e.venue.name} infoChildren={info} buttonChildren={"Manage booking"} />
      </>
     );
    })}
   </Stack>
  </>
 );
};

export default BookingsDetails;
