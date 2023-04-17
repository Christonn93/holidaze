// Importing React
import React, { useState } from "react";

// Importing MUI
import { Menu, MenuItem, Stack } from "@mui/material";

// Importing components
import LoginDialog from "../../Dialog/LoginDialog";
import RegisterDialog from "../../Dialog/RegisterDialog";
import UserAvatar from "../../User/UserAvatar/UserAvatar";
import Link from "../../Link/Link";

const Navigation = () => {
 // Setting states
 const [login, setLogin] = useState(false);
 const [register, setRegister] = useState(false);
 const [anchorEl, setAnchorEl] = useState(null);

 const isLoggedIn = false;

 const handleMenu = (event) => {
  setAnchorEl(event.currentTarget);
 };

 const handleClose = () => {
  setAnchorEl(null);
 };

 return (
  <>
   <div>
    <UserAvatar action={handleMenu} src="" alt="user avatar" size="56" />
    <Menu id="dropDown-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose} sx={{ width: "auto" }}>
     <Stack direction="row" spacing={1} padding={1}>
      {isLoggedIn === true ? (
       <>
        <Link route="/profile" children={<MenuItem>Dashboard</MenuItem>} />
        <MenuItem
         onClick={() => {
          alert("logging out");
         }}
        >
         Log out
        </MenuItem>
       </>
      ) : (
       <>
        <LoginDialog state={login} setState={setLogin} />
        <RegisterDialog state={register} setState={setRegister} />
       </>
      )}
     </Stack>
    </Menu>
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
