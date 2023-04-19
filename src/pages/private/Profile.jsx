import React, { useEffect } from "react";
import Dashboard from "../../components/Dashboard/Dashboard";

const Profile = () => {
 const localUserData = localStorage.getItem("UserData");
 const userData = JSON.parse(localUserData);
 const loggedInAs = userData.venueManager;
 useEffect(() => {});

 return <>{!loggedInAs ? <Dashboard status={"customer"} /> : <Dashboard status={"manager"} />}</>;
};

export default Profile;
