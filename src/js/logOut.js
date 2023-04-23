export const logOutListener = () => {
 localStorage.clear("ApiToken");
 localStorage.clear("isLoggedIn");
 localStorage.clear("UserData");
 localStorage.clear("UserDataAuth");
};
