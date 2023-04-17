// Importing React
import React from "react";

// Importing MUI
import { Container, Typography } from "@mui/material";

// Importing Components
import LogIn from "../feature/Login/LogIn";
import Link from "../components/Link/Link";

const Login = () => {
 return (
  <Container>
   <Typography variant="h1" margin={1}>
    Log in
   </Typography>
   <Typography variant="body1" margin={1}>
    Not a user yet? Register a new user <Link route="/register" children={"here"} />
   </Typography>
   <LogIn />
  </Container>
 );
};

export default Login;
