import { Button, Dropdown, Label, TextInput } from "flowbite-react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Register = () => {
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
    const formData = new FormData();
    formData.append("image", image);

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
        salary,
        designation,
        role,
        img_URL,
        isVerified,
      };
      const dbsave = await axios.post(
        `${import.meta.env.VITE_API_URL}/users`,
        userInfo
      );

      console.log(dbsave);

      await updateUserProfile(
        name,
        img_URL,
        bank_account_no,
        salary,
        designation,
        isVerified,
        role
      );

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
      navigate("/");
    } catch {
      console.log("Error");
      toast.error("Google Sign In Failed");
    }
  };
  return (
    <div className="max-w-screen-2xl mx-auto min-h-screen bg-gray-200">
      <div></div>
      <div>
        <form onSubmit={handleForm} className="flex max-w-md flex-col gap-4">
          <button
            onClick={handleGoogleSignIn}
            className="btn bg-primaryColor text-darkMode"
          >
            Google sign in
          </button>
          <div>
            <div className="mb-2 block">
              <Label value="Your Name" />
            </div>
            <TextInput
              placeholder="Your Name"
              type="text"
              name="name"
              required
            />
          </div>
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
          <div>
            <div className="mb-2 block">
              <Label value="Your password" />
            </div>
            <TextInput
              name="password"
              placeholder="Your Password"
              type="password"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Bank Account Number" />
            </div>
            <TextInput
              name="bank_account_no"
              defaultValue="1234567891011"
              placeholder="1DAXXXXXXXXXX"
              type="text"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Salary" />
            </div>
            <TextInput
              name="salary"
              defaultValue={10000}
              placeholder="Your Salary"
              type="number"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label value="Designation" />
            </div>
            <TextInput
              name="designation"
              defaultValue="Assistant"
              placeholder="Your Designation"
              type="text"
              required
            />
          </div>
          <Dropdown label={roles ? roles : "Your Role"} defaultValue={roles}>
            <Dropdown.Item onClick={() => handleRoles("Employee")}>
              Employee
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleRoles("HR")}>HR</Dropdown.Item>
          </Dropdown>

          <div className="">
            <div className="mb-2 block">
              <Label value="Select Image" />
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
