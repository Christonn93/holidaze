// Importing React
import React from "react";

// Importing MUI
import { Typography, Box, Stack } from "@mui/material";

// Importing Components
import ListingCards from "../Cards/ListingCards";

// Importing functions
import { changeTimeFormat } from "../../js/changeTimeFormat";

/**
 *
 * @param {data} data
 * @returns
 */
const BookingsDetails = ({ data }) => {
 if (!data) {
  console.error(data);
  return <h1>There was no data found</h1>;
 }

 console.clear();

 console.log(data);

 return (
  <>
   <h2>Here will your bookings be displayed</h2>
   {data.length >= 0 ? (
    <Stack spacing={2}>
     {data.map((e) => {
      const starts = changeTimeFormat(e.dateFrom);
      const ends = changeTimeFormat(e.dateTo);

      const info = (
       <Box key={e.id}>
        <Typography>Check in: {starts}</Typography>
        <Typography>Check out: {ends}</Typography>
       </Box>
      );

      return (
       <>
        <ListingCards key={e.id} id={e.venue.id} name={e.venue.name} infoChildren={info} />
       </>
      );
     })}
    </Stack>
   ) : (
    <Typography variant="body1">You have no bookings</Typography>
   )}
  </>
 );
};

export default BookingsDetails;
