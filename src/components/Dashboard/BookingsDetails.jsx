import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Typography, Box, Stack, MenuItem } from "@mui/material";
import { changeTimeFormat } from "../../js/changeTimeFormat";
import ListingCards from "../Cards/ListingCards";

import SettingsIcon from "@mui/icons-material/Settings";
import BookingDetailsMenu from "../Menu/BookingDetailsMenu";

const BookingsDetails = ({ data }) => {
 // eslint-disable-next-line
 const [open, setOpen] = useState(false);
 const navigate = useNavigate();

 if (!data) {
  console.error(data);
  return <h1>There was no data found</h1>;
 }

 const handleNavigate = (path, id) => {
  if (path === "create") {
   navigate(`/booking/create`);
   setOpen(false);
  }
  if (path === "edit") {
   navigate(`/booking/edit/${id}`);
   setOpen(false);
  }
 };

 const menuContent = (
  <>
   <MenuItem disabled onClick={handleNavigate}>
    Edit
   </MenuItem>
   <MenuItem disabled onClick={handleNavigate}>
    Delete
   </MenuItem>
  </>
 );

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
       <ListingCards key={e.id} name={e.venue.name} infoChildren={info} buttonChildren={<BookingDetailsMenu icon={<SettingsIcon />} ToolTipTitle={"edit booking"} menuContent={menuContent} />} />
      </>
     );
    })}
   </Stack>
  </>
 );
};

export default BookingsDetails;
