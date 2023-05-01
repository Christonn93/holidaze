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

const Home = () => {
 console.clear();
 let [searchParams, setSearchParams] = useSearchParams();

 // Updating head section of the page
 updateHead("Home");

 return (
  <>
   <h1>Home</h1>
   <Box>
    <ListingFilter setParams={setSearchParams} />
   </Box>
   <Box>
    <VenueList params={searchParams} />
   </Box>
  </>
 );
};

export default Home;
