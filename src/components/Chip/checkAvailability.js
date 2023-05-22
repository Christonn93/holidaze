const checkAvailability = (items) => {
 const currentDate = new Date();

 for (const item of items) {
  for (const booking of item.bookings) {
   const fromDate = new Date(booking.dateFrom);
   const toDate = new Date(booking.dateTo);

   if (currentDate >= fromDate && currentDate <= toDate) {
    return false; // Not booked on current date
   }
  }
 }

 return true; // Booked on current date
};

export default checkAvailability;
