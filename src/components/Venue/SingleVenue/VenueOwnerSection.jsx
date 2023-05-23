import React from "react";

import { Box, Typography } from "@mui/material";
import UserAvatar from "../../../components/UserAvatar/UserAvatar";

import { useNavigate } from "react-router-dom";

const VenueOwnerSection = ({ name, avatar }) => {
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
   </Box>
  </>
 );
};

export default VenueOwnerSection;
