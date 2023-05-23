// Import react
import React, { useState, useEffect } from "react";

// Importing MUI
import { IconButton } from "@mui/material";

// Importing MUI Icons
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const ThemeSwitch = ({ theme, colorMode }) => {
 const [currentTheme, setCurrentTheme] = useState(() => {
  const storedTheme = localStorage.getItem("theme");
  return storedTheme || theme.palette.mode;
 });

 useEffect(() => {
  localStorage.setItem("theme", currentTheme);
 }, [currentTheme]);

 const handleThemeChange = () => {
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setCurrentTheme(newTheme);
  colorMode.toggleColorMode();
 };

 return (
  <IconButton fontSize="small" onClick={handleThemeChange}>
   {theme.palette.mode === "dark" ? <DarkModeOutlinedIcon color="navText" /> : <LightModeOutlinedIcon color="navText" />}
  </IconButton>
 );
};

export default ThemeSwitch;
