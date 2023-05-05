/**
 *
 * @param {values} values
 * @param {submitProps} submitProps
 * @returns
 */
export const formSubmit = (values, submitProps) => {
 console.log("Form data", values);

 // eslint-disable-next-line
 const { name, description, media, price, maxGuests, wifi, parking, breakfast, pets, address, city, zip, country, continent, lat, lng } = values;

 if (!media) {
  return null;
 }

 const body = {
  name: name,
  description: description,
  media: [...media],
  price: price,
  maxGuests: maxGuests,
  rating: 0,
  meta: {
   wifi: wifi,
   parking: parking,
   breakfast: breakfast,
   pets: pets,
  },
  location: {
   address: address,
   city: city,
   zip: zip,
   country: country,
   continent: continent,
   lat: lat,
   lng: lng,
  },
 };

 const Url = "https://api.noroff.dev/api/v1/holidaze/venues";
 const token = localStorage.getItem("ApiToken");
 fetch(Url, {
  headers: {
   "Content-Type": "application/json",
   Authorization: `Bearer ${token}`,
  },
  method: "POST",
  body: JSON.stringify(body),
 })
  .then((response) => {
   if (!response.ok) {
    throw new Error("Failed to submit form");
   }
   return response.json();
  })
  .then((data) => {
   // Handle successful response from API
   console.log(data);
   setAlertContent("Venue created");
   setAlert(true);
   setTimeout(() => {
    navigate(`/venue/${data.id}`);
   }, 2000);
  })
  .catch((error) => {
   // Handle error
   console.error(error);
  });

 console.log(body);

 setFormValues(values);
};
