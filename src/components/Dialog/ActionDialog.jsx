// Importing React
import React, { useState } from "react";

// Importing MUI
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

/**
 *
 * @param {title} title The dialog title
 * @param {response} response The response text in the dialog
 * @param {btnText} btnText Button text to display to the user
 * @param {btnVariant} btnVariant Choose variant.
 * @param {btnColor} btnColor Choose color
 * @returns Dialog for when clicking on button
 */
const ActionDialog = ({ title, response, btnText, btnVariant, btnColor }) => {
 const [open, setOpen] = useState(false);

 const handleClickOpen = () => {
  setOpen(true);
 };

 const handleClose = () => {
  setOpen(false);
 };

 return (
  <>
   <Button variant={btnVariant} color={btnColor} onClick={handleClickOpen}>
    {btnText}
   </Button>
   <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
    <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
    <DialogContent>{response}</DialogContent>
    <DialogActions>
     <Button onClick={handleClose}>Close</Button>
    </DialogActions>
   </Dialog>
  </>
 );
};

export default ActionDialog;
