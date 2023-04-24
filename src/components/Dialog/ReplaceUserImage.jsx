import * as React from "react";

import { Button, TextField, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

import { baseUrl, profiles } from "../../api/constants";
import { headers } from "../../api/auth/headers";
import { getLocalStorageItem } from "../../js/storage/getItems";

const ReplaceUserImage = () => {
 const [open, setOpen] = React.useState(false);

 const storedData = getLocalStorageItem("UserData");

 const handleClickOpen = () => {
  setOpen(true);
 };

 const handleClose = () => {
  setOpen(false);
 };

 const handleRequest = (e) => {
  e.preventDefault();
 };

 return (
  <>
   <IconButton color="secondary" aria-label="upload picture" component="label" onClick={handleClickOpen}>
    <PhotoCamera />
   </IconButton>
   <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Update user Avatar</DialogTitle>
    <DialogContent>
     <DialogContentText>Change your profile image</DialogContentText>
     <form onSubmit={handleRequest}>
      <TextField autoFocus margin="dense" id="avatar" name="avatar" label="User avatar URL" type="url" fullWidth variant="standard" />
      <Button type="submit" variant="contained" color="warning">
       Continue
      </Button>
     </form>
    </DialogContent>
   </Dialog>
  </>
 );
};

export default ReplaceUserImage;
