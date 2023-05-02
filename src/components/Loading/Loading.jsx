// Importing React
import React from "react";

// Importing MUI
import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
 return (
  <Box
   sx={{
    display: "flex",
    justifyContent: "center",
    marginTop: 4,
   }}
  >
   <CircularProgress />
  </Box>
 );
};

export default Loading;
