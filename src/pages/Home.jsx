// Importing React
import React from "react";

import { Button, Container, Grid } from "@mui/material";

import { CardActions, Card, CardContent, Typography, CardMedia, Box, useTheme, useMediaQuery } from "@mui/material";

import { updateHead } from "../functions/headUpdater";

const ButtonComponent = ({ color, variant, buttonAction, text, id }) => {
 return (
  <Button color={color} variant={variant} onClick={buttonAction} id={id}>
   {text}
  </Button>
 );
};

const VenueCard = ({ data }) => {
 const device = useTheme();
 const isMobile = useMediaQuery(device.breakpoints.down("md"));

 const { title } = data;

 const cardStructureDesk = {
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gap: 2,
  padding: 2,
 };

 const cardStructureMobile = {
  display: "flex",
  flexDirection: "column",
  gap: 2,
  padding: 2,
  maxWidth: 300,
 };

 return (
  <>
   <Card sx={isMobile !== true ? cardStructureDesk : cardStructureMobile}>
    <CardMedia component="img" image="https://via.placeholder.com/600x400?text=Image+missing" alt="alternative text for image" height={200} />
    <CardContent
     sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
     }}
    >
     <Box sx={{}}>
      <Typography gutterBottom variant="h5" component="h2">
       {title}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
       The CardMedia component sets a background image to cover available space.
      </Typography>
     </Box>
     <CardActions
      sx={{
       justifyContent: "end",
      }}
     >
      <ButtonComponent color="primaryButton" variant="contained" buttonAction={() => {}} text="Button text" id="button" />
     </CardActions>
    </CardContent>
   </Card>
  </>
 );
};

/**
 * Home.
 * This function is rendering content that will display in the home page of the site.
 *
 * @returns Content on the home page
 */
const Home = () => {
 updateHead("Home", "Holidaze landing page");

 const mockDataMap = [
  {
   id: 1,
   title: "Mock title",
  },
  {
   id: 2,
   title: "Mock title",
  },
 ];

 return (
  <>
   <Container>
    <Box
     sx={{
      marginTop: 2,
      marginBottom: 2,
     }}
    >
     <Typography variant="h2">Our latest venues</Typography>
     <Grid
      container
      sx={{
       gap: 2,
       marginTop: 2,
       marginBottom: 2,
      }}
     >
      {mockDataMap.map((e) => {
       return (
        <Grid item key={e.id}>
         <VenueCard data={e} />
        </Grid>
       );
      })}
     </Grid>
    </Box>

    <Box
     sx={{
      marginTop: 2,
      marginBottom: 2,
     }}
    >
     <Typography variant="h2">Top rated venues</Typography>
     <Grid
      container
      sx={{
       gap: 2,
       marginTop: 2,
       marginBottom: 2,
      }}
     >
      {mockDataMap.map((e) => {
       return (
        <Grid item key={e.id}>
         <VenueCard data={e} />
        </Grid>
       );
      })}
     </Grid>
    </Box>
   </Container>
  </>
 );
};

export default Home;
