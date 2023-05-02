import React from "react";

import { Box, CardMedia, Typography, useTheme, useMediaQuery, ImageListItem, ImageListItemBar } from "@mui/material";
import ReplaceUserImage from "../Dialog/ReplaceUserImage";

const ProfileDetails = ({ name, avatar, venueManager }) => {
 const device = useTheme();
 const isMobile = useMediaQuery(device.breakpoints.down("md"));

 if (!name) {
  console.error(name);
  return <h1>There was no data found</h1>;
 }

 // Capitalize title
 const fixedName = name.charAt(0).toUpperCase() + name.slice(1);

 const layoutDesktop = {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  gap: 3,
 };

 const layoutMobile = {
  display: "grid",
  gridTemplateRows: "auto 1fr",
  gap: 3,
 };

 return (
  <>
   <Box sx={!isMobile ? layoutDesktop : layoutMobile}>
    <Box width={!isMobile ? 350 : 150}>
     <ImageListItem key={avatar}>
      <CardMedia component="img" image={avatar} alt="alternative text for image" />
      <ImageListItemBar
       sx={{
        background: "transparent",
       }}
       position="top"
       actionIcon={<ReplaceUserImage name={name} />}
       actionPosition="left"
      />
     </ImageListItem>
    </Box>
    <div>
     <Typography variant="h3">Name: {fixedName}</Typography>
     <Typography variant="body1">Access level: {venueManager ? "Manager" : "Customer"}</Typography>
    </div>
   </Box>
  </>
 );
};

export default ProfileDetails;
