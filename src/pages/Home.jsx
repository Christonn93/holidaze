// Importing React
import React from "react";
import { Container } from "@mui/material";
import { updateHead } from "../functions/headUpdater";

/**
 * Home.
 * This function is rendering content that will display in the home page of the site.
 *
 * @returns Content on the home page
 */
const Home = ({ state }) => {
 updateHead("Home", "Holidaze landing page");

 return (
  <>
   <Container>
    <h1>Home page</h1>
   </Container>
  </>
 );
};

export default Home;
