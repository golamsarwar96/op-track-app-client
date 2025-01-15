import { Button, Dropdown, Label, TextInput } from "flowbite-react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "/src/index.css";

const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
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
    const userInfo = {
      name,
      email,
      password,
      bank_account_no,
      salary,
      designation,
      role,
    };

    console.log(userInfo);

    try {
      const result = await createUser(email, password);
      console.log(result);

      await updateUserProfile(name, img_URL);

      navigate("/");
      toast.success("SignUp Successful");
    } catch (err) {
      console.log(err);
    }
    console.log(image);
  };
  return (
    <div className="max-w-screen-2xl mx-auto min-h-screen bg-gray-200">
      <div></div>
      <div>
        <form onSubmit={handleForm} className="flex max-w-md flex-col gap-4">
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
              placeholder="Your Designation"
              type="text"
              required
            />
          </div>
          <Dropdown label={roles ? roles : "Your Role"}>
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
