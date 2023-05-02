// Importing React
import React from "react";

// Importing MUI
import { Box, Typography } from "@mui/material";

const HeroCreateNewListing = () => {
 return (
  <>
   <Box
    sx={{
     display: "flex",
     flexDirection: "column",
     gap: 2,

     marginBottom: 2,
    }}
   >
    <Typography variant="h1" gutterBottom>
     Create a New Listing
    </Typography>
    <Typography variant="body1" gutterBottom>
     Welcome to our venue rental platform! You are just a few steps away from listing your venue and sharing it with travelers from all around the world.
    </Typography>
    <Typography variant="body1" gutterBottom>
     To get started, please fill out the form below with your venue's name, location, and a detailed description of the space. Make sure to include any amenities you offer, such as Wi-Fi access, pet
     policies, and parking options. You can also add photos of your venue to showcase its unique features and style.
    </Typography>
    <Typography variant="body1" gutterBottom>
     Once you have completed the form, hit the "submit" button to publish your listing. Our platform is designed to make it easy for travelers to find and book the perfect rental for their needs. So
     why wait? List your venue today and start earning money by sharing your space with others!
    </Typography>
   </Box>
  </>
 );
};

export default HeroCreateNewListing;
