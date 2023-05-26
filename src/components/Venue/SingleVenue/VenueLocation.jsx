// Import React
import React from "react";

// Importing MUI components
import { Card, Paper, Typography, Alert, AlertTitle } from "@mui/material";

// Importing map
import MapLocation from "../../Map/MapLocation";

const VenueLocation = ({ data }) => {
 // Destructing location data
 const { address, city, zip, country, continent, lat, lng } = data;

 return (
  <>
   <Paper
    elevation="3"
    sx={{
     padding: 2,
    }}
   >
    <Typography variant="body1">Address: {address}</Typography>
    <Typography variant="body1">City: {city}</Typography>
    <Typography variant="body1">Zip: {zip}</Typography>
    <Typography variant="body1">Country: {country}</Typography>
    <Typography variant="body1">Continent: {continent}</Typography>
    {lat && lng ? (
     <>
      <Card
       sx={{
        marginTop: 2,
       }}
      >
       <MapLocation lat={lat} lng={lng} />
      </Card>
     </>
    ) : (
     <>
      <Alert severity="error">
       <AlertTitle>Oh no</AlertTitle>
       Looks like there is no map to display for this venue
      </Alert>
     </>
    )}
   </Paper>
  </>
 );
};

export default VenueLocation;
