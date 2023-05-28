import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, Typography } from "@mui/material";

import UserAvatar from "../../../components/UserAvatar/UserAvatar";

import { changeTimeFormat } from "../../../js/changeTimeFormat";

const VenueOwnerSection = ({ name, avatar, created, updated }) => {
 const navigate = useNavigate();

 const handleClick = () => {
  navigate(`/profile/${name}`);
 };

 if (!name) {
  console.error(name);
  return <h1>There was no data found</h1>;
 }

 // Capitalize title
 const fixedName = name.charAt(0).toUpperCase() + name.slice(1);

 const createdTime = changeTimeFormat(created);
 const updatedTime = changeTimeFormat(updated);

 return (
  <>
   <Box>
    <Box
     sx={{
      display: "flex",
      alignItems: "center",
      gap: 1,
      flexWrap: "wrap",
     }}
    >
     <UserAvatar src={avatar} alt={name} size="56" action={handleClick} />
     <Typography variant="h4">{fixedName}</Typography>
    </Box>
    <Box
     sx={{
      display: "flex",
      gap: 1,
      flexWrap: "wrap",
     }}
    >
     <Typography variant="subtitle2">Created: {createdTime}</Typography>
     <Typography variant="subtitle2">Updated: {updatedTime}</Typography>
    </Box>
   </Box>
  </>
 );
};

export default VenueOwnerSection;
