// Importing MUI Icons
import StarBorderIcon from "@mui/icons-material/StarBorder";
import WifiIcon from "@mui/icons-material/Wifi";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import NoMealsIcon from "@mui/icons-material/NoMeals";
import LocalParkingIcon from "@mui/icons-material/LocalParking";

import { Card, CardMedia, Grid, Typography, IconButton, Button } from "@mui/material";

<Card sx={{ maxWidth: 1500, maxHeight: 250, square: false }}>
 <Grid container padding={2}>
  <Grid item xs={3}>
   <CardMedia component="img" image="https://via.placeholder.com/600x400?text=Image+missing" alt="alternative text for image" height={200} />
  </Grid>
  <Grid item xs={9}>
   <Grid container padding={2}>
    <Grid item container justifyContent="space-between">
     <Typography variant="h3">Title</Typography>
     <IconButton color="secondary" aria-label="like venue" component="label">
      <StarBorderIcon />
     </IconButton>
    </Grid>
    <Grid Item container justifyContent="flex-end">
     {pets ? (
      <>
       <Typography variant="body2">Pets not allowed</Typography>
      </>
     ) : (
      <>
       <Typography variant="body2">Pets allowed</Typography>
      </>
     )}
    </Grid>
   </Grid>
  </Grid>
 </Grid>
</Card>;
