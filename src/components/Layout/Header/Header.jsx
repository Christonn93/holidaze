// Importing React
import React from "react";

// Importing MUI
import { Container } from "@mui/material";

// Importing images
import Logo from "../../../assets/Images/logo.png";

// Importing components
import Image from "../../../components/Image/Image";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";

const Header = () => {
 return (
  <header>
   <Container sx={{}}>
    <Link to="/">
     <Image src={Logo} alt={Logo} />
    </Link>
    <Navigation />
   </Container>
  </header>
 );
};

export default Header;
