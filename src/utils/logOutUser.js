export const logOut = () => {
    localStorage.setItem("UserData", []);
    localStorage.setItem("isLoggedIn", false);
    localStorage.setItem("ApiToken", []);
}