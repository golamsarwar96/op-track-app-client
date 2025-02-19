import { NavLink } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 mt-5">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-darkMode px-5 py-2 md:rounded-3xl w-full text-white"
            : "text-white"
        }
        to="all-employee-list"
      >
        All Employee List
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-darkMode px-5 py-2 md:rounded-3xl w-full text-center text-white"
            : "text-white"
        }
        to="payroll"
      >
        Payroll
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-darkMode px-5 py-2 md:rounded-3xl w-full text-center text-white"
            : "text-white"
        }
        to="profile"
      >
        Profile
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-darkMode px-5 py-2 md:rounded-3xl w-full text-center text-white"
            : "text-white"
        }
        to="overview"
      >
        Overview
      </NavLink>
    </div>
  );
};

export default AdminMenu;
