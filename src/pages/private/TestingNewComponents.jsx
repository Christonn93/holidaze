// Importing React
import React from "react";

// Importing MUI
import { Box, Typography } from "@mui/material";

const TestingNewComponents = () => {
 return (
  <Box
   sx={{
    display: "flex",
    flexDirection: "column",
    gap: 2,
    marginTop: 5,
    marginBottom: 5,
   }}
  >
   <Typography>Testing new components</Typography>
   <Box></Box>
  </Box>
 );
};

export default TestingNewComponents;
