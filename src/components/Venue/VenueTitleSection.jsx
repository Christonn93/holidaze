import React from "react";

import { Box, Typography } from "@mui/material";

const VenueTitleSection = ({ name }) => {
 return (
  <>
   <Box marginBottom={1}>
    <Typography variant="h1" marginBottom={1}>
     {name}
    </Typography>
   </Box>
  </>
 );
};

export default VenueTitleSection;
