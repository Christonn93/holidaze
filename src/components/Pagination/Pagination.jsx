// Importing React
import React, { useState } from "react";

// Importing MUI
import { Box, IconButton, Chip } from "@mui/material";

// Importing MUI icons
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const Pagination = ({ data, setLimit, setOffset, offset }) => {
 const [pageNumber, setPageNumber] = useState(1);

 // Loading pages
 const loadPages = (direction) => {
  if (direction === "back") {
   setLimit(10);
   setOffset(offset - 10);
   setPageNumber(pageNumber - 1);
  }

  if (direction === "forward") {
   setLimit(10);
   setOffset(offset + 10);
   setPageNumber(pageNumber + 1);
  }
 };

 return (
  <Box
   sx={{
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    margin: 2,
    gap: 2,
   }}
  >
   {pageNumber === 1 ? (
    <></>
   ) : (
    <IconButton onClick={() => loadPages("back")}>
     <ArrowBackIosIcon />
    </IconButton>
   )}
   <Chip label={pageNumber} variant="outlined" sx={{ padding: 1 }} />
   <IconButton onClick={() => loadPages("forward")}>
    <ArrowForwardIosIcon />
   </IconButton>
  </Box>
 );
};
