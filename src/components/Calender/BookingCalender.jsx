// Importing React
import React, { useEffect, useState } from "react";

// Importing Calender
import { DateRange } from "react-date-range";

// Importing functions
import { getDatesBetween } from "../../js/getDatesBetween";

const BookingCalender = ({ data }) => {
 // useState variables
 const [blockedValue, setBlockedValue] = useState([]);
 const [inputValue, setInputValue] = useState([
  {
   startDate: new Date(),
   endDate: new Date(),
   key: "selection",
  },
 ]);

 useEffect(() => {
  const allBlockedDates = data.flatMap((e) => getDatesBetween(new Date(e.dateFrom), new Date(e.dateTo)));
  setBlockedValue(allBlockedDates);
 }, [data]);

 //  console.clear();
 //  console.log("Blocked Value", blockedValue);

 return (
  <DateRange
   disabledDates={blockedValue}
   editableDateInputs={true}
   onChange={(item) => {
    setInputValue([item.selection]);
   }}
   moveRangeOnFirstSelection={false}
   ranges={inputValue}
  />
 );
};

export default BookingCalender;
