import React from "react";

import { Box, CardMedia, Typography } from "@mui/material";

const ProfileDetails = ({ data }) => {
 const { name, avatar, venueManager } = data;

 return (
  <>
   <Box
    sx={{
     display: "grid",
     gridTemplateColumns: "auto 1fr",
     gap: 3,
    }}
   >
    <CardMedia component="img" image={avatar} alt="alternative text for image" height={300} />
    <div>
     <Typography variant="h3">Name: {name}</Typography>
     <Typography variant="body1">Access level: {venueManager ? "Manager" : "Customer"}</Typography>
    </div>
   </Box>
  </>
 );
};

export default ProfileDetails;