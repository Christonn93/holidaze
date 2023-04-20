import React from "react";

import { changeTimeFormat } from "../../js/changeTimeFormat";

import { Box, Typography } from "@mui/material";

const VenueTitleSection = ({ name, created, updated }) => {
 const createdTime = changeTimeFormat(created);
 const updatedTime = changeTimeFormat(updated);

 return (
  <>
   <Box marginBottom={1}>
    <Typography variant="h1" marginBottom={1}>
     {name}
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

export default VenueTitleSection;
