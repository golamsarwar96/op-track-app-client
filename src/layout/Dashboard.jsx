import { Helmet } from "react-helmet-async";
import Sidebar from "../pages/dashboard/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="max-w-screen-2xl mx-auto font-sand flex gap-10 ">
      <Helmet>
        <title>OpTrack | Dashboard</title>
      </Helmet>
      <Sidebar></Sidebar>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
