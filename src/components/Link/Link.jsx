// Importing React
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

// Importing MUI
import { Link as MUILink, useTheme } from "@mui/material";

const Link = ({ route, children, color }) => {
 const theme = useTheme();


 return (
  <>
   <MUILink component={ReactRouterLink} to={route} underline="hover" color={color === "primary" ? theme.palette.NavigationLink.main : theme.palette.NavigationLink.secondary}>
    {children}
   </MUILink>
  </>
 );
};

export default Link;
