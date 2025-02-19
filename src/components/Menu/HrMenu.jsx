import { NavLink } from "react-router-dom";

const HrMenu = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-5">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-darkMode px-5 py-2 md:rounded-3xl w-full text-white"
            : "text-white"
        }
        to="employee-list"
      >
        Employee-List
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "bg-darkMode px-5 py-2 md:rounded-3xl w-full text-white"
            : "text-white"
        }
        to="progress"
      >
        Progress
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
    </div>
  );
};

export default HrMenu;
