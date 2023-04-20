import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { baseUrl, bookings } from "../../api/constants";

/*
NOTE: 

API request body: 

{
  "dateFrom": "string", // Required - Instance of new Date()
  "dateTo": "string", // Required - Instance of new Date()
  "guests": 0, // Required
  "venueId": "string" // Required - The id of the venue to book
}

*/

const VenueBookingSection = ({ id }) => {
 const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;

  const dateFrom = new Date(form.dateFrom.value);
  const dateTo = new Date(form.dateTo.value);
  const guests = form.guests.value;
  const venueId = id;

  const endpoint = bookings;
  const method = "POST";
  const body = {
   dateFrom: dateFrom,
   dateTo: dateTo,
   guests: guests,
   venueId: venueId,
  };

  console.log(body);

  fetch(baseUrl + endpoint, {
   method: method,
   body: {
    dateFrom: dateFrom,
    dateTo: dateTo,
    guests: guests,
    venueId: venueId,
   },
  })
   .then((response) => {
    if (!response.ok) {
     throw new Error("Failed to submit form");
    }
    return response.json();
   })
   .then((data) => {
    // Handle successful response from API
    console.log(data);
   })
   .catch((error) => {
    // Handle error
    console.error(error);
   });
 };

 const boxSx = {
  display: "flex",
  gap: 2,
  flexDirection: "column",
 };

 return (
  <>
   <form onSubmit={handleSubmit}>
    <Box sx={boxSx}>
     <Box sx={boxSx}>
      <Typography variant="caption">From</Typography>
      <TextField type="date" name="dateFrom" id="dateFrom" required />
     </Box>
     <Box sx={boxSx}>
      <Typography variant="caption">To</Typography>
      <TextField type="date" name="dateTo" id="dateTo" required />
     </Box>
     <Box sx={boxSx}>
      <Typography variant="caption">Guests</Typography>
      <TextField type="number" name="guests" id="guests" required />
     </Box>

     <Button variant="contained" type="submit">
      Submit
     </Button>
    </Box>
   </form>
  </>
 );
};

export default VenueBookingSection;
