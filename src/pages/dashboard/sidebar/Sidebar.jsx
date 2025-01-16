import { Link, NavLink } from "react-router-dom";
import logoIcon from "../../../assets/images/logoIcon.png";
import EmployeeMenu from "../../../components/Menu/EmployeeMenu";
import HrMenu from "../../../components/Menu/HrMenu";
import AdminMenu from "../../../components/Menu/AdminMenu";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-primaryColor">
      <Link to="/" className="flex justify-center items-center gap-1 p-5">
        <h2 className="self-center whitespace-nowrap md:text-3xl text-2xl text-white font-extrabold dark:text-white">
          Op<span className="text-darkMode">Track</span>
        </h2>
        <img className="md:w-10 md:h-10 w-9 h-9" src={logoIcon} />
      </Link>
      <div className="flex flex-col items-center justify-center">
        <EmployeeMenu></EmployeeMenu>
        <HrMenu></HrMenu>
        <AdminMenu></AdminMenu>
      </div>
    </div>
  );
};

export default Sidebar;
