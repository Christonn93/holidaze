import React, { useState } from "react";

import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Paper, Select, Typography } from "@mui/material";
import MainButton from "../Button/MainButton";

const ListingFilter = () => {
 const [Guests, setGuests] = useState("");

 const handleChange = (event) => {
  setGuests(event.target.value);
 };

 return (
  <>
   <Paper
    sx={{
     padding: 2,
    }}
   >
    <Typography variant="h6" marginBottom={1}>
     Find your next venue
    </Typography>
    <Box
     component="form"
     sx={{
      display: "flex",
      gap: 3,
      justifyContent: "space-between",
      alignItems: "center",
      alignContent: "flex-start",
      flexWrap: "wrap",
     }}
    >
     <FormGroup
      sx={{
       width: 150,
      }}
     >
      <FormControl fullWidth>
       <InputLabel id="selectValue">Guests</InputLabel>
       <Select labelId="selectValue" id="demo-simple-select" value={Guests} label="Guests" onChange={handleChange}>
        <MenuItem value={1}>0-5</MenuItem>
        <MenuItem value={2}>6-10</MenuItem>
        <MenuItem value={3}>11-15</MenuItem>
        <MenuItem value={4}>16+</MenuItem>
       </Select>
      </FormControl>
     </FormGroup>
     <FormGroup>
      <Typography>Accommodations</Typography>
      <FormGroup row>
       <FormControlLabel control={<Checkbox />} label="Wifi" />
       <FormControlLabel control={<Checkbox />} label="Pets" />
       <FormControlLabel control={<Checkbox />} label="Parking" />
       <FormControlLabel control={<Checkbox />} label="Breakfast" />
      </FormGroup>
     </FormGroup>
     <FormGroup>
      <MainButton color={"primary"} variant={"contained"} buttonAction={null} text={"Filter Venues"} id={"filterForm"} />
     </FormGroup>
    </Box>
   </Paper>
  </>
 );
};

export default ListingFilter;
