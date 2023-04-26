import React from "react";

import { Box, Typography } from "@mui/material";
import UserAvatar from "../../../components/UserAvatar/UserAvatar";

import { changeTimeFormat } from "../../js/changeTimeFormat";

const VenueOwnerSection = ({ name, avatar, email, created, updated }) => {
 const createdTime = changeTimeFormat(created);
 const updatedTime = changeTimeFormat(updated);

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
     <UserAvatar src={avatar} alt={name} size="56" />
     <Typography variant="h4">{name}</Typography>
    </Box>
    <Typography variant="body2">Contact: {email}</Typography>
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
