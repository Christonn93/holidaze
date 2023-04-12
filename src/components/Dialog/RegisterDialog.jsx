// Importing React
import React from "react";

// Importing MUI
import { Dialog, DialogContent, DialogTitle, Button } from "@mui/material";
import RegisterUser from "../../feature/Register/RegisterUser";

const RegisterDialog = ({ state, setState }) => {
 const handleClickOpen = () => {
  setState(true);
 };

 const handleClose = () => {
  setState(false);
 };

 return (
  <div>
   <Button variant="outlined" onClick={handleClickOpen}>
    Register new user
   </Button>
   <Dialog open={state} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
    <DialogTitle id="alert-dialog-title">{"Register new user"}</DialogTitle>
    <DialogContent>
     <RegisterUser />
    </DialogContent>
   </Dialog>
  </div>
 );
};

export default RegisterDialog;
