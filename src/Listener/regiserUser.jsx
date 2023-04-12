export const formSubmit = async (e) => {
 e.preventDefault();

 const resp = await registerUser({ username, email, avatar, manager, password });

 if ("accessToken" in resp) {
  localStorage.setItem("ApiToken", resp["accessToken"]);
  localStorage.setItem("UserData", JSON.stringify(resp));
  window.location.href = "pages/profile";
 }
};
