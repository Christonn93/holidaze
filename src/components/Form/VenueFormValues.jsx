// const data = {};

// export const formEditValues = {
//  name: data.name,
//  description: data.description,
//  media: data.media,
//  price: data.price,
//  maxGuests: data.maxGuests,
//  wifi: data.meta.wifi,
//  parking: data.meta.parking,
//  breakfast: data.meta.breakfast,
//  pets: data.meta.pets,
//  address: data.location.address,
//  city: data.location.city,
//  zip: data.location.zip,
//  country: data.location.country,
//  continent: data.location.continent,
//  lat: data.location.lat,
//  lng: data.location.lng,
// };

export const initialValues = {
 name: "", // Required
 description: "", // Required
 media: [""], // Optional
 price: null, // Required
 maxGuests: null, // Required
 wifi: false, // Optional (default: false)
 parking: false, // Optional (default: false)
 breakfast: false, // Optional (default: false)
 pets: false, // Optional (default: false)
 address: "", // Optional (default: "Unknown")
 city: "", // Optional (default: "Unknown")
 zip: "", // Optional (default: "Unknown")
 country: "", // Optional (default: "Unknown")
 continent: "", // Optional (default: "Unknown")
 lat: 0, // Optional (default: 0)
 lng: 0, // Optional (default: 0)
};
