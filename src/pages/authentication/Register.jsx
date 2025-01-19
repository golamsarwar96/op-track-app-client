import { Button, Dropdown, Label, TextInput } from "flowbite-react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import signInLottie from "../../assets/lottie/signinLottie.json";
import Lottie from "lottie-react";
import { FaGoogle } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Register = () => {
  const axiosSecure = useAxiosSecure();
  const { createUser, updateUserProfile, googleSignIn } = useAuth();
  const [roles, setRoles] = useState("");
  const handleRoles = (value) => {
    setRoles(value);
    console.log(value);
  };
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const bank_account_no = form.bank_account_no.value;
    const salary = form.salary.value;
    const role = roles;
    const designation = form.designation.value;
    const image = form.image.files[0];
    const isVerified = false;
    const isFired = false;
    const formData = new FormData();
    formData.append("image", image);

    //Password Validation
    // const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
    // if (!regex.test(password)) {
    //   toast.error(
    //     "The password must be 6 characters & should contain at least one uppercase letter and one lowercase letter."
    //   );
    //   return;
    // }

    //Send Image Data to imgbb
    const { data } = await axios.post(
      `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`,
      formData
    );
    const img_URL = data.data.display_url;

    try {
      const result = await createUser(email, password);
      console.log(result);
      const userInfo = {
        name,
        email,
        password,
        bank_account_no,
        salary: Number(salary),
        designation,
        role,
        img_URL,
        isVerified,
        isFired,
      };
      // await axios.post(`${import.meta.env.VITE_API_URL}/users`, userInfo);
      await axiosSecure.post("/users", userInfo);
      await updateUserProfile(name, img_URL);

      navigate("/");
      toast.success("SignUp Successful");
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await googleSignIn();
      console.log(result);
      const user = result.user;
      console.log(user);

      await axios.post(`${import.meta.env.VITE_API_URL}/users`, {
        name: result.user?.displayName,
        email: result.user?.email,
        image: result.user?.photoURL,
      });
      toast.success("Google Login Successful");
      navigate("/");
    } catch {
      console.log("Error");
      toast.error("Google Sign In Failed");
    }
  };
  return (
    <div className="font-sand font-semibold max-w-screen-2xl mx-auto min-h-screen bg-gray-200 flex flex-col lg:flex-row justify-center items-center gap-10">
      <div className="order-2 relative">
        <h1 className="text-center lg:text-5xl md:text-4xl text-4xl font-bold font-sand mb-10 absolute  lg:mt-20 lg:left-28 md:mt-14 md:left-12 mt-16 left-10">
          Hello! Welcome to
          <h2 className="md:mt-1 self-center whitespace-nowrap text-primaryColor font-extrabold dark:text-white">
            Op<span className="text-darkMode">Track</span>
          </h2>
        </h1>
        <Lottie
          animationData={signInLottie}
          className="lg:w-[600px] w-[400px] pt-32"
        ></Lottie>
      </div>
      <div className="">
        <form
          onSubmit={handleForm}
          className="flex flex-col gap-4 bg-primaryColor/80 p-10"
        >
          <div className="flex items-center gap-3 justify-center">
            <Link to="/login">
              <button className="btn bg-primaryColor text-white font-semibold px-5 py-3 rounded-3xl">
                Login
              </button>
            </Link>
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-primaryColor text-white font-semibold flex justify-center items-center gap-2 px-5 py-3 rounded-3xl"
            >
              <FaGoogle className="text-white"></FaGoogle>Google Sign In
            </button>
          </div>
          <h1 className="text-center font-bold text-white">
            Sign up With Google or
          </h1>
          <div className="flex gap-3">
            <div>
              <div className="mb-2 block">
                <Label className="text-white" value="Your Name" />
              </div>
              <TextInput
                placeholder="Your Name"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="flex-1">
              <div className="mb-2 block">
                <Label className="text-white" value="Designation" />
              </div>
              <TextInput
                name="designation"
                defaultValue="Assistant"
                placeholder="Your Designation"
                type="text"
                required
              />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label className="text-white" value="Your email" />
            </div>
            <TextInput
              type="email"
              name="email"
              placeholder="name@optrack.com"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label className="text-white" value="Your password" />
            </div>
            <TextInput
              name="password"
              placeholder="Your Password"
              type="password"
              required
            />
          </div>
          <div className="flex gap-3 mb-2">
            <div className="flex-1">
              <div className="mb-2 block">
                <Label className="text-white" value="Bank Account Number" />
              </div>
              <TextInput
                name="bank_account_no"
                defaultValue="1234567891011"
                placeholder="1DAXXXXXXXXXX"
                type="text"
                required
              />
            </div>
            <div className="flex-1">
              <div className="mb-2 block">
                <Label className="text-white" value="Salary" />
              </div>
              <TextInput
                name="salary"
                defaultValue={10000}
                placeholder="Your Salary"
                type="number"
                required
              />
            </div>
          </div>

          <div>
            <Dropdown
              label={roles ? roles : "Your Role"}
              defaultValue={roles}
              className="text-white"
            >
              <Dropdown.Item onClick={() => handleRoles("Employee")}>
                Employee
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleRoles("HR")}>
                HR
              </Dropdown.Item>
            </Dropdown>
          </div>

          <div className="">
            <div className="mb-2 block">
              <Label className="text-white" value="Select Image" />
            </div>
            <input
              className=""
              required
              type="file"
              id="image"
              name="image"
              accept="image/*"
            />
          </div>

          <Button className="bg-primaryColor" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
