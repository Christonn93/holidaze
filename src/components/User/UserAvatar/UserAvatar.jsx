// Importing React
import React from "react";

// Importing MUI
import { Avatar, IconButton } from "@mui/material";

const UserAvatar = ({ action, src, alt, size, variant }) => {
 return (
  <IconButton onClick={action}>
   <Avatar
    src={src}
    alt={alt}
    sx={{
     width: size + "px",
     height: size + "px",
     border: "3px solid #fe5001",
    }}
    variant={variant}
   >
    {}
   </Avatar>
  </IconButton>
 );
};

export default UserAvatar;
