import React, { useState } from "react";

import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Paper, Select, Typography } from "@mui/material";
import { encodeSearchParams } from "./searchParams";

const ListingFilter = ({ setParams }) => {
 const [Guests, setGuests] = useState("");
 const [checkState, setCheckState] = useState("");

 const handleChange = (event) => {
  setGuests(event.target.value);
 };

 const checkStatus = (e) => {
  if (e.target.name !== "") {
   const value = e.target.value;

   if (e.target.checked) {
    setCheckState({
     ...checkState,
     [e.target.name]: e.target.checked,
    });
   } else {
    setCheckState({
     ...checkState,
     [e.target.name]: value,
    });
   }
  }
 };

 const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const guests = form.guests.value || "all";
  const wifi = form.wifi.value;
  const pets = form.pets.value;
  const parking = form.parking.value;
  const breakfast = form.breakfast.value;

  const filters = JSON.stringify({
   guests: guests,
   wifi: wifi,
   pets: pets,
   parking: parking,
   breakfast: breakfast,
  });

  const params = {
   filter: filters,
  };

  setParams(encodeSearchParams(params));
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
     onSubmit={handleSubmit}
    >
     <FormGroup
      sx={{
       width: 150,
      }}
     >
      <FormControl fullWidth>
       <InputLabel id="selectValue">Guests</InputLabel>
       <Select labelId="selectValue" id="demo-simple-select" value={Guests} label="Guests" name="guests" onChange={handleChange}>
        <MenuItem value={"0-5"}>0-5</MenuItem>
        <MenuItem value={"6-10"}>6-10</MenuItem>
        <MenuItem value={"11-15"}>11-15</MenuItem>
        <MenuItem value={"16+"}>16+</MenuItem>
       </Select>
      </FormControl>
     </FormGroup>
     <FormGroup>
      <Typography>Accommodations</Typography>
      <FormGroup row>
       <FormControlLabel control={<Checkbox checked={setCheckState["wifi"]} onChange={checkStatus} name="wifi" />} label="Wifi" />
       <FormControlLabel control={<Checkbox checked={setCheckState["pets"]} onChange={checkStatus} name="pets" />} label="Pets" />
       <FormControlLabel control={<Checkbox checked={setCheckState["parking"]} onChange={checkStatus} name="parking" />} label="Parking" />
       <FormControlLabel control={<Checkbox checked={setCheckState["breakfast"]} onChange={checkStatus} name="breakfast" />} label="Breakfast" />
      </FormGroup>
     </FormGroup>
     <FormGroup>
      <Button type="submit" variant="outlined" color="success">
       Filter venues
      </Button>
     </FormGroup>
    </Box>
   </Paper>
  </>
 );
};

export default ListingFilter;

/* <FormGroup
sx={{
 width: 150,
}}
>
<FormControl>
 <TextField variant="standard" label={"Search"} name="search" />
</FormControl>
</FormGroup> */
