// Importing React
import React from "react";

// Importing MUI
import { Box, Typography } from "@mui/material";

// Importing Component
import BookingCalender from "../../components/Calender/BookingCalender";

// Importing functions
import { updateHead } from "../../js/updateHeader";

// Getting mock data
import { data } from "../../js/mockData";

console.log(data);

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
    <BookingCalender data={data} />
   </Box>
  </Box>
 );
};

export default TestingNewComponents;
