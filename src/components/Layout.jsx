import React from "react";
import { Outlet } from "react-router-dom";

import { Header, Footer } from "../components";

function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
