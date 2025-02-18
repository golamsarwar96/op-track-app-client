import { Link } from "react-router-dom";
import aboutUs from "../assets/images/aboutUsPng.png";
import { FaHome } from "react-icons/fa";
const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Link to="/">
        <button className="px-8 py-3 text-2xl bg-primaryColor font-bold rounded-full text-white hover:bg-darkMode my-4">
          <FaHome></FaHome>
        </button>
      </Link>
      <p className="text-primaryColor bg-darkMode px-8 py-4 font-sand font-semibold lg:w-[50%] hover:bg-primaryColor hover:text-darkMode mx-auto text-center">
        OpTrack is a comprehensive web application built to simplify and
        optimize employee management for organizations. Our platform offers
        role-based functionalities for Admins, HRs, and Employees, ensuring a
        seamless experience tailored to their specific responsibilities. With
        features such as task submissions, salary management, secure payment
        processing via Stripe, and performance tracking, OpTrack enhances
        operational efficiency and transparency. We are committed to providing a
        streamlined solution that empowers businesses to manage their workforce
        with ease and precision.
      </p>
      <div>
        <img className="w-[500px] h-[500px]" src={aboutUs} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
