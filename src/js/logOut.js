const LogOutUser = () => {
 localStorage.clear("ApiToken");
 localStorage.clear("isLoggedIn");
 localStorage.clear("UserData");
 localStorage.clear("UserDataAuth");
 window.location.replace("/");
};

export default LogOutUser;
