// Importing React
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Card, Container, Link as MUILink, Typography, CardMedia, CardContent, CardActions, Button } from "@mui/material";
import { updateHead } from "../functions/headUpdater";

import LoginDialog from "../components/Dialog/LoginDialog";
import RegisterDialog from "../components/Dialog/RegisterDialog";

import ApiHook from "../api/BaseCall";
import { venues, baseUrl } from "../api/constants";

/**
 * Home.
 * This function is rendering content that will display in the home page of the site.
 *
 * @returns Content on the home page
 */
const Home = () => {
 const [login, setLogin] = useState(false);
 const [register, setRegister] = useState(false);

 updateHead("Home", "Holidaze landing page");

 const { data, isError, isLoading } = ApiHook(baseUrl + venues);

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
     <MUILink>This is a link</MUILink>
    </Box>

    <Box
     sx={{
      padding: 4,
     }}
    >
     <LoginDialog state={login} setState={setLogin} />
     <RegisterDialog state={register} setState={setRegister} />
    </Box>

    <Box>
     {data.map((values) => {
      const { id, name, description, media, price, maxGuests, created, updated, meta } = values;

      return (
       <>
        <Card sx={{ maxWidth: 345, marginTop: 2 }} key={id}>
         <CardMedia component="img" alt="green iguana" height="140" image={media[0]} />
         <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {maxGuests}
          </Typography>
         </CardContent>
         <CardActions>
          <Link to={`/venue/${id}`}>Learn More</Link>
         </CardActions>
        </Card>
       </>
      );
     })}
    </Box>
   </Container>
  </>
 );
};

export default Home;
