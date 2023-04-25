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
 const [params, setParams] = useSearchParams();
 const filterOption = params.get("filter");

 // Updating head section of the page
 updateHead("Home");

 return (
  <>
   <h1>Home</h1>
   <Box>
    <ListingFilter setParams={setParams} />
   </Box>
   <Box>
    <VenueList params={filterOption} />
   </Box>
  </>
 );
};

export default Home;
