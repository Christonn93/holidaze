// eslint-disable-next-line
import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Button, IconButton, Stack, Typography, Paper } from "@mui/material";

import BuildIcon from "@mui/icons-material/Build";

// Importing functions
import ManageVenueChip from "../../Chip/ManageVenueChip";
import ViewBookings from "../../Dialog/ViewBookings";

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

  if (path === "view") {
   navigate(`/venue/${id}`);
  }
 };

 return (
  <>
   <Box>
    <Box
     sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 2,
     }}
    >
     <Typography variant="h2">Venues you manage</Typography>
     <Button variant="contained" color="primary" onClick={() => handleNavigate("create")}>
      Add new venue
     </Button>
    </Box>
    {!data.length >= 0 ? (
     <>
      <Stack spacing={2}>
       {data.map((venue) => {
        return (
         <Paper
          key={venue.id}
          sx={{
           display: "flex",
           flexDirection: "column",
           gap: 1,
           padding: 1,
          }}
         >
          <Box
           sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
           }}
          >
           <ManageVenueChip venue={venue} />
           <ViewBookings venue={venue.bookings} />
          </Box>
          <Box
           sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
           }}
          >
           <Typography
            variant="subtitle1"
            onClick={() => handleNavigate("view", venue.id)}
            sx={[
             {
              "&:hover": {
               textDecoration: "underline",
               cursor: "pointer",
               color: "secondary",
              },
             },
            ]}
           >
            {venue.name}
           </Typography>
           <IconButton aria-label="edit venue" size="medium" onClick={() => handleNavigate("edit", venue.id)}>
            <BuildIcon fontSize="inherit" />
           </IconButton>
          </Box>
         </Paper>
        );
       })}
      </Stack>
     </>
    ) : (
     <>
      <Typography variant="h4">You have no venues listed</Typography>
     </>
    )}
   </Box>
  </>
 );
};

export default VenueDetails;
