import { FaHome } from "react-icons/fa";
import jobBanner from "../assets/images/jobBanner.png";
import { Link } from "react-router-dom";
const Career = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center gap-5 bg-bgColor h-screen font-sand">
      <div className="space-y-4">
        <h1 className="text-5xl font-bold w-[70%] mx-auto">
          <span className="bg-primaryColor text-darkMode px-2">Join</span> Our
          Team & Build Your Future!
        </h1>
        <p className="w-[70%] mx-auto font-semibold">
          Empowering Talent, Driving Innovation –{" "}
          <span className="bg-primaryColor text-darkMode p-2">
            Join Us and Grow Together!
          </span>
        </p>
        <div className="flex items-center justify-start gap-2">
          <button className="px-8 py-3 bg-darkMode font-bold rounded-full text-white hover:bg-primaryColor ml-[120px]">
            Apply Now!
          </button>
          <Link to="/">
            <button className="px-8 py-3 text-2xl bg-darkMode font-bold rounded-full text-white hover:bg-primaryColor">
              <FaHome></FaHome>
            </button>
          </Link>
        </div>
      </div>
      <div className="flex-1">
        <img src={jobBanner} className="w-[500px] h-[500px]" alt="" />
      </div>
    </div>
  );
};

export default Career;
