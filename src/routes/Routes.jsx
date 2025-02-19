import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";
import Dashboard from "../layout/Dashboard";
import Contact from "../pages/contact/Contact";
import WorkSheet from "../pages/dashboard/sidebar/employee/WorkSheet";
import PaymentHistory from "../pages/dashboard/sidebar/employee/PaymentHistory";
import EmployeeList from "../pages/dashboard/sidebar/hr/EmployeeList";
import EmployeeDetails from "../pages/dashboard/sidebar/hr/EmployeeDetails";
import Progress from "../pages/dashboard/sidebar/hr/Progress";
import AllEmployeeList from "../pages/dashboard/sidebar/Admin/AllEmployeeList";
import Payroll from "../pages/dashboard/sidebar/Admin/Payroll";
import PrivateRoute from "../routes/PrivateRoute";
import AdminRoute from "./AdminRoute";
import HrRoute from "./HrRoute";
import Career from "../pages/Career";
import AboutUs from "../pages/AboutUs";
import Profile from "../pages/dashboard/Profile";
import Overview from "../pages/dashboard/Overview";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "work-sheet",
        element: (
          <PrivateRoute>
            <WorkSheet></WorkSheet>
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <PaymentHistory></PaymentHistory>
          </PrivateRoute>
        ),
      },
      {
        path: "employee-list",
        element: (
          <PrivateRoute>
            <HrRoute>
              <EmployeeList></EmployeeList>
            </HrRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "details/:id",
        element: (
          <PrivateRoute>
            <HrRoute>
              <EmployeeDetails></EmployeeDetails>
            </HrRoute>
          </PrivateRoute>
        ),
      },

      {
        path: "progress",
        element: (
          <PrivateRoute>
            <HrRoute>
              <Progress></Progress>
            </HrRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "all-employee-list",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllEmployeeList></AllEmployeeList>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "Payroll",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Payroll></Payroll>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "overview",
        element: (
          <PrivateRoute>
            <Overview></Overview>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "contact",
    element: <Contact></Contact>,
  },
  {
    path: "career",
    element: <Career></Career>,
  },
  {
    path: "about-us",
    element: <AboutUs></AboutUs>,
  },
]);

export default router;
