// Importing React
import React from "react";

import { IconButton } from "@mui/material";

const MainIconButton = ({ color, ariaLabel, component, action, icon }) => {
 return (
  <IconButton color={color} aria-label={ariaLabel} component={component} onClick={action}>
   {icon}
  </IconButton>
 );
};

export default MainIconButton;
