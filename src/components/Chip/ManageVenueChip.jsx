import { useEffect, useState } from "react";
import Chip from "@mui/material/Chip";
import checkAvailability from "./checkAvailability";

function ManageVenueChip({ venue }) {
 const [state, setState] = useState(null);

 useEffect(() => {
  const isAvailable = checkAvailability([venue]);
  setState(isAvailable);
 }, [venue]);

 return (
  <div>
   <Chip label={state ? "Available" : "Rented out"} color={state ? "success" : "error"} variant="outlined" />
  </div>
 );
}

export default ManageVenueChip;
