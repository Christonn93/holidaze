// Importing React
import React from "react";

// Importing MUI
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Chip, Typography } from "@mui/material";

// Import MUI Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Importing Component

// Importing functions
import { updateHead } from "../../js/updateHeader";
import { changeTimeFormat } from "../../js/changeTimeFormat";

// Importing Mock data
import { mockBookingData } from "../../js/MockData/mockBooking";

const TestingNewComponents = () => {
 // eslint-disable-line no-console
 console.clear();
 updateHead("Playground");

 const dateToday = new Date().toISOString();
 console.log(dateToday);

 const handleClick = (option) => {
  if (option === "review") {
   alert("Review booking");
  }

  if (option === "cancel") {
   alert("Cancel booking");
  }
 };

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
    <Box>
     {mockBookingData.map((e) => {
      const dateFrom = e.dateFrom;
      return (
       <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
         <Box
          sx={{
           display: "flex",
           justifyContent: "space-between",
           alignItems: "center",
           alignContent: "center",
           width: 2 / 2,
           padding: 1,
          }}
         >
          <Typography>{e.venue.name}</Typography>
          <Chip label={dateFrom > dateToday ? "Done" : "Upcoming"} color={dateFrom > dateToday ? "error" : "success"} variant="outlined" />
         </Box>
        </AccordionSummary>
        <AccordionDetails
         sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          alignContent: "center",
          width: 2 / 2,
         }}
        >
         <Box key={e.id}>
          <Typography>Check in: {changeTimeFormat(e.dateFrom)}</Typography>
          <Typography>Check out: {changeTimeFormat(e.dateTo)}</Typography>
         </Box>
         <Box>
          {dateFrom > dateToday ? (
           <>
            <Button variant="outlined" color="success" onClick={() => handleClick("review")}>
             Give review
            </Button>
           </>
          ) : (
           <>
            <Button variant="outlined" color="error" onClick={() => handleClick("cancel")}>
             Cancel booking
            </Button>
           </>
          )}
         </Box>
        </AccordionDetails>
       </Accordion>
      );
     })}
    </Box>
   </Box>
  </Box>
 );
};

export default TestingNewComponents;
