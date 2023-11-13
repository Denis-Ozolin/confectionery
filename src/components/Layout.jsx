import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header, Footer, IsLoading } from "../components";

function Layout() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Suspense fallback={<IsLoading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
