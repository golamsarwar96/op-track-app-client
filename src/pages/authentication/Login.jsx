import { Button, Label } from "flowbite-react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Lottie from "lottie-react";
import signInLottie from "../../assets/lottie/signinLottie.json";
import { FaGoogle } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const Login = () => {
  const axiosSecure = useAxiosSecure();
  const { userSignIn, googleSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || "/";
  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await userSignIn(email, password);
      console.log(result);

      //fetching a specific user to validate
      const res = await axiosSecure.get(`/user/${email}`);
      const fireUser = res.data;
      console.log(fireUser.isFired);

      if (fireUser.isFired) {
        toast.error("Your account has been fired");
        return;
      }

      navigate(from, { replace: true });
      toast.success("Successfully Logged In");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      console.log(result);
      const user = result.user;
      console.log(user);

      // const userRef = doc(db, "users", users.uid);
      // await setDoc(
      //   userRef,
      //   {
      //     bank_acc_no: user.bank_acc_no,
      //     salary: user.salary,
      //     designation: user.designation,
      //     role: result.role,
      //     isVerified: result.isVerified,
      //     name: result.user.name,
      //     email: result.user.email,
      //     img_URL: result.user.photoURL,
      //   },
      //   { merge: true }
      // );

      await axios.post(`${import.meta.env.VITE_API_URL}/users`, {
        name: result.user?.displayName,
        email: result.user?.email,
        image: result.user?.photoURL,
      });
      toast.success("Google Login Successful");
      navigate(from, { replace: true });
    } catch {
      console.log("Error");
      toast.error("Google Sign In Failed");
    }
  };
  return (
    <div className="bg-gray-200">
      <div className="max-w-screen-2xl mx-auto min-h-screen flex-col lg:flex-row flex items-center justify-center gap-10 ">
        <div className="lg:order-0 order-1">
          <Lottie
            animationData={signInLottie}
            className="lg:w-[600px] w-[400px]"
          ></Lottie>
        </div>
        <div className="lg:w-[35%]">
          <h1 className="text-center md:text-5xl text-4xl font-bold font-sand mb-10 mt-10 lg:mt-0">
            Welcome Back To
            <h2 className="md:mt-1 self-center whitespace-nowrap text-primaryColor font-extrabold dark:text-white">
              Op<span className="text-darkMode">Track</span>
            </h2>
          </h1>
          <form
            onSubmit={handleSignIn}
            className=" bg-primaryColor/70 rounded-3xl w-full p-5"
          >
            <div className="flex items-center gap-3 justify-center">
              <Link to="/register">
                <button className="btn bg-primaryColor text-white font-semibold px-5 py-3 rounded-3xl">
                  Register
                </button>
              </Link>
              <button
                onClick={handleGoogleSignIn}
                className="btn bg-primaryColor text-white font-semibold flex justify-center items-center gap-2 px-5 py-3 rounded-3xl"
              >
                <FaGoogle className="text-white"></FaGoogle>Google Sign In
              </button>
            </div>
            <h1 className="text-center font-bold text-white mt-4">
              Sign In With Google or
            </h1>
            <div className="divider"></div>

            <div className="space-y-3">
              <div className="">
                <div className="block mb-1">
                  <Label className="text-white" value="Your email" />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="name@optrack.com"
                  className="w-full rounded-lg"
                  required
                />
              </div>
              <div>
                <div className=" block mb-1">
                  <Label className="text-white" value="Your password" />
                </div>
                <input
                  name="password"
                  placeholder="Your Password"
                  type="password"
                  className="w-full rounded-lg"
                  required
                />
              </div>
              <Button className="bg-primaryColor w-full" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
