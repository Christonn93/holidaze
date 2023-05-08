// Importing React
import React from "react";

// Importing MUI
import { Typography } from "@mui/material";

// Importing Components
import BookingAccordion from "../Accordion/BookingAccordion";

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
    <>
     <BookingAccordion data={data} />
    </>
   ) : (
    <Typography variant="body1">You have no bookings</Typography>
   )}
  </>
 );
};

export default BookingsDetails;
