import React, { useContext, useState } from "react";

import { Button, TextField, Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

import MainIconButton from "../Button/MainIconButton";
import { VenueContext } from "../../context/venueContext";

const AddImage = ({ id }) => {
 const [open, setOpen] = useState(false);
 const venueEdits = useContext(VenueContext);

 const handleRequest = (e) => {
  e.preventDefault();

  const form = e.target;
  const newMedia = form.media.value;
  venueEdits.getVenueMedia(newMedia);
  setOpen(false);
 };

 return (
  <>
   <MainIconButton color={"primary"} ariaLabel={"Add venue image"} component={"label"} action={() => setOpen(true)} icon={<PhotoCamera />} />
   <Dialog open={open} onClose={() => setOpen(false)}>
    <DialogTitle>New image</DialogTitle>
    <DialogContent>
     <DialogContentText>Add venue image</DialogContentText>
     <form onSubmit={handleRequest}>
      <TextField autoFocus margin="dense" id="media" name="media" label="Add new image" type="url" fullWidth variant="standard" />
      <Button type="submit" variant="contained" color="warning">
       Add image
      </Button>
     </form>
    </DialogContent>
   </Dialog>
  </>
 );
};

export default AddImage;
