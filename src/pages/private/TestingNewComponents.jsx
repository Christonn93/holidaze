// Importing React
import React, { useEffect, useState } from "react";

// Calender imports
import { DateRange } from "react-date-range";

// Importing MUI
import { Box, Typography } from "@mui/material";

// Importing functions
import { updateHead } from "../../js/updateHeader";

// Getting mock data
import { data } from "../../js/mockData";
import { getDatesBetween } from "../../js/getDatesBetween";

console.log(data);

const TestingNewComponents = () => {
 // eslint-disable-line no-console
 console.clear();
 updateHead("Playground");

 // eslint-disable-next-line
 const [blockedValue, setBlockedValue] = useState([
  {
   startDate: new Date(),
   endDate: new Date(),
   key: "selection",
  },
 ]);
 const [inputValue, setInputValue] = useState([
  {
   startDate: new Date(),
   endDate: new Date(),
   key: "selection",
  },
 ]);

 //  useEffect(() => {
 //   setBlockedValue(
 //    data.map((e) => {
 //     return getDatesBetween(new Date(e.dateFrom), new Date(e.dateTo));
 //    })
 //   );
 //  }, []);

 useEffect(() => {
  data.forEach((e) => setBlockedValue(getDatesBetween(new Date(e.dateFrom), new Date(e.dateTo))));
 }, []);

 console.log("Blocked Value", blockedValue);

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
   <Box
    sx={{
     display: "flex",
     gap: 2,
     marginTop: 5,
     marginBottom: 5,
    }}
   >
    <DateRange
     disabledDates={blockedValue}
     editableDateInputs={true}
     onChange={(item) => {
      setInputValue([item.selection]);
      // console.log([item.selection]);
     }}
     moveRangeOnFirstSelection={false}
     ranges={inputValue}
    />
   </Box>

   <Box></Box>
  </Box>
 );
};

export default TestingNewComponents;

// Doing useEffect with forEach
//  useEffect(() => {
//   data.forEach((e) => {
//    let dateFrom = e.dateFrom;
//    let dateTo = e.dateTo;
//    return setBlockedValue(getDatesBetween(new Date(dateFrom), new Date(dateTo)));
//   });
//  }, []);

//  useEffect(() => {
//   setBlockedValue(
//    data.map((e) => {
//     let dateFrom = e.dateFrom;
//     let dateTo = e.dateTo;
//     return {
//      startDate: new Date(dateFrom),
//      endDate: new Date(dateTo),
//      disabled: true,
//     };
//    })
//   );
//  }, []);

// Doing useEffect with map
//  useEffect(() => {
//   data.map((e) => {
//    let dateFrom = e.dateFrom;
//    let dateTo = e.dateTo;
//    return setBlockedValue(getDatesBetween(new Date(dateFrom), new Date(dateTo)));
//   });
//  }, []);

// Doing useEffect with forLoop
//  useEffect(() => {
//   for (let i = 0; i < data.length; i++) {
//    let dateFrom = data[i].dateFrom;
//    let dateTo = data[i].dateTo;
//    return setBlockedValue(getDatesBetween(new Date(dateFrom), new Date(dateTo)));
//   }
//  }, []);
