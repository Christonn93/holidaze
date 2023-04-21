import React from "react";

import { Paper, Typography, Button, Box } from "@mui/material";

const ListingCards = ({ name, infoChildren, buttonChildren, buttonAction }) => {
 return (
  <>
   <Paper
    sx={{
     display: "grid",
     gridTemplateColumns: "1fr auto 1fr",
     alignItems: "center",
     padding: 2,
    }}
    key={name}
   >
    <Box>
     <Typography variant="h5">{name}</Typography>
    </Box>
    <Box>{infoChildren}</Box>
    <Box
     sx={{
      display: "flex",
      justifyContent: "end",
     }}
    >
     <Button variant="outlined" color="primary" onClick={buttonAction}>
      {buttonChildren}
     </Button>
    </Box>
   </Paper>
  </>
 );
};

export default ListingCards;
