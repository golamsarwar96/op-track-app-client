import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { userGreet } = useAuth();
  return <div>{userGreet("tasin")}</div>;
};

export default Navbar;
