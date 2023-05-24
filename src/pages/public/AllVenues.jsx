// Importing React
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// Importing MUI
import { Box, IconButton, Chip } from "@mui/material";

// Importing MUI icons
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Importing hooks and functions
import useApi from "../../hooks/useApi";
import { venues } from "../../api/constants";

// Importing Components
import VenueCard from "../../components/Cards/VenueCards/VenueCard";
import UiFeedback from "../../components/UiFeedback/UiFeedback";
import Loading from "../../components/Loading/Loading";
import ListingFilter from "../../components/Filter/ListingFilter";

const AllVenues = () => {
 let [limit, setLimit] = useState(10);
 let [offset, setOffset] = useState(-0);
 let [searchParams, setSearchParams] = useSearchParams();
 const [pageNumber, setPageNumber] = useState(1);
 // eslint-disable-next-line
 let [key, value] = searchParams.entries();

 // Empty search value
 let search = "";

 // Fetch endpoint
 let endpoint = venues + `?_owner=true&_bookings=true&limit=${limit}&offset=${offset}&sort=created&sortOrder=desc`;

 // Setting url key for filtering options
 if (key === undefined) key = "";
 if (key) endpoint = venues + `?_owner=true&_bookings=true&limit=${limit}&sort=${key[0]}&sortOrder=${key[1]}`;
 if (key[0] === "search") {
  endpoint = venues + `?_owner=true&_bookings=true&limit=${limit}/search=${key[1]}`;
  search = key[1];
 }

 // Setting method for the fetch
 const method = "GET";

 // Making the fetch call
 const { data, isLoading, isError } = useApi(endpoint, method);

 // Separate state for tracking initial page load
 const [isInitialLoad, setIsInitialLoad] = useState(isLoading);

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

 const loadPages = (direction) => {
  if (direction === "back") {
   setLimit(limit - 10);
   setOffset(offset - 10);
   setPageNumber(pageNumber - 1);
  }

  if (direction === "forward") {
   setLimit(limit + 10);
   setOffset(offset + 10);
   setPageNumber(pageNumber + 1);
  }
 };

 return (
  <>
   <Box>
    <ListingFilter text={"All venues"} setParams={setSearchParams} />
   </Box>

   {isLoading && isInitialLoad ? (
    <Loading />
   ) : (
    data
     .filter((venue) => {
      return (
       venue.name.toLowerCase().includes(search.toLowerCase()) ||
       venue.location.country.toLowerCase().includes(search.toLowerCase()) ||
       venue.location.continent.toLowerCase().includes(search.toLowerCase()) ||
       venue.location.city.toLowerCase().includes(search.toLowerCase())
      );
     })
     .map((venue) => (
      <Box
       key={venue.id}
       sx={{
        marginTop: 2,
       }}
      >
       <VenueCard data={venue} />
      </Box>
     ))
   )}
   <Box
    sx={{
     display: "flex",
     justifyContent: "center",
     alignContent: "center",
     alignItems: "center",
     margin: 2,
     gap: 2,
    }}
   >
    <IconButton onClick={() => loadPages("back")}>
     <ArrowBackIosIcon />
    </IconButton>
    <Chip label={pageNumber} variant="outlined" sx={{ padding: 1 }} />
    <IconButton onClick={() => loadPages("forward")}>
     <ArrowForwardIosIcon />
    </IconButton>
   </Box>
  </>
 );
};

export default AllVenues;
