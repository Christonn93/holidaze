// Importing React
import React, { useState } from "react";

// Importing MUI
import { Paper, Dialog, DialogContent, DialogTitle, Button, List, ListItem, Typography, IconButton, useTheme, useMediaQuery } from "@mui/material";

// Importing MUI Icons
import CloseIcon from "@mui/icons-material/Close";

// Importing function
import { changeTimeFormat } from "../../js/changeTimeFormat";

const ViewBookings = ({ venue }) => {
 const [open, setOpen] = useState(false);
 const [data] = useState(venue);
 const theme = useTheme();
 const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

 // Const for use in component
 const dateToday = new Date().toISOString();

 const handleClickOpen = () => {
  setOpen(true);
 };

 const handleClose = () => {
  setOpen(false);
 };

 const DialogHeader = () => {
  return (
   <>
    <DialogTitle>Bookings</DialogTitle>
    <IconButton
     onClick={handleClose}
     sx={{
      position: "absolute",
      right: 8,
      top: 8,
     }}
     color="error"
    >
     <CloseIcon />
    </IconButton>
   </>
  );
 };

 return (
  <>
   <Button onClick={handleClickOpen}>View bookings</Button>
   <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
    <DialogHeader />
    <DialogContent>
     <List>
      {data.length === 0 ? (
       <Paper
        elevation={3}
        sx={{
         padding: 1,
         display: "flex",
         flexDirection: "column",
         gap: 1,
        }}
       >
        <Typography variant="h5">There is no bookings made</Typography>
       </Paper>
      ) : (
       <>
        {data.map((e) => {
         const dateFrom = e.dateFrom;

         return (
          <>
           {dateFrom > dateToday ? (
            <ListItem alignItems="flex-start" key={e.id}>
             <Paper
              elevation={3}
              sx={{
               padding: 1,
               display: "flex",
               flexDirection: "column",
               gap: 1,
              }}
             >
              <Typography variant="body1">Guests: {e.guests}</Typography>
              <Typography variant="body1">Check in: {changeTimeFormat(e.dateFrom)}</Typography>
              <Typography variant="body1">Check out: {changeTimeFormat(e.dateTo)}</Typography>
             </Paper>
            </ListItem>
           ) : (
            <></>
           )}
          </>
         );
        })}
       </>
      )}
     </List>
    </DialogContent>
   </Dialog>
  </>
 );
};

export default ViewBookings;
