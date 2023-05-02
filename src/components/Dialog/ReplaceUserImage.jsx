import * as React from "react";

import { Button, TextField, Dialog, DialogContent, DialogContentText, DialogTitle, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

import { headers } from "../../api/auth/headers";
import { profiles } from "../../api/constants";

const ReplaceUserImage = ({ name }) => {
 const [open, setOpen] = React.useState(false);

 const handleClickOpen = () => {
  setOpen(true);
 };

 const handleClose = () => {
  setOpen(false);
 };

 const handleRequest = (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const avatar = formData.get("avatar");

  // Variables for request
  const Url = "https://api.noroff.dev/api/v1/holidaze";
  const endPoint = profiles + `/${name}/media`;
  const body = { avatar: avatar };

  fetch(Url + endPoint, {
   headers: headers("application/json"),
   method: "PUT",
   body: JSON.stringify(body),
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
