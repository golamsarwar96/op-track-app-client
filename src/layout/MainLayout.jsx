import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import FooterSec from "../pages/shared/FooterSec";

const MainLayout = () => {
  return (
    <div className="max-w-screen-2xl mx-auto font-sand bg-bgColor">
      <section>
        <Navbar></Navbar>
      </section>
      <section className="min-h-[calc(100vh-150px)]">
        <Outlet></Outlet>
      </section>
      <FooterSec></FooterSec>
    </div>
  );
};

export default MainLayout;
