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

  const form = e.target;
  const data = form.avatar.value;

  const endpoint = profiles + `/${storedData.name}/media`;
  const method = "PUT";

  fetch(baseUrl + endpoint, {
   headers: headers("application/json"),
   method: method,
   body: JSON.stringify({ avatar: data }),
  })
   .then((response) => {
    if (!response.ok) {
     throw new Error("Failed to submit form");
    }
    return response.json();
   })
   .then((data) => {
    // Handle successful response from API
    console.log(data);
   })
   .catch((error) => {
    // Handle error
    console.error(error);
   });
 };

 return (
  <>
   <IconButton color="secondary" aria-label="upload picture" component="label" onClick={handleClickOpen}>
    <PhotoCamera />
   </IconButton>
   <Dialog open={open} onClose={handleClose}>
    <DialogTitle>Subscribe</DialogTitle>
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
