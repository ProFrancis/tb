import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";

function Template() {
  return (
    <>
      <Header />
      <section>
        <Outlet />
      </section>
      <Footer />
    </>
  );
}
export default Template;
