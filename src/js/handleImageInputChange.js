const handleImageInputChange = ({ e, setMedia, media }) => {
 const files = e.target.files;
 const imageUrls = [];

 for (let i = 0; i < files.length; i++) {
  const file = files[i];
  const reader = new FileReader();

  reader.onload = (event) => {
   imageUrls.push(event.target.result);

   // Update the media state with the new image urls
   setMedia([...media, ...imageUrls]);
  };

  reader.readAsDataURL(file);
 }
};
