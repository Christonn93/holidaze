import { Box, Stack, Typography } from "@mui/material";
import React from "react";

import WifiIcon from "@mui/icons-material/Wifi";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import PetsIcon from "@mui/icons-material/Pets";
import GroupsIcon from "@mui/icons-material/Groups";

const VenueDetailsSection = ({ venueDescription, maxGuests, price, wifi, breakfast, parking, pets }) => {
 const stackSx = {
  display: "flex",
  gap: 2,
  alignItems: "center",
 };

 return (
  <>
   <Box>
    <Typography variant="h4" marginBottom={1}>
     Description
    </Typography>
    <Typography variant="body1">{venueDescription}</Typography>
   </Box>
   <Box>
    <Stack
     sx={{
      marginTop: 2,
     }}
    >
     <Typography variant="h5" marginBottom={1}>
      Venue details:
     </Typography>
     <Box sx={stackSx}>
      <GroupsIcon />
      <Typography variant="body2">Room for {maxGuests} guests</Typography>
     </Box>
     <Box sx={stackSx}>
      <WifiIcon />
      {wifi ? <Typography variant="body2">Free wifi included</Typography> : <Typography variant="body2">No wifi. Cell connection low</Typography>}
     </Box>
     <Box sx={stackSx}>
      <RestaurantIcon />
      {breakfast ? <Typography variant="body2">Breakfast included</Typography> : <Typography variant="body2">Breakfast not included</Typography>}
     </Box>
     <Box sx={stackSx}>
      <LocalParkingIcon />
      {parking ? <Typography variant="body2">Private parking</Typography> : <Typography variant="body2">Parking on public parking</Typography>}
     </Box>
     <Box sx={stackSx}>
      <PetsIcon />
      {pets ? <Typography variant="body2">Not allowed</Typography> : <Typography variant="body2">Allowed</Typography>}
     </Box>
    </Stack>
   </Box>
  </>
 );
};

export default VenueDetailsSection;
