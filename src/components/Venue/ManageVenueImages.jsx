import React, { useState } from "react";

import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import MainIconButton from "../Button/MainIconButton";
import ImageForm from "../Form/ImageForm";

const ManageVenueImages = ({ imageArray }) => {
 const [image, setImage] = useState(() => {
  const storedData = JSON.parse(localStorage.getItem("VenueDetails"));
  const storedMedia = [storedData.media];
  return storedData ? storedMedia : [];
 });

 const addImage = (url) => {
  const newImage = [...image, { url }];
  setImage(newImage);
 };

 const removeImage = (index) => {
  const newImage = [...image];
  newImage.splice(index, 1);
  setImage(newImage);
 };

 return (
  <>
   <ImageForm addImage={addImage} />
   <ImageList
    sx={{
     // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
     transform: "translateZ(0)",
    }}
    rowHeight={200}
    gap={1}
   >
    {" "}
    {imageArray.map((url, index) => {
     const cols = index.featured ? 2 : 1;
     const rows = index.featured ? 2 : 1;
     return (
      <ImageListItem key={index} cols={cols} rows={rows}>
       <img src={url} loading="lazy" alt={url} />
       <ImageListItemBar
        sx={{
         background: "transparent",
        }}
        position="top"
        actionIcon={<MainIconButton color={"error"} ariaLabel={"delete image"} component={"label"} action={() => removeImage(index)} icon={<DeleteForeverIcon />} />}
        actionPosition="right"
       />
      </ImageListItem>
     );
    })}
   </ImageList>
  </>
 );
};

export default ManageVenueImages;
