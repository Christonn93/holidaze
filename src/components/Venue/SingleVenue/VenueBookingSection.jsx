import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { baseUrl, bookings } from "../../../api/constants";
import { headers } from "../../../api/auth/headers";
import BookingCalender from "../../Calender/BookingCalender";
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

const VenueBookingSection = ({ data, id }) => {
 const handleSubmit = (e) => {
  e.preventDefault();

  // Fetch variable data
  const endpoint = bookings;
  const method = "POST";

  // Form data
  const form = e.target;
  const formData = new FormData(form);
  const guests = parseInt(formData.get("guests"));
  const dateFrom = formData.get("dateFrom");
  const dateTo = formData.get("dateTo");
  const venueId = id;

  fetch(baseUrl + endpoint, {
   headers: headers("application/json"),
   method: method,
   body: JSON.stringify({ dateFrom, dateTo, venueId, guests }),
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

 if (!data) return;

 return (
  <>
   <form onSubmit={handleSubmit}>
    <Box sx={boxSx}>
     <Box>
      <BookingCalender data={data} />
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
