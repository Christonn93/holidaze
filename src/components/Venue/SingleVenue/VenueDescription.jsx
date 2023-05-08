// Import React
import React from "react";

// Import MUI
import { Box, Typography } from "@mui/material";

/**
 *
 * @param {venueDescription } venueDescription
 * @returns Description
 */
const VenueDescription = ({ venueDescription }) => {
 const description = venueDescription.split(/[.!?]/);

 return (
  <Box
   sx={{
    display: "flex",
    flexDirection: "column",
    gap: 2,
    maxWidth: 650,
   }}
  >
   <Box>
    <Typography variant="h4" marginBottom={1}>
     Description
    </Typography>
    <Box>
     {description.map((e) => {
      return (
       <Typography variant="body1" marginBottom={2}>
        {e}
       </Typography>
      );
     })}
    </Box>
   </Box>
  </Box>
 );
};

export default VenueDescription;
