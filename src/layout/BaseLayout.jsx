// Importing React
import React, { Outlet } from "react-router-dom";
import styled from "styled-components";

// Importing MUI
import { Container } from "@mui/material";

// Importing components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

// Styling component
const PageLayout = styled.div`
 display: grid;
 grid-template-rows: auto 1fr auto;
 height: 100vh;
`;

/**
 *
 * @returns main layout for the site.
 */
const Layout = () => {
 return (
  <PageLayout>
   <Header />
   <Container>
    <Outlet />
   </Container>
   <Footer />
  </PageLayout>
 );
};

export default Layout;
