// Importing React
import React, { useState, useEffect } from "react";

// Importing MUI
import { Box, Button } from "@mui/material";

// Importing hooks and functions
import useApi from "../../hooks/useApi";
import { venues } from "../../api/constants";

// Importing Components
import UiFeedback from "../../components/UiFeedback/UiFeedback";
import Loading from "../../components/Loading/Loading";

const TestingNewComponents = () => {
 let [limit, setLimit] = useState(5);

 // Fetch endpoint
 let endpoint = venues + `?_owner=true&_bookings=true&limit=${limit}`;

 // Setting method for the fetch
 const method = "GET";

 // Making the fetch call
 const { data, isLoading, isError } = useApi(endpoint, method);

 // Separate state for tracking initial page load
 const [isInitialLoad, setIsInitialLoad] = useState(isLoading);

 console.log(isInitialLoad);

 useEffect(() => {
  setIsInitialLoad(true);
 }, []);

 // Setting up error option
 if (isError) {
  console.error(isError);
  return <UiFeedback severity="error" title={"An unexpected error have accrued"} message={"Please refresh the page"} />;
 }

 // If data value is empty
 if (!data.map) {
  console.log(data);
  return <UiFeedback severity="error" title={"An unexpected error have accrued"} message={"Please refresh the page"} />;
 }

 // Button action for loading more
 const loadMoreVenues = () => {
  setIsInitialLoad(false);
  setLimit(limit + 5);
 };

 const boxSx = {
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  margin: 2,
 };

 return (
  <>
   {isLoading && isInitialLoad ? <Loading /> : data.map((venue) => <h1 key={venue.id}>{venue.name}</h1>)}
   <Box sx={boxSx}>
    <Button variant="contained" color="success" type="submit" onClick={loadMoreVenues}>
     View more
    </Button>
   </Box>
  </>
 );
};

export default TestingNewComponents;
