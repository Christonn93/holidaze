// Importing React
import React from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { Box, Container, Typography, useTheme } from "@mui/material";

// Importing MUI Icons
import CopyrightIcon from "@mui/icons-material/Copyright";

// Importing images
import Logo from "../../assets/Images/logo.png";
import LogoWhite from "../../assets/Images/logo-white.png";

// Importing components
import Image from "../../components/Image/Image";

const Footer = () => {
 const timeDate = new Date();
 const year = timeDate.getFullYear();
 const theme = useTheme();
 return (
  <footer style={{ marginTop: "20px" }}>
   <Container>
    <Box
     sx={{
      display: "flex",
      flexDirection: "column",
      gap: 2,
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      width: 2 / 2,
     }}
    >
     <Link to="/">
      <Image src={theme.palette.mode === "dark" ? LogoWhite : Logo} alt={Logo} className="logo" />
     </Link>
     <Box
      sx={{
       display: "flex",
       alignContent: "center",
       gap: 1,
      }}
     >
      <CopyrightIcon />
      <Typography variant="body2"> Holidaze {year}</Typography>
     </Box>
    </Box>
   </Container>
  </footer>
 );
};

export default Footer;
