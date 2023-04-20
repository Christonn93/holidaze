import React from "react";

import { Box, CardMedia, Typography } from "@mui/material";

const ProfileDetails = ({ data }) => {
 const { name, avatar, venueManager } = data;

 // Capitalize title
 const fixedName = name.charAt(0).toUpperCase() + name.slice(1);

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
     <Typography variant="h3">Name: {fixedName}</Typography>
     <Typography variant="body1">Access level: {venueManager ? "Manager" : "Customer"}</Typography>
    </div>
   </Box>
  </>
 );
};

export default ProfileDetails;
