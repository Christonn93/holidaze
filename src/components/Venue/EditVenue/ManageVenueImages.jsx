import React, { useState } from "react";

import { Box, CardMedia, FormGroup, IconButton, TextField, Tooltip } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import AddIcon from "@mui/icons-material/Add";

const ManageVenueImages = ({ imageArray }) => {
 const [media, setMedia] = useState(imageArray);

 const handleAddImage = (newImage) => {
  setMedia([...media, newImage]);
 };

 const handleRemoveImage = (removedImage) => {
  const updatedMedia = media.filter((item) => item !== removedImage); // Filter out the removedImage from the media array
  setMedia(updatedMedia); // Update the media state with the updatedMedia array
 };

 const formSubmit = (e) => {
  e.preventDefault();
  const form = e.target;
  const newMedia = form.newImage.value;

  console.log(newMedia);

  handleAddImage(newMedia);
 };

 return (
  <>
   <form onSubmit={formSubmit}>
    <Box
     sx={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 3,
     }}
    >
     <TextField name="newImage" type="url" variant="outlined" fullWidth />
     <IconButton type="submit" color="success">
      <AddIcon />
     </IconButton>
    </Box>
   </form>
   <FormGroup
    sx={{
     gap: 2,
     marginBottom: 2,
     marginTop: 2,
    }}
   >
    {media.map((item, index) => (
     <>
      <Box
       sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 3,
       }}
      >
       <Tooltip key={item} title={<CardMedia component="img" image={item} alt="alternative text for image" loading="lazy" />}>
        <TextField name="media" variant="outlined" defaultValue={item} fullWidth />
       </Tooltip>
       <IconButton color="error" onClick={() => handleRemoveImage(item)}>
        <DeleteForeverIcon />
       </IconButton>
      </Box>
     </>
    ))}
   </FormGroup>
  </>
 );
};

export default ManageVenueImages;
