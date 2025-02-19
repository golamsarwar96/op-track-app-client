import React from "react";
import { NavLink } from "react-router-dom";

const EmployeeMenu = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-darkMode px-5 py-2 md:rounded-3xl w-full text-white"
            : "text-white"
        }
        to="work-sheet"
      >
        Work Sheet
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-darkMode px-5 py-2 md:rounded-3xl w-full text-white"
            : "text-white"
        }
        to="payment-history"
      >
        Payment History
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
        to="employeeOverview"
      >
        Overview
      </NavLink>
    </div>
  );
};

export default EmployeeMenu;
