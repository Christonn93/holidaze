// Importing React
import React from "react";

// Importing MUI
import { Container, Typography } from "@mui/material";

// Importing Components
import RegisterUser from "../../feature/Register/RegisterUser";
import Link from "../../components/Link/Link";

const Register = () => {
 return (
  <Container>
   <Typography variant="h1" margin={1}>
    Register user
   </Typography>
   <Typography variant="body1" margin={1}>
    Already a user? Log in <Link route="/login" children={"here"} />
   </Typography>
   <RegisterUser />
  </Container>
 );
};

export default Register;
