// Importing React
import React from "react";
import { useSearchParams } from "react-router-dom";

// Importing MUI
import { Box, Typography } from "@mui/material";

// Importing hooks and functions
import { updateHead } from "../../js/updateHeader";

// Importing components
import ListingFilter from "../../components/Filter/ListingFilter";
import VenueList from "../../components/Venue/VenueList";
import HeroLandingPage from "../../components/Hero/HeroLandingPage";

const Home = () => {
 console.clear();
 let [searchParams, setSearchParams] = useSearchParams();

 // Updating head section of the page
 updateHead("Home");

 return (
  <>
   <Box
    sx={{
     display: "flex",
     flexDirection: "column",
     gap: 2,
    }}
   >
    <HeroLandingPage />
    <Typography variant="h3">Our venues</Typography>
    <Box>
     <ListingFilter setParams={setSearchParams} />
    </Box>
    <Box>
     <VenueList params={searchParams} />
    </Box>
   </Box>
  </>
 );
};

export default Home;
