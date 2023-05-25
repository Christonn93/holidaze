// Import React
import React from "react";

// Importing MUI components
import { Box, Typography, Alert, AlertTitle } from "@mui/material";

// Importing map
import MapLocation from "../../Map/MapLocation";

const VenueLocation = ({ data }) => {
 // Destructing location data
 const { address, city, zip, country, continent, lat, lng } = data;

 return (
  <>
   <Box>
    <Typography variant="body1">Address: {address}</Typography>
    <Typography variant="body1">City: {city}</Typography>
    <Typography variant="body1">Zip: {zip}</Typography>
    <Typography variant="body1">Country: {country}</Typography>
    <Typography variant="body1">Continent: {continent}</Typography>
    {lat && lng ? (
     <>
      <Box
       sx={{
        marginTop: 2,
       }}
      >
       <MapLocation lat={lat} lng={lng} />
      </Box>
     </>
    ) : (
     <>
      <Box
       sx={{
        marginTop: 2,
       }}
      >
       <Alert severity="error">
        <AlertTitle>Oh no</AlertTitle>
        Looks like there is no map to display for this venue
       </Alert>
      </Box>
     </>
    )}
   </Box>
  </>
 );
};

export default VenueLocation;
