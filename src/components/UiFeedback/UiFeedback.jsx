// Importing React
import React from "react";

// Importing MUI
import { Alert, AlertTitle } from "@mui/material";

/**
 *
 * @param {severity} Severity Choose from these: Error, success, info, warning
 * @param {title}  Title Set the title text on the feedback
 * @param {message} Message  Set the message for the user to receive on the feedback
 * @returns
 */
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
