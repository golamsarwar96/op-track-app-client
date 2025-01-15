import Lottie from "lottie-react";
import bgContact from "../../assets/images/bgContact.png";
import contactLottie from "../../assets/lottie/contactLottie.json";
import lottieContact from "../../assets/lottie/LottieContact.json";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Label, Textarea } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { BiHome, BiSend } from "react-icons/bi";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const publicKey = "_S7cdpqMFl3Bo06Rc";
    const serviceId = "service_cvdo44g";
    const templateId = "template_8qj7ph9";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Golam Sarwar",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((res) => {
        console.log(res);
        setName("");
        setEmail("");
        setMessage("");
        toast.success("Message Sent Successfully");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="font-sand bg-gray-100 min-h-screen max-w-screen-2xl mx-auto">
      <Helmet>
        <title>OpTrack | Contact Us</title>
      </Helmet>
      <div className="relative">
        <img src={bgContact} className="h-[20vh] w-full object-cover" alt="" />
        <h1 className="absolute top-0 right-0 lg:mt-10 md:mt-7 md:text-5xl md:mr-16 mr-7 mt-8 lg:text-6xl text-3xl text-white font-semibold">
          Get in Touch with Us
        </h1>
        {/* <Link to="/">
          <BiHome className="ml-8 mt-3 text-3xl bg-primaryColor text-white rounded-full p-1"></BiHome>
        </Link> */}
        <Lottie
          animationData={contactLottie}
          loop={true}
          autoPlay={true}
          className="absolute lg:-mt-6 lg:left-[690px] top-0 -mt-1 mr-4 w-28 lg:w-48 md:w-32 md:left-[120px] md:-mt-3"
        ></Lottie>
      </div>
      <div className="flex justify-center items-center gap-10 lg:px-32 px-10 flex-col lg:flex-row">
        <div>
          <Lottie
            animationData={lottieContact}
            autoPlay={true}
            loop={true}
            className="md:w-[600px] w-[400px]"
          ></Lottie>
        </div>
        <div className="w-full">
          {/* <div className="flex gap-10 justify-center items-center flex-col md:flex-row">
            <div className="card bg-base-100 lg:w-1/2 md:w-[65%] shadow-2xl mt-10 px-30">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-control">
                  <textarea
                    className="textarea px-2 border-1 mt-5 border-gray-300"
                    placeholder="Your Message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-control ">
                  <input
                    type="submit"
                    className="btn bg-lime-950 text-textColor"
                    value="Send"
                  />
                </div>
              </form>
            </div>
          </div> */}
          <form
            onSubmit={handleSubmit}
            className="bg-primaryColor/90 p-10 lg:w-[80%] rounded-xl mb-10"
          >
            <div className="max-w-full mb-2">
              <div className="mb-2 block">
                <Label
                  htmlFor="email4"
                  className="text-highlightColor"
                  value="Your Name"
                />
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="rounded-lg border border-gray-300 w-full"
                required
              />
            </div>
            <div className="max-w-full mb-2">
              <div className="mb-2 block">
                <Label
                  htmlFor="email4"
                  className="text-highlightColor"
                  value="Your email"
                />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="rounded-lg border border-gray-300 w-full"
                required
              />
            </div>
            <div className="max-w-full">
              <div className="mb-2 block">
                <Label
                  htmlFor="comment"
                  className="text-highlightColor"
                  value="Your message"
                />
              </div>
              <Textarea
                id="comment"
                placeholder="Leave a comment..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className=""
                required
                rows={4}
              />
            </div>
            <div className="mt-7">
              <input
                className="px-8 py-3 rounded-3xl bg-darkMode"
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
