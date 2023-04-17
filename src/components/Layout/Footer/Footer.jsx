// Importing React
import React from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

// Importing MUI Icons
import CopyrightIcon from "@mui/icons-material/Copyright";

// Importing images
import Logo from "../../../assets/Images/logo.png";

// Importing components
import Image from "../../../components/Image/Image";

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
     <Grid container spacing={4}>
      <Grid item xs={5}>
       <Link to="/">
        <Image src={Logo} alt={Logo} className="logo" />
       </Link>
      </Grid>
      <Grid
       item
       xs={3}
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
       xs={4}
       sx={{
        display: "flex",
        justifyContent: "center",
        gap: 1,
       }}
      >
       <Stack>
        <Link>Link</Link>
        <Link>link 2</Link>
       </Stack>
      </Grid>
     </Grid>
    </Box>
   </Container>
  </footer>
 );
};

export default Footer;
