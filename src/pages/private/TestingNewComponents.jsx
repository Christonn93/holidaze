// Importing React
import React from "react";

// Importing MUI
import { Box, Typography } from "@mui/material";

// Importing Component
import BookingForm from "../../components/Form/BookingForm";

// Importing functions
import { updateHead } from "../../js/updateHeader";
import { mockDataVenue } from "../../js/mockDataVenue";

const TestingNewComponents = () => {
 // eslint-disable-line no-console
 console.clear();
 updateHead("Playground");

 return (
  <Box
   sx={{
    display: "flex",
    flexDirection: "column",
    gap: 2,
    marginTop: 5,
    marginBottom: 5,
   }}
  >
   <Typography>Testing new components</Typography>
   <Box>
    <BookingForm data={mockDataVenue} />
   </Box>
  </Box>
 );
};

export default TestingNewComponents;
