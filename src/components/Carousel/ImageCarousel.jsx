import React from "react";
import Carousel from "react-material-ui-carousel";

import { ImageListItem } from "@mui/material";

const ImageCarousel = ({ media }) => {
 return (
  <Carousel
   sx={{
    maxWidth: 800,
    maxHeight: 500,
   }}
  >
   {media.map((item, i) => (
    <ImageListItem
     sx={{
      maxWidth: 800,
      maxHeight: 500,
     }}
    >
     <img src={item} key={item} alt={item} loading="lazy" />
    </ImageListItem>
   ))}
  </Carousel>
 );
};

export default ImageCarousel;
