// Importing React
import React, { useState, useRef } from "react";

import { Box, IconButton, Tooltip, MenuList, Stack, Grow, Paper, Popper, ClickAwayListener } from "@mui/material";

/**
 *
 * @param {name} name
 * @param {menuContent} menuContent
 * @returns
 */
function BookingDetailsMenu({ icon, ToolTipTitle, menuContent }) {
 const [open, setOpen] = useState(false);
 const anchorRef = useRef(null);

 const handleToggle = () => {
  setOpen((prevOpen) => !prevOpen);
 };

 const handleClose = (event) => {
  if (anchorRef.current && anchorRef.current.contains(event.target)) {
   return;
  }

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
 const prevOpen = useRef(open);
 React.useEffect(() => {
  if (prevOpen.current === true && open === false) {
   anchorRef.current.focus();
  }

  prevOpen.current = open;
 }, [open]);

 return (
  <Stack direction="row" spacing={2}>
   <Box>
    <Tooltip title={ToolTipTitle}>
     <IconButton
      ref={anchorRef}
      variant="outlined"
      color="primary"
      aria-controls={open ? "composition-menu" : undefined}
      aria-expanded={open ? "true" : undefined}
      aria-haspopup="true"
      onClick={handleToggle}
     >
      {icon}
     </IconButton>
    </Tooltip>
    <Popper open={open} anchorEl={anchorRef.current} role={undefined} placement="bottom-start" transition disablePortal>
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
          {menuContent}
         </MenuList>
        </ClickAwayListener>
       </Paper>
      </Grow>
     )}
    </Popper>
   </Box>
  </Stack>
 );
}

export default BookingDetailsMenu;
