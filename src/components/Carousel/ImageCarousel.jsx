import React from "react";
import Carousel from "react-material-ui-carousel";

import { CardMedia, ImageListItem } from "@mui/material";

const ImageCarousel = ({ media }) => {
 return (
  <Carousel
   sx={{
    maxWidth: 800,
    maxHeight: 500,
   }}
   indicators={false}
  >
   {media.map((item, i) => (
    <ImageListItem
     sx={{
      maxWidth: 800,
      maxHeight: 500,
     }}
    >
     <CardMedia src="image" component="img" image={item} key={item} alt={item} />
    </ImageListItem>
   ))}
  </Carousel>
 );
};

export default ImageCarousel;
