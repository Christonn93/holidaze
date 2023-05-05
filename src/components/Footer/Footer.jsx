// Importing React
import React from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

// Importing MUI Icons
import CopyrightIcon from "@mui/icons-material/Copyright";

// Importing images
import Logo from "../../assets/Images/logo.png";

// Importing components
import Image from "../../components/Image/Image";

const Footer = () => {
 const timeDate = new Date();
 const year = timeDate.getFullYear();
 return (
  <footer>
   <Container>
    <Box
     sx={{
      flexGrow: 1,
      padding: 2,
     }}
    >
     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 2, md: 12 }}>
      <Grid item xs={2} sm={4} md={4}>
       <Link to="/">
        <Image src={Logo} alt={Logo} className="logo" />
       </Link>
      </Grid>
      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 1,
       }}
      >
       <CopyrightIcon />
       <Typography variant="body2"> Holidaze {year}</Typography>
      </Grid>
      <Grid
       item
       xs={2}
       sm={4}
       md={4}
       sx={{
        display: "flex",
        justifyContent: "center",
        gap: 1,
       }}
      >
       <Stack></Stack>
      </Grid>
     </Grid>
    </Box>
   </Container>
  </footer>
 );
};

export default Footer;
