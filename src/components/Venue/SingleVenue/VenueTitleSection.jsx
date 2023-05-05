import React from "react";
import { useNavigate } from "react-router-dom";

import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const VenueTitleSection = ({ name, manager, id }) => {
 const navigate = useNavigate();
 const buttonAction = () => {
  navigate(`/venue/edit/${id}`);
 };

 return (
  <>
   {manager ? (
    <>
     <Box
      marginBottom={1}
      sx={{
       display: "flex",
       justifyContent: "space-between",
      }}
     >
      <Typography variant="h1" marginBottom={1}>
       {name}
      </Typography>
      <Tooltip title={"Manage venue"}>
       <IconButton variant="outlined" color="primary" onClick={buttonAction}>
        <SettingsIcon />
       </IconButton>
      </Tooltip>
     </Box>
    </>
   ) : (
    <>
     <Box marginBottom={1}>
      <Typography variant="h1" marginBottom={1}>
       {name}
      </Typography>
     </Box>
    </>
   )}
  </>
 );
};

export default VenueTitleSection;
