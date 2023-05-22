// Importing React
import React from "react";

// Importing MUI
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Chip, Typography } from "@mui/material";

// Import MUI Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Importing functions
import { changeTimeFormat } from "../../js/changeTimeFormat";

const BookingAccordion = ({ data }) => {
 console.clear();
 const dateToday = new Date().toISOString();

 const handleClick = (option) => {
  if (option === "review") {
   alert("Review booking");
  }

  if (option === "cancel") {
   alert("Cancel booking");
  }
 };

 return (
  <>
   {data.map((e) => {
    const dateFrom = e.dateFrom;
    return (
     <>
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
         <Chip label={dateFrom > dateToday ? "Upcoming" : "Done"} color={dateFrom > dateToday ? "success" : "error"} variant="outlined" />
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
           <Button variant="outlined" color="error" onClick={() => handleClick("cancel")}>
            Cancel booking
           </Button>
          </>
         ) : (
          <>
           <Button variant="outlined" color="success" onClick={() => handleClick("review")}>
            Give review
           </Button>
          </>
         )}
        </Box>
       </AccordionDetails>
      </Accordion>
     </>
    );
   })}
  </>
 );
};

export default BookingAccordion;
