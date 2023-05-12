import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

import { changeTimeFormat } from "../../../js/changeTimeFormat";

const VenueTitleSection = ({ name, venueOwner, id, created, updated }) => {
 const [isManager] = useState(() => {
  const storedData = localStorage.getItem("UserData");
  const parseStoredData = JSON.parse(storedData);
  const managerName = parseStoredData.name;
  if (venueOwner === managerName) return parseStoredData.venueManager;
 });
 const navigate = useNavigate();
 const buttonAction = () => {
  navigate(`/venue/edit/${id}`);
 };

 const createdTime = changeTimeFormat(created);
 const updatedTime = changeTimeFormat(updated);

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
     <Box
      sx={{
       display: "flex",
       gap: 2,
       flexWrap: "wrap",
      }}
     >
      <Typography variant="subtitle2">Created: {createdTime}</Typography>
      <Typography variant="subtitle2">Updated: {updatedTime}</Typography>
     </Box>
    </>
   ) : (
    <>
     <Box marginBottom={1}>
      <Typography variant="h1" marginBottom={1}>
       {name}
      </Typography>
     </Box>
     <Box
      sx={{
       display: "flex",
       gap: 2,
       flexWrap: "wrap",
      }}
     >
      <Typography variant="subtitle2">Created: {createdTime}</Typography>
      <Typography variant="subtitle2">Updated: {updatedTime}</Typography>
     </Box>
    </>
   )}
  </>
 );
};

export default VenueTitleSection;
