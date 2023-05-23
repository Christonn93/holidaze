// Importing React
import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { Box, Toolbar, useTheme } from "@mui/material";

// Importing images
import Logo from "../../assets/Images/logo.png";
import LogoWhite from "../../assets/Images/logo-white.png";

// Importing components
import Image from "../../components/Image/Image";
import Navigation from "../Navigation/Navigation";
import ThemeSwitch from "../Switch/ThemeSwitch";

// Import context
import { ColorModeContext } from "../../style/theme";

const Header = () => {
 const theme = useTheme();
 const colorMode = useContext(ColorModeContext);

 return (
  <header>
   <Box
    sx={{
     flexGrow: 1,
    }}
   >
    <Toolbar
     variant="dense"
     sx={{
      justifyContent: "space-between",
      flexGrow: 1,
      padding: 1,
     }}
    >
     <Box>
      <Link to="/">
       <Image src={theme.palette.mode === "dark" ? LogoWhite : Logo} alt={Logo} className="logo" />
      </Link>
     </Box>
     <Box
      sx={{
       display: "flex",
       alignItems: "center",
      }}
     >
      <ThemeSwitch theme={theme} colorMode={colorMode} />
      <Navigation />
     </Box>
    </Toolbar>
   </Box>
  </header>
 );
};

export default Header;
