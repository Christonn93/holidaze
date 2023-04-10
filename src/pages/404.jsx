// Importing React
import React from "react";
import { Link } from "react-router-dom";

// Importing MUI
import { Paper, Container, Typography } from "@mui/material";

/**
 *
 * @returns UI for 404 status page
 */
function RouteNotFound() {
 return (
  <Container>
   <Paper
    elevation={3}
    sx={{
     padding: "20px",
     border: "1px solid red",
     borderRadius: "15px",
    }}
   >
    <Typography variant="h1" color="red">
     404
    </Typography>
    <Typography variant="body1">
     We are sorry. There is a error that have occurred with the link you clicked. Please return to <Link to={"/"}>Home</Link>
    </Typography>
   </Paper>
  </Container>
 );
}
export default RouteNotFound;