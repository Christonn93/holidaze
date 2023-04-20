import { Box, CardMedia } from "@mui/material";
import React from "react";

const VenueMainMedia = ({ media }) => {
 return (
  <Box maxWidth={800}>
   <CardMedia component="img" image={media[0]} alt="alternative text for image" loading="lazy" />
  </Box>
 );
};

export default VenueMainMedia;
