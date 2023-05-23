// Importing React
import React from "react";

// Importing MUI
import { Container, Typography } from "@mui/material";

// Importing Components
import LogIn from "../../components/Form/Login/LogIn";
import Link from "../../components/Link/Link";

const Login = () => {
 console.clear();
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
