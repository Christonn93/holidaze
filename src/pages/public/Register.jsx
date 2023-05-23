// Importing React
import React from "react";

// Importing MUI
import { Container, Typography } from "@mui/material";

// Importing Components
import RegisterUser from "../../components/Form/Register/RegisterUser";
import Link from "../../components/Link/Link";

// Importing hooks and functions
import { updateHead } from "../../js/updateHeader";

const Register = () => {
 // Updating head section of the page
 updateHead("Register new user");

 return (
  <Container>
   <Typography variant="h1" margin={1}>
    Register user
   </Typography>
   <Typography variant="body1" margin={1}>
    Already a user? Log in <Link route="/login" color="primary" children={"here"} />
   </Typography>
   <RegisterUser />
  </Container>
 );
};

export default Register;
