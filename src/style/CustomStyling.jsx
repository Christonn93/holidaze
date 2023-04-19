import styled from "styled-components";

// import { StyleElements } from "../../layout/CustomStyling";

// Styled components

// Used in CardImage
export const ItemImage = styled.div`
 height: 200px;
 border-radius: 0;
 position: relative;
 margin-bottom: 15px;

 img {
  width: 100%;
  height: 200px;
  object-fit: cover;
 }
`;

export const Sale = styled.span`
 position: absolute;
 background-color: red;
 top: -0.5rem;
 left: -0.5rem;
 filter: drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.2));
 font-size: 18px;
 text-align: center;
 border-radius: 5px;
`;

export const Line = styled.hr`
 width: 100%;
 height: 5px;
 border-style: solid;
 border-color: hsla(0, 0%, 75%, 0.9);
 border-width: 1px 0 0 0;
`;

// Used in header and footer
export const CompanyLogo = styled.img`
 height: 150px;
`;

export const CompanyLogoFooter = styled.img`
 width: 100%;
 height: 100px;
 object-fit: contain;
`;

// Custom style

// Used in contact form
export const labelStyle = {
 //  "& .MuiFormLabel-root": {
 //   color: "secondary.main",
 //  },
 //  "& .MuiFormLabel-root.Mui-focused": {
 //     color: "secondary.main",
 //  },
};

// Used in SearchListItem
export const linkStyle = {
 textDecoration: "none",
 color: "black",
};

export const p = {
 margin: "0",
 padding: "0",
};

export const List = {
 display: "flex",
 justifyContent: "space-between",
};

// Used in footer components
export const StyledLinkWhite = {
 color: "white",
 textAlign: "start",
};

export const StyledLinkBlack = {
 color: "black",
 textAlign: "start",
};

export const Inline = {
 display: "flex",
 justifyContent: "center",
};
