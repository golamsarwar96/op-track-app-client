import { BiWindows } from "react-icons/bi";
import { BsGooglePlay } from "react-icons/bs";
import { FaWindows } from "react-icons/fa";
import download from "../../assets/images/Download-cuate.png";
const AppSection = () => {
  return (
    <div className="flex gap-5 px-28 justify-center items-center">
      <div className="flex-1">
        <img className="h-[500px] w-[600px] object-contain" src={download} />
      </div>
      <div className="flex-1">
        <h1 className="text-5xl font-bold mb-2">Download Our App</h1>
        <p className="text-textSecColor font-bold">
          Operate your system smoothly and with ease with our mobile and desktop
          app.
        </p>
        <div className="flex items-center gap-10 text-xl mt-10">
          <button className="flex items-center gap-2 px-7 py-2 rounded-full hover:bg-darkMode hover:text-primaryColor bg-primaryColor text-darkMode">
            <BsGooglePlay className="text-white" /> Download On Mobile
          </button>
          <button className="flex items-center gap-2 px-7 py-2 rounded-full hover:bg-darkMode hover:text-primaryColor bg-primaryColor text-darkMode">
            <FaWindows className="text-white" /> Download On Desktop
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
