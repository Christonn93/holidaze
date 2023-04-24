// Importing React
import React from "react";

// Importing MUI
import { Alert, AlertTitle } from "@mui/material";

const UiFeedback = ({ severity, title, message }) => {
 return (
  <>
   <Alert severity={severity}>
    <AlertTitle>{title}</AlertTitle>
    {message}
   </Alert>
  </>
 );
};

export default UiFeedback;
