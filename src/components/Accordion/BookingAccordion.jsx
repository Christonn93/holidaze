// Importing React
import React from "react";

// Importing MUI
import { Accordion, AccordionDetails, AccordionSummary, Box, Chip, Typography } from "@mui/material";

// Import MUI Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Importing functions
import { changeTimeFormat } from "../../js/changeTimeFormat";
import ActionDialog from "../Dialog/ActionDialog";

const BookingAccordion = ({ data }) => {
 console.clear();
 const dateToday = new Date().toISOString();

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
           <ActionDialog title={"Cancel booking"} response={"This feature will come in the future"} btnText={"Cancel booking"} btnVariant={"outlined"} btnColor={"error"} />
          </>
         ) : (
          <>
           <ActionDialog title={"Give review"} response={"This feature will come in the future"} btnText={"Give review"} btnVariant={"outlined"} btnColor={"success"} />
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
