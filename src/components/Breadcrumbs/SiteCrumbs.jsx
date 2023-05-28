import React from "react";
import { useNavigate } from "react-router-dom";

import { Breadcrumbs, Typography } from "@mui/material";

const SiteCrumbs = ({ firstStep, secondStep }) => {
 const navigate = useNavigate();

 function handleClick(event) {
  event.preventDefault();
 }

 const handleNavigate = (path) => {
  if (path === "home") navigate("/");
  if (path === "venue") navigate("/venues");
 };

 return (
  <div role="presentation" onClick={handleClick}>
   <Breadcrumbs aria-label="breadcrumb">
    <Typography
     color="text.primary"
     onClick={() => handleNavigate("home")}
     sx={{
      "&:hover": {
       cursor: "pointer",
       textShadow: "1px 1px 1px black",
      },
     }}
    >
     Home
    </Typography>
    <Typography color="text.primary" onClick={() => handleNavigate("venue")}>
     {firstStep}
    </Typography>
    <Typography color="text.primary">{secondStep}</Typography>
   </Breadcrumbs>
  </div>
 );
};

export default SiteCrumbs;
