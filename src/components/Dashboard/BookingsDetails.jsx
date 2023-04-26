import React from "react";

import { Typography, Box, Stack } from "@mui/material";
import { changeTimeFormat } from "../../js/changeTimeFormat";
import ListingCards from "../Cards/ListingCards";

const BookingsDetails = ({ data }) => {
 console.log("BookingsDetails", data);

 if (!data) {
  console.error(data);
  return <h1>There was no data found</h1>;
 }

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
