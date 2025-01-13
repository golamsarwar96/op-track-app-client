import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-screen-2xl mx-auto font-sand">
      <section>
        <Navbar></Navbar>
      </section>
      <section className="min-h-[calc(100vh-150px)]">
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
