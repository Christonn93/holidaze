// Importing React
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

// Importing MUI
import { Link as MUILink, useTheme } from "@mui/material";

const Link = ({ route, children }) => {
 const theme = useTheme();

 return (
  <>
   <MUILink component={ReactRouterLink} to={route} underline="hover" color={theme.palette.NavigationLink.main}>
    {children}
   </MUILink>
  </>
 );
};

export default Link;
