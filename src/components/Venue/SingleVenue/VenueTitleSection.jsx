import React from "react";

<<<<<<< HEAD:src/components/Venue/SingleVenue/VenueTitleSection.jsx
import { changeTimeFormat } from "../../../js/changeTimeFormat";

=======
>>>>>>> cc03e88a537014c3197beb85a117130ce57bbc70:src/components/Venue/VenueTitleSection.jsx
import { Box, Typography } from "@mui/material";

const VenueTitleSection = ({ name }) => {
 return (
  <>
   <Box marginBottom={1}>
    <Typography variant="h1" marginBottom={1}>
     {name}
    </Typography>
   </Box>
  </>
 );
};

export default VenueTitleSection;
