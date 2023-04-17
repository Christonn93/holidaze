import React from "react";

const Profile = ({user}) => {
 const userData = localStorage.getItem("UserData");
 const parsedUserData = JSON.parse(userData);

 const name = parsedUserData.name;
 const status = parsedUserData.venueManager;
 let role = "Venue Manager";

 if (!status) {
  role = "customer";
 }

 return (
  <>
   <h1>Welcome {name}</h1>
   <p>Role: {role}</p>
  </>
 );
};

export default Profile;
