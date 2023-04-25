import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Chip, Stack } from "@mui/material";

import ListingCards from "../../Cards/ListingCards";

const VenueDetails = ({ data }) => {
 const navigate = useNavigate();

 if (!data) {
  console.error(data);
  return <h1>There was no data found</h1>;
 }

 const handleNavigate = (path, id) => {
  if (path === "create") {
   navigate(`/venue/create`);
  }
  if (path === "edit") {
   navigate(`/venue/${id}/edit`);
  }
 };

 console.log("VenueDetails", data);

 return (
  <>
   <Box
    sx={{
     display: "flex",
     justifyContent: "space-between",
     alignItems: "center",
    }}
   >
    <h2>Venues you manage</h2>
    <Button variant="contained" color="info" onClick={() => handleNavigate("create")}>
     Add new venue
    </Button>
   </Box>
   <Stack
    spacing={2}
    sx={{
     marginTop: 2,
    }}
   >
    {data.map((e) => {
     const status = false;

     return (
      <>
       <ListingCards
        name={e.name}
        infoChildren={<Chip label={!status ? "Free" : "rented out"} color={!status ? "success" : "error"} variant="outlined" />}
        buttonChildren={"Manage venue"}
        buttonAction={() => handleNavigate("edit", e.id)}
       />
      </>
     );
    })}
   </Stack>
  </>
 );
};

export default VenueDetails;
