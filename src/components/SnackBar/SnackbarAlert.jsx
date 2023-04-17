// Importing React
import React from "react";

// Importing MUI
import { Alert, Snackbar, useMediaQuery, useTheme } from "@mui/material";

const SnackbarAlert = ({ open, setOpen, severity, children}) => {
 const device = useTheme();
 const isMobile = useMediaQuery(device.breakpoints.down("md"));

 const handleClose = () => {
  setOpen(false);
 };

 const display = (
  <Alert onClose={handleClose} severity={severity} variant="filled" sx={{ width: "100%", color: "white" }}>
   {children}
  </Alert>
 );

 return (
  <>
   {isMobile ? (
    <Snackbar open={open} autoHideDuration={2500} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "right" }}>
     {display}
    </Snackbar>
   ) : (
    <Snackbar open={open} autoHideDuration={2500} onClose={handleClose} anchorOrigin={{ vertical: "bottom", horizontal: "right" }}>
     {display}
    </Snackbar>
   )}
  </>
 );
};

export default SnackbarAlert;