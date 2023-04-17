// Importing React
import React, { useState } from "react";

// Importing MUI
import { Menu, MenuItem, Stack } from "@mui/material";

// Importing components
import UserAvatar from "../../User/UserAvatar/UserAvatar";
import Link from "../../Link/Link";
import SnackbarAlert from "../../SnackBar/SnackbarAlert";

const Navigation = ({ status }) => {
 // Setting states
 const [open, setOpen] = useState(false);
 const [anchorEl, setAnchorEl] = useState(null);

 const handleMenu = (event) => {
  setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
  setAnchorEl(null);
 };

 const handleSnackBar = () => {
  setOpen(true);
 };

 const handleLogOut = () => {
  handleSnackBar();
  localStorage.removeItem("UserData");
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("ApiToken");
 };

 return (
  <>
   <div>
    <UserAvatar action={handleMenu} src="" alt="user avatar" size="56" />
    <Menu id="dropDown-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} sx={{ width: "auto" }}>
     <Stack direction="row" spacing={1} padding={1}>
      {status ? (
       <>
        <Link route="/login" children={<MenuItem>Log in</MenuItem>} color="primary" />
        <Link route="/register" children={<MenuItem>Register user</MenuItem>} color="secondary" />
       </>
      ) : (
       <>
        <Link route="/profile" children={<MenuItem>Dashboard</MenuItem>} />
        <Link route="/" children={<MenuItem onClick={handleLogOut}>Log out</MenuItem>} />
       </>
      )}
     </Stack>
    </Menu>
    <SnackbarAlert
     open={open}
     setOpen={setOpen}
     children={
      <>
       <p>Logged out</p>
      </>
     }
    />
   </div>
  </>
 );
};

export default Navigation;

/*
 const [isLoggedIn, setLoginStatus] = useState(() => {
  const localData = localStorage.getItem("UserData");
  return localData ? JSON.parse(localData) : [];
 });

 useEffect(() => {
  localStorage.setItem("UserData", JSON.stringify(isLoggedIn));
 }, [isLoggedIn]);

*/
