import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const VenueTitleSection = ({ name, venueOwner, id }) => {
 const [isManager] = useState(() => {
  const storedData = localStorage.getItem("UserData");
  const parseStoredData = JSON.parse(storedData);
  if (!parseStoredData) return;

  const managerName = parseStoredData.name;
  if (venueOwner === managerName) return parseStoredData.venueManager;
 });
 const navigate = useNavigate();
 const buttonAction = () => {
  navigate(`/venue/edit/${id}`);
 };

 return (
  <>
   {isManager ? (
    <>
     <Box
      marginBottom={1}
      sx={{
       display: "flex",
       justifyContent: "space-between",
       alignItems: "center",
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
