// Importing React
import React from "react";
import { Box, Card, Container, Link, Typography, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import { updateHead } from "../functions/headUpdater";

/**
 * Home.
 * This function is rendering content that will display in the home page of the site.
 *
 * @returns Content on the home page
 */
const Home = ({ state }) => {
 updateHead("Home", "Holidaze landing page");

 return (
  <>
   <Container>
    <Box>
     <Typography variant="h1">H1</Typography>
     <Typography variant="h2">H2</Typography>
     <Typography variant="h3">H3</Typography>
     <Typography variant="h4">H4</Typography>
     <Typography variant="h5">H5</Typography>
     <Typography variant="h6">H6</Typography>
    </Box>
    <Box>
     <Typography variant="body1">Body text 1</Typography>
     <Typography variant="body2">body text 2</Typography>
    </Box>

    <Box>
     <Link>This is a link</Link>
    </Box>

    <Box>
     <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt="green iguana" height="140" image="https://st4.depositphotos.com/4329009/19956/v/450/depositphotos_199564354-stock-illustration-creative-vector-illustration-default-avatar.jpg" />
      <CardContent>
       <Typography gutterBottom variant="h5" component="div">
        Lizard
       </Typography>
       <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
       </Typography>
      </CardContent>
      <CardActions>
       <Button size="small">Share</Button>
       <Button size="small">Learn More</Button>
      </CardActions>
     </Card>
    </Box>
   </Container>
  </>
 );
};

export default Home;
