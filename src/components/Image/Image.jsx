import React from "react";

import "./Image.css"

const Image = ({ src, alt, className }) => {
 return <img src={src} alt={alt} loading="lazy" className={className ? className : "defaultImage"} />;
};

export default Image;
