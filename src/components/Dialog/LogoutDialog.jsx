// Importing React
import React, { useState } from "react";

// Importing MUI
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

// Importing MUI Icons
import { Logout } from "@mui/icons-material";

const LogoutDialog = ({ location }) => {
 const [open, setOpen] = useState(false);
 const handleClickOpen = () => {
  setOpen(true);
 };

 const handleClose = () => {
  setOpen(false);
 };

 const handleConfirm = () => {
  localStorage.clear("ApiToken");
  localStorage.clear("isLoggedIn");
  localStorage.clear("UserData");
  localStorage.clear("UserDataAuth");
  window.location.replace("/");
 };

 return (
  <>
   {location === "Dashboard" ? (
    <>
     <Button variant={"outlined"} color="CustomError" onClick={handleClickOpen}>
      <Logout fontSize="small" />
      Logout
     </Button>
    </>
   ) : (
    <>
     <Button variant={"text"} color="error" onClick={handleClickOpen}>
      Logout
     </Button>
    </>
   )}

   <Dialog open={open} onClose={handleClose}>
    <Box
     sx={{
      padding: 1,
     }}
    >
     <DialogTitle sx={{ color: "TextError.main" }}>You are now logging out</DialogTitle>
     <DialogContent>Are you sure you want to log out?</DialogContent>
     <DialogActions>
      <Button onClick={handleConfirm} variant="contained" color="error">
       Log me out
      </Button>
      <Button onClick={handleClose} variant="outlined" color="info">
       Cancel
      </Button>
     </DialogActions>
    </Box>
   </Dialog>
  </>
 );
};

export default LogoutDialog;
