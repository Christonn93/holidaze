import React from "react";
import Carousel from "react-material-ui-carousel";

import { CardMedia, ImageListItem } from "@mui/material";

const ImageCarousel = ({ media }) => {
 return (
  <Carousel
   sx={{
    maxWidth: 750,
    maxHeight: 500,
   }}
   indicators={false}
  >
   {media.map((item) => (
    <ImageListItem key="item">
     <CardMedia src="image" component="img" image={item} key={item} alt={item} sx={{ height: 500 }} />
    </ImageListItem>
   ))}
  </Carousel>
 );
};

export default ImageCarousel;
