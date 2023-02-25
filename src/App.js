import { CssBaseline } from "@mui/material";
import React from "react";
import { useRoutes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import AboutUs from "./pages/about_us/about_us/AboutUs";
import ContactUs from "./pages/about_us/contact_us/ContactUs";
import Login from "./pages/authentication/Login";
import SignUp from "./pages/authentication/SignUp";
import Blog from "./pages/blog/Blog";
import { Home } from "./pages/home";
const App = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "about_us",
      element: <AboutUs />,
    },
    {
      path: "contact",
      element: <ContactUs />,
    },
    {
      path: "blog",
      element: <Blog />,
    },
    {
      path: "sign-up",
      element: <SignUp />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "60px" }}>{routes}</div>
      <Footer />
      <CssBaseline />
    </>
  );
};

export default App;
