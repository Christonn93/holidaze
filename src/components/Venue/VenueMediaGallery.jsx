import { CardMedia, Grid } from "@mui/material";
import React from "react";

const VenueMediaGallery = ({ media }) => {
 return (
  <>
   <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
    {media.map((item) => (
     <Grid item xs={6}>
      <CardMedia component="img" image={item} alt="alternative text for image" loading="lazy" />
     </Grid>
    ))}
   </Grid>
  </>
 );
};

export default VenueMediaGallery;
