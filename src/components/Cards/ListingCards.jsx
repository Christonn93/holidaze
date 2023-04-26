import React from "react";

import { Paper, Typography, Box, IconButton, Tooltip } from "@mui/material";

const ListingCards = ({ name, infoChildren, buttonChildren, buttonAction, ToolTipTitle }) => {
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
     <Typography variant="h5">{name}</Typography>
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
