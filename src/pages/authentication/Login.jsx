import { Button, Dropdown, Label, TextInput } from "flowbite-react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
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
    <div>
      {" "}
      <div className="max-w-screen-2xl mx-auto min-h-screen bg-gray-200">
        <div></div>
        <div>
          <form
            onSubmit={handleSignIn}
            className="flex max-w-md flex-col gap-4"
          >
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-primaryColor text-darkMode"
            >
              Google sign in
            </button>
            <div>
              <div className="mb-2 block">
                <Label value="Your email" />
              </div>
              <TextInput
                type="email"
                name="email"
                placeholder="name@optrack.com"
                required
              />
            </div>
            <div className="-mb-2 block">
              <Label value="Your password" />
            </div>
            <TextInput
              name="password"
              placeholder="Your Password"
              type="password"
              required
            />

            <Button className="bg-primaryColor" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
Login;
