// Importing React
import React, { useState } from "react";

import { Box, Container, Link as MUILink, Typography} from "@mui/material";
import { updateHead } from "../functions/headUpdater";

import LoginDialog from "../components/Dialog/LoginDialog";
import RegisterDialog from "../components/Dialog/RegisterDialog";

import ApiHook from "../api/BaseCall";
import { venues, baseUrl } from "../api/constants";
import VenueCards from "../components/Cards/VenueCards";

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

 const { data } = ApiHook(baseUrl + venues);

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
      return <VenueCards data={values} key={values.id}/>;
     })}
    </Box>
   </Container>
  </>
 );
};

export default Home;
