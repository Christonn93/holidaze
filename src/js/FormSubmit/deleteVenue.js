/**
 *
 * @param {id} venueId For deleting venue
 */
export const deleteVenue = (id, alertContent, alert, navigating) => {
 const Url = `https://api.noroff.dev/api/v1/holidaze/venues/${id}`;
 const token = localStorage.getItem("ApiToken");
 fetch(Url, {
  headers: {
   "Content-Type": "application/json",
   Authorization: `Bearer ${token}`,
  },
  method: "DELETE",
 })
  .then((response) => {
   if (!response.ok) {
    throw new Error("Failed to submit form");
   }
   alertContent("Venue deleted");
   alert(true);
   setTimeout(() => {
    navigating("/profile");
   }, 2000);
   return response.json();
  })
  .then((data) => {
   // Handle successful response from API
   console.log(data);
  })
  .catch((error) => {
   // Handle error
   console.error(error);
  });
};
