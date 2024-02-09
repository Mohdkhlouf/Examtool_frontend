import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavbarComponent from "../components/NavbarComponents/NavbarComponent";

export default function Rootlayout() {
  return (
    <div>
      <NavbarComponent />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}
