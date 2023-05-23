// Importing React
import React from "react";

// Importing MUI
import { Container, Typography } from "@mui/material";

// Importing Components
import LogIn from "../../components/Form/Login/LogIn";
import Link from "../../components/Link/Link";

// Importing hooks and functions
import { updateHead } from "../../js/updateHeader";

const Login = () => {
 // Updating head section of the page
 updateHead("Login user");

 return (
  <Container>
   <Typography variant="h1" margin={1}>
    Log in
   </Typography>
   <Typography variant="body1" margin={1}>
    Not a user yet? Register a new user <Link route="/register" color="primary" children={"here"} />
   </Typography>
   <LogIn />
  </Container>
 );
};

export default Login;
