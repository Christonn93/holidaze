import React, { useState, useEffect } from "react";

import { Box, Button } from "@mui/material";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTopButton = () => {
 const [isVisible, setIsVisible] = useState(false);

 const handleScroll = () => {
  const scrollY = window.scrollY;
  const isVisible = scrollY > window.innerHeight / 2;
  setIsVisible(isVisible);
 };

 const handleClick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
 };

 useEffect(() => {
  window.addEventListener("scroll", handleScroll);
  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, []);

 return (
  isVisible && (
   <Box
    sx={{
     float: "right",
    }}
   >
    <Button onClick={handleClick} aria-label="scroll up button" variant="outlined" color="secondary">
     <ArrowUpwardIcon />
    </Button>
   </Box>
  )
 );
};

export default ScrollToTopButton;
