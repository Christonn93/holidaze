import React from "react";

import { Button } from "@mui/material";

/**
 *
 *
 * @param {*} color The color of the button
 * @param {*} variant The variant of the MUI button. Text, Outlined, Contained
 * @param {*} buttonAction does the button have a action? This is where you should add the button onClick function
 * @param {*} text What the button should display to the user
 * @param {*} id Button needs an id
 * @returns a button
 */

const MainButton = ({ color, variant, buttonAction, text, id }) => {
 return (
  <Button color={color} variant={variant} onClick={buttonAction} id={id}>
   {text}
  </Button>
 );
};

export default MainButton;
