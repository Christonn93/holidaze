// Import React
import React from "react";

// Import MUI
import { Box, Stack, Typography } from "@mui/material";

// Import MUI Icons
import WifiIcon from "@mui/icons-material/Wifi";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import PetsIcon from "@mui/icons-material/Pets";
import GroupsIcon from "@mui/icons-material/Groups";

const VenueDetails = ({ maxGuests, wifi, breakfast, parking, pets }) => {
 const stackSx = {
  display: "flex",
  gap: 2,
  alignItems: "center",
 };

 return (
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
     {pets ? <Typography variant="body2">Allowed</Typography> : <Typography variant="body2">Not allowed</Typography>}
    </Box>
   </Stack>
  </Box>
 );
};

export default VenueDetails;
