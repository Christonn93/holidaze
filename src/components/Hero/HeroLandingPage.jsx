import React from "react";

import { Box, Paper, Typography } from "@mui/material";

const HeroLandingPage = () => {
 return (
  <Box>
   <Paper
    sx={{
     padding: 2,
    }}
   >
    <Typography variant="h1" gutterBottom>
     Discover Your Perfect Getaway with Holidaze
    </Typography>
    <Typography variant="subtitle1" gutterBottom>
     Your One-Stop Destination for Dream Holidays
    </Typography>
    <Typography variant="body1" gutterBottom>
     Looking for a relaxing beachside vacation or an adventure-filled trip to the mountains? Holidaze has got you covered! Our platform offers a wide variety of unique and comfortable venues, perfect
     for any type of holiday you're looking for.
    </Typography>
   </Paper>
  </Box>
 );
};

export default HeroLandingPage;
