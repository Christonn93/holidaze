// Importing React
import React, { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

// Importing MUI
import { Box, ClickAwayListener, Grow, IconButton, MenuItem, MenuList, Paper, Popper, Typography } from "@mui/material";

// Importing MUI Icons
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";

// Importing Components
import SearchBar from "../SearchBar/SearchBar";

const ListingFilter = ({ text, setParams, params }) => {
 const [open, setOpen] = useState(false);
 const [filterOpen, setFilterOpen] = useState(false);
 const [searchParams, setSearchParams] = useSearchParams();
 const anchorRef = useRef(null);

 const handleClick = (option, direction) => {
  const filters = { [option]: direction };

  if (option === "price") setParams(filters, { replace: true });
  if (option === "maxGuests") setParams(filters, { replace: true });
  if (option === "rating") setParams(filters, { replace: true });

  setFilterOpen(true);
  setOpen(false);
 };

 const handleToggle = () => {
  setOpen((prevOpen) => !prevOpen);
 };

 const handleClose = () => {
  setOpen(false);
 };

 function handleListKeyDown(event) {
  if (event.key === "Tab") {
   event.preventDefault();
   setOpen(false);
  } else if (event.key === "Escape") {
   setOpen(false);
  }
 }

 // return focus to the button when we transitioned from !open -> open
 const prevOpen = React.useRef(open);
 React.useEffect(() => {
  if (prevOpen.current === true && open === false) {
   anchorRef.current.focus();
  }

  prevOpen.current = open;
 }, [open]);

 const clearFilter = () => {
  setFilterOpen(false);
  const keys = params.keys(),
   values = params.values(),
   entries = params.entries();

  for (const key of keys) {
   console.log(key);
   removeQueryParams(key);
  }

  for (const value of values) {
   console.log(value);
  }

  for (const entry of entries) {
   console.log(`${entry[0]}: ${entry[1]}`);
  }
 };

 // eslint-disable-next-line
 const removeQueryParams = (key) => {
  const param = searchParams.get(key);

  if (param) {
   // 👇️ delete each query param
   searchParams.delete(key);

   // 👇️ update state after
   setSearchParams(searchParams);
  }
 };

 return (
  <>
   <Box
    sx={{
     display: "flex",
     justifyContent: "space-between",
     flexWrap: "wrap",
    }}
   >
    <Typography variant="h3">{text}</Typography>
    <Box
     sx={{
      display: "flex",
      justifyContent: "flex-end",
     }}
    >
     <SearchBar />
     {!filterOpen ? (
      <IconButton ref={anchorRef} id="composition-button" aria-controls={open ? "composition-menu" : undefined} aria-expanded={open ? "true" : undefined} aria-haspopup="true" onClick={handleToggle}>
       <FilterAltIcon />
      </IconButton>
     ) : (
      <IconButton ref={anchorRef} id="composition-button" aria-controls={open ? "composition-menu" : undefined} aria-expanded={open ? "true" : undefined} aria-haspopup="true" onClick={clearFilter}>
       <FilterAltOffIcon />
      </IconButton>
     )}

     <Popper open={open} anchorEl={anchorRef.current} role={undefined} placement="bottom-end" transition disablePortal className="filterBox">
      {({ TransitionProps, placement }) => (
       <Grow
        {...TransitionProps}
        style={{
         transformOrigin: placement === "bottom-start" ? "left top" : "left bottom",
        }}
       >
        <Paper>
         <ClickAwayListener onClickAway={handleClose}>
          <MenuList autoFocusItem={open} id="composition-menu" aria-labelledby="composition-button" onKeyDown={handleListKeyDown}>
           <MenuItem
            onClick={() => {
             handleClick("price", "asc");
            }}
           >
            Price Low-High
           </MenuItem>
           <MenuItem
            onClick={() => {
             handleClick("price", "desc");
            }}
           >
            Price High-Low
           </MenuItem>
           <MenuItem
            onClick={() => {
             handleClick("rating", "asc");
            }}
           >
            Rating Low-High
           </MenuItem>
           <MenuItem
            onClick={() => {
             handleClick("rating", "desc");
            }}
           >
            Rating High-Low
           </MenuItem>
           <MenuItem
            onClick={() => {
             handleClick("maxGuests", "asc");
            }}
           >
            Guests Low-High
           </MenuItem>
           <MenuItem
            onClick={() => {
             handleClick("maxGuests", "desc");
            }}
           >
            Guests High-Low
           </MenuItem>
          </MenuList>
         </ClickAwayListener>
        </Paper>
       </Grow>
      )}
     </Popper>
    </Box>
   </Box>
  </>
 );
};

export default ListingFilter;
