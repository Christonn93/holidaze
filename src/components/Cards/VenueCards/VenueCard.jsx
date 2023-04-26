import React from "react";
import { Link } from "react-router-dom";

import { Box, Button, Card, CardContent, CardMedia, Typography, Chip, useTheme, useMediaQuery } from "@mui/material";

import WifiIcon from "@mui/icons-material/Wifi";
import WifiOffIcon from "@mui/icons-material/WifiOff";

import RestaurantIcon from "@mui/icons-material/Restaurant";
import NoMealsIcon from "@mui/icons-material/NoMeals";

import LocalParkingIcon from "@mui/icons-material/LocalParking";

import GroupsIcon from "@mui/icons-material/Groups";

import { CardBase, CardBaseMobile, flexSpaceBetween } from "./VenueCardSx";

const VenueCard = ({ data }) => {
 const device = useTheme();
 const isMobile = useMediaQuery(device.breakpoints.down("md"));

 // Destruction data
 const { name, maxGuests, price, media, meta, id, location } = data;

 // Default image value if image is not matching
 const imageCheck = /\.(jpg|jpeg|png|webp|avif|gif)$/i.test(media[0]);
 const imageMissing = "https://via.placeholder.com/600x400?text=Image+missing";

 // Destructing meta data
 const { wifi, parking, breakfast } = meta;

 // Destructing location data
 const { address, city, country } = location;

 // Capitalize title
 const rawName = name;
 const fixedName = rawName.charAt(0).toUpperCase() + rawName.slice(1);

 return (
  <Card sx={!isMobile ? CardBase : CardBaseMobile}>
   <Box maxWidth={!isMobile ? 350 : 400}>
    <CardMedia component="img" image={imageCheck ? media[0] : imageMissing} alt={media[0] ? "Main image of venue" : "Image is missing"} />
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
     <Box
      sx={{
       display: "flex",
       flexDirection: "column",
       width: "100%",
      }}
     >
      <Typography variant="h3">{fixedName}</Typography>
      <Typography variant="subtitle2">
       {address === "Unknown" ? <></> : <>{address},</>} {city === "Unknown" ? <></> : <>{city},</>} {country === "Unknown" ? <></> : <>{country}</>}
      </Typography>
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
