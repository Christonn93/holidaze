// Importing React
import React from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { AppBar, Box, Toolbar, IconButton } from "@mui/material";

// Importing images
import Logo from "../../assets/Images/logo.png";

// Importing components
import Image from "../../components/Image/Image";
import Navigation from "../Navigation/Navigation";

const Header = () => {
 return (
  <header>
   <Box
    sx={{
     flexGrow: 1,
    }}
   >
    <AppBar position="static" color="transparent">
     <Toolbar
      variant="dense"
      sx={{
       justifyContent: "space-between",
       flexGrow: 1,
       padding: 1,
      }}
     >
      <Box>
       <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}></IconButton>
       <Link to="/">
        <Image src={Logo} alt={Logo} className="logo" />
       </Link>
      </Box>
      <Box
       sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
       }}
      >
       <Navigation />
      </Box>
     </Toolbar>
    </AppBar>
   </Box>
  </header>
 );
};

export default Header;
