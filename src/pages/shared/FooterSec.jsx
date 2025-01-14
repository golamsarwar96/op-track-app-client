import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import logoIcon from "../../assets/images/logoIcon.png";
const FooterSec = () => {
  return (
    <Footer container className="bg-primaryColor mt-20">
      <div className="w-full ">
        <div className="flex flex-col items-center justify-center gap-3 mb-10">
          <div className="flex justify-center items-center gap-1">
            <h2 className="self-center whitespace-nowrap md:text-3xl text-2xl text-white font-extrabold dark:text-white">
              Op<span className="text-darkMode">Track</span>
            </h2>
            <img className="md:w-10 md:h-10 w-9 h-9" src={logoIcon} />
          </div>
          <div className="mt-4 flex sm:mt-0 sm:justify-center gap-5">
            <Footer.Icon href="https://www.facebook.com" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com" icon={BsInstagram} />
            <Footer.Icon href="https://www.twitter.com" icon={BsTwitter} />
            <Footer.Icon href="https://www.github.com" icon={BsGithub} />
            <Footer.Icon href="https://www.dribble.com" icon={BsDribbble} />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 text-center">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <p className="text-highlightColor">Overview</p>
                <p className="text-highlightColor">Vision</p>
                <p className="text-highlightColor">Overview</p>
                <p className="text-highlightColor">History</p>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <p className="text-highlightColor">Github</p>
                <p className="text-highlightColor">Discord</p>
                <p className="text-highlightColor">LinkedIn</p>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <p className="text-highlightColor" href="#">
                  Privacy Policy
                </p>
                <p className="text-highlightColor" href="#">
                  Terms &amp; Conditions
                </p>
              </Footer.LinkGroup>
            </div>
          </div>{" "}
        </div>
        <Footer.Divider />
        <div className="w-full text-center">
          <Footer.Copyright
            href="#"
            by="OpTrack, All Rights Reserved™"
            year={2025}
          />
        </div>
      </div>
    </Footer>
  );
};

export default FooterSec;
