import React from "react";

import { Paper, Typography, Box, IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ListingCards = ({ name, id, infoChildren, buttonChildren, buttonAction, ToolTipTitle, location, button }) => {
 const navigate = useNavigate();

 const displayVenue = () => {
  navigate(`/venue/${id}`);
 };

 return (
  <>
   <Paper
    sx={{
     display: "grid",
     gridTemplateColumns: "1fr auto 1fr",
     alignItems: "center",
     padding: 2,
    }}
    key={name}
   >
    <Box>
     {location === "venue" ? (
      <>
       <Typography variant="h5" onClick={displayVenue}>
        {name}
       </Typography>
      </>
     ) : (
      <>
       <Typography variant="h5">{name}</Typography>
      </>
     )}
    </Box>
    <Box>{infoChildren}</Box>
    <Box
     sx={{
      display: "flex",
      justifyContent: "end",
     }}
    >
     <Tooltip title={ToolTipTitle}>
      <IconButton variant="outlined" color="primary" onClick={buttonAction}>
       {buttonChildren}
      </IconButton>
     </Tooltip>
    </Box>
   </Paper>
  </>
 );
};

export default ListingCards;
