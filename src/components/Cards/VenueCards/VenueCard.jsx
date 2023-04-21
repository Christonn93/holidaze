import React from "react";
import { Link } from "react-router-dom";

import { Box, Button, Card, CardContent, CardMedia, Typography, Chip, useTheme, useMediaQuery } from "@mui/material";

import WifiIcon from "@mui/icons-material/Wifi";
import WifiOffIcon from "@mui/icons-material/WifiOff";

import RestaurantIcon from "@mui/icons-material/Restaurant";
import NoMealsIcon from "@mui/icons-material/NoMeals";

import LocalParkingIcon from "@mui/icons-material/LocalParking";

import GroupsIcon from "@mui/icons-material/Groups";

const VenueCard = ({ data }) => {
 const device = useTheme();
 const isMobile = useMediaQuery(device.breakpoints.down("md"));

 // Destruction data
 const { name, maxGuests, price, media, meta, id } = data;

 // Default image value
 const imageMissing = "https://via.placeholder.com/600x400?text=Image+missing";

 // Destructing meta data
 const { wifi, parking, breakfast } = meta;

 // Capitalize title
 const rawName = name;
 const fixedName = rawName.charAt(0).toUpperCase() + rawName.slice(1);

 const CardBase = {
  display: "flex",
  flexDirection: "row",
  gap: 2,
  maxWidth: 1150,
  maxHeight: 250,
 };

 const CardBaseMobile = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 2,
  maxWidth: 1150,
 };

 const flexSpaceBetween = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  alignItems: "center",
 };

 return (
  <Card sx={!isMobile ? CardBase : CardBaseMobile}>
   <Box maxWidth={!isMobile ? 350 : 400}>
    {media ? <CardMedia component="img" image={media[0]} alt="alternative text for image" /> : <CardMedia component="img" image={imageMissing} alt="alternative text for image" />}
   </Box>
   <Box
    sx={{
     display: "flex",
     flexDirection: "column",
     justifyContent: "space-between",
     width: "100%",
    }}
   >
    <CardContent
     sx={{
      display: "flex",
      flexDirection: "column",
      gap: 2,
      width: "100%",
     }}
    >
     <Box sx={flexSpaceBetween}>
      <Typography variant="h3">{fixedName}</Typography>
     </Box>
     <Box sx={flexSpaceBetween}>
      <Chip icon={<GroupsIcon />} label={maxGuests} />

      <Typography variant="body2">Price: {price} NOK</Typography>
     </Box>
    </CardContent>
    <CardContent sx={flexSpaceBetween}>
     <Box
      sx={{
       display: "flex",
       gap: 2,
      }}
     >
      {wifi ? (
       <>
        <WifiIcon />
       </>
      ) : (
       <>
        <WifiOffIcon />
       </>
      )}
      {breakfast ? (
       <>
        <RestaurantIcon />
       </>
      ) : (
       <>
        <NoMealsIcon />
       </>
      )}
      {parking ? (
       <>
        <LocalParkingIcon />
       </>
      ) : (
       <></>
      )}
     </Box>
     <Link to={`/venue/${id}`}>
      <Button variant="contained">Book now</Button>
     </Link>
    </CardContent>
   </Box>
  </Card>
 );
};

export default VenueCard;
