import React from "react";
import { useNavigate } from "react-router-dom";

import { Breadcrumbs, Typography } from "@mui/material";

const SiteCrumbs = ({ firstStep, secondStep }) => {
 const navigate = useNavigate();

 function handleClick(event) {
  event.preventDefault();
 }

 const handleNavigate = () => {
  navigate("/");
 };

 return (
  <div role="presentation" onClick={handleClick}>
   <Breadcrumbs aria-label="breadcrumb">
    <Typography
     color="text.primary"
     onClick={handleNavigate}
     sx={{
      "&:hover": {
       cursor: "pointer",
       textShadow: "1px 1px 1px black",
      },
     }}
    >
     Home
    </Typography>
    <Typography color="text.primary">{firstStep}</Typography>
    <Typography color="text.primary">{secondStep}</Typography>
   </Breadcrumbs>
  </div>
 );
};

export default SiteCrumbs;
