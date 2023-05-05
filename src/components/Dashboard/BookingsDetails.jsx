import React from "react";
import { useNavigate } from "react-router-dom";

import { Typography, Box, Stack } from "@mui/material";
import { changeTimeFormat } from "../../js/changeTimeFormat";
import ListingCards from "../Cards/ListingCards";

import SettingsIcon from "@mui/icons-material/Settings";

const BookingsDetails = ({ data }) => {
 const navigate = useNavigate();
 //  console.log("BookingsDetails", data);

 if (!data) {
  console.error(data);
  return <h1>There was no data found</h1>;
 }

 const handleNavigate = (path, id) => {
  if (path === "create") {
   navigate(`/booking/create`);
  }
  if (path === "edit") {
   navigate(`/booking/edit/${id}`);
  }
 };

 return (
  <>
   <h2>Here will your bookings be displayed</h2>
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
       <ListingCards key={e.id} name={e.venue.name} infoChildren={info} buttonChildren={<SettingsIcon />} buttonAction={() => handleNavigate("edit", e.id)} ToolTipTitle={"Edit Booking"} />
      </>
     );
    })}
   </Stack>
  </>
 );
};

export default BookingsDetails;
