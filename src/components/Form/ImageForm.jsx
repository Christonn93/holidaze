import React, { useState } from "react";

import { Button, FormGroup, TextField } from "@mui/material";

const ImageForm = ({ addImage }) => {
 const [value, setValue] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();
  if (!value) return;
  addImage(value);
  setValue("");
 };

 return (
  <form onSubmit={handleSubmit}>
   <FormGroup>
    <TextField name="media" variant="outlined" fullWidth onChange={(e) => setValue(e.target.value)} />
   </FormGroup>
   <Button variant="primary" type="submit">
    Add image
   </Button>
  </form>
 );
};

export default ImageForm;
