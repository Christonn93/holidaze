// Importing React
import React from "react";
import { useSearchParams } from "react-router-dom";

// Importing MUI
import { Box } from "@mui/material";

// Importing hooks and functions
import { updateHead } from "../../js/updateHeader";

// Importing components
import ListingFilter from "../../components/Filter/ListingFilter";
import VenueList from "../../components/Venue/VenueList";
import HeroLandingPage from "../../components/Hero/HeroLandingPage";
import ScrollToTopButton from "../../components/Button/ScrollToTopButton";

const Home = () => {
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

    <Box>
     <ListingFilter setParams={setSearchParams} />
    </Box>
    <Box>
     <VenueList params={searchParams} />
    </Box>
   </Box>
   <ScrollToTopButton />
  </>
 );
};

export default Home;
