// Importing React
import React from "react";

// Importing MUI
import { Container, Typography } from "@mui/material";

// Importing Components
import Link from "../../components/Link/Link";


const HeroLogin = () => {
 return (
  <>
   <Typography variant="h1" margin={1}>
    Log in
   </Typography>
   <Typography variant="body1" margin={1}>
    Not a user yet? Register a new user <Link route="/register" color="primary" children={"here"} />
   </Typography>
  </>
 );
};

export default HeroLogin;
