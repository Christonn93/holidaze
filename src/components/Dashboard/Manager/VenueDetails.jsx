import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, Chip, Stack, Typography } from "@mui/material";

import ListingCards from "../../Cards/ListingCards";

import SettingsIcon from "@mui/icons-material/Settings";

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
   navigate(`/venue/edit/${id}`);
  }
 };

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
   {data.length >= 0 ? (
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
         key={e.id}
         id={e.id}
         location={"venue"}
         name={e.name}
         infoChildren={<Chip label={!status ? "Free" : "rented out"} color={!status ? "success" : "error"} variant="outlined" />}
         buttonChildren={<SettingsIcon />}
         buttonAction={() => handleNavigate("edit", e.id)}
         ToolTipTitle={"Edit venue"}
        />
       </>
      );
     })}
    </Stack>
   ) : (
    <Typography variant="body1">You have no venue listed</Typography>
   )}
  </>
 );
};

export default VenueDetails;
