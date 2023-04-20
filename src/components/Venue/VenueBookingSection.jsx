import { Button, TextField } from "@mui/material";
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
  const venueId = id;
  const data = new FormData(form);

  data.append("venueId", venueId);

  const endpoint = bookings;
  const method = "POST";
  const body = data;

  fetch(baseUrl + endpoint, {
   method: method,
   body: body,
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

 return (
  <>
   <form onSubmit={handleSubmit}>
    <TextField label="From" type="date" name="dateFrom" id="dateFrom" required />
    <TextField label="To" type="date" name="dateTo" id="dateTo" required />
    <TextField label="Guests" type="number" name="guests" id="guests" required />

    <Button variant="contained" type="submit">
     Submit
    </Button>
   </form>
  </>
 );
};

export default VenueBookingSection;
