import React from "react";

import { Box, Typography } from "@mui/material";
import UserAvatar from "../../components/UserAvatar/UserAvatar";

const VenueOwnerSection = ({ name, avatar, email }) => {
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
   </Box>
  </>
 );
};

export default VenueOwnerSection;
