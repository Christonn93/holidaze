import React from "react";

import { Box, Typography } from "@mui/material";
import UserAvatar from "../../../components/UserAvatar/UserAvatar";

import { changeTimeFormat } from "../../../js/changeTimeFormat";
import { useNavigate } from "react-router-dom";

const VenueOwnerSection = ({ name, avatar, email, created, updated }) => {
 const createdTime = changeTimeFormat(created);
 const updatedTime = changeTimeFormat(updated);
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
      gap: 2,
      alignItems: "center",
     }}
    >
     <UserAvatar src={avatar} alt={name} size="56" action={handleClick} />
     <Typography variant="h4">{fixedName}</Typography>
    </Box>
    <Typography variant="body2">
     Contact:{" "}
     <a href={`mailto:${email}`} target="_blank">
      {email}
     </a>
    </Typography>
    <Box
     sx={{
      display: "flex",
      gap: 2,
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
