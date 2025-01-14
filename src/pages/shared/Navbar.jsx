import useAuth from "../../hooks/useAuth";
import { Dropdown, Navbar as Nav } from "flowbite-react";
import logoIcon from "../../assets/images/logoIcon.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const toggleDropdown = () => {
    setVisible(!visible);
    console.log(visible);
  };
  const { userGreet } = useAuth();
  const user = "sarwar";
  return (
    <div className="">
      <Nav fluid className="bg-primaryColor">
        <div className="flex justify-center items-center gap-1 lg:ml-7 ml-3">
          <h2 className="self-center whitespace-nowrap md:text-3xl text-2xl text-white font-extrabold dark:text-white">
            Op<span className="text-darkMode">Track</span>
          </h2>
          <img className="md:w-10 md:h-10 w-9 h-9" src={logoIcon} />
        </div>
        <div className="flex md:order-2 lg:mr-7 mr-2 gap-2 font-semibold items-center justify-center">
          {user ? (
            <div className="relative inline-block">
              <img
                src={logoIcon}
                onClick={toggleDropdown}
                className="w-10 h-10 cursor-pointer rounded-full"
                alt=""
              />
              {visible && (
                <div className="absolute -right-5 top-[42px] bg-darkMode mt-2 w-20 px-4 py-2 text-center ">
                  <button className="block">Logout</button>
                </div>
              )}
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button className="bg-darkMode text-white hover:bg-white hover:text-primaryColor md:px-4 md:py-2 px-2 py-1 rounded-3xl">
                  Login
                </button>
              </Link>
              <Link>
                <button className="bg-darkMode text-white hover:bg-white hover:text-primaryColor md:px-4 md:py-2 px-2 py-1 rounded-3xl">
                  Sign Up
                </button>
              </Link>
            </div>
          )}
          <Nav.Toggle />
        </div>
        <Nav.Collapse className="">
          <div className="lg:space-x-8 md:space-x-5 space-y-3 md:block flex flex-col md:flex-row items-start justify-center font-semibold lg:mr-28 md:mr-20">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-darkMode px-5 py-2 md:rounded-3xl w-full text-white"
                  : "text-white"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-darkMode px-5 py-2 md:rounded-3xl w-full text-white"
                  : "text-white"
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-darkMode px-5 py-2 md:rounded-3xl w-full text-white"
                  : "text-white"
              }
              to="contact"
            >
              Contact Us
            </NavLink>
          </div>
        </Nav.Collapse>
      </Nav>
    </div>
  );
};

export default Navbar;
