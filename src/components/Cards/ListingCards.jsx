// Importing React
import React from "react";
import { useNavigate } from "react-router-dom";

// Importing MUI
import { Paper, Typography, Box, IconButton, Tooltip, useTheme, useMediaQuery, Stack } from "@mui/material";

/**
 *
 * @param {name} name
 * @param {info} info
 * @param {infoChildren} infoChildren
 * @param {buttonChildren} buttonChildren
 * @param {buttonAction} buttonAction
 * @param {ToolTipTitle} ToolTipTitle
 * @returns
 */
const ListingCards = ({ name, id, infoChildren, buttonChildren, buttonAction, ToolTipTitle }) => {
 const device = useTheme();
 const isMobile = useMediaQuery(device.breakpoints.down("sm"));
 const navigate = useNavigate();

 const displayVenue = () => {
  navigate(`/venue/${id}`);
 };

 const mobileLayout = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: 2,
 };

 const desktopLayout = {
  display: "grid",
  gridTemplateColumns: "1fr auto 1fr",
  alignItems: "center",
  padding: 2,
 };

 //

 return (
  <>
   <Paper key={name}>
    <Stack direction={"row"} spacing={2} sx={isMobile ? mobileLayout : desktopLayout}>
     <Box>
      <Typography
       variant="h5"
       onClick={displayVenue}
       sx={{
        "&:hover": {
         cursor: "pointer",
         textShadow: "1px 1px 2px white",
        },
       }}
      >
       {name}
      </Typography>
     </Box>
     <Box>{infoChildren}</Box>
     <Box
      sx={{
       display: "flex",
       justifyContent: "end",
      }}
     >
      <Tooltip title={ToolTipTitle}>
       <IconButton variant="outlined" color="primary" onClick={buttonAction}>
        {buttonChildren}
       </IconButton>
      </Tooltip>
     </Box>
    </Stack>
   </Paper>
  </>
 );
};

export default ListingCards;
