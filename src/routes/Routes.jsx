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
    element: <Dashboard></Dashboard>,
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
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "employee-list",
        element: <EmployeeList></EmployeeList>,
      },
      {
        path: "details/:id",
        element: <EmployeeDetails></EmployeeDetails>,
      },

      {
        path: "progress",
        element: <Progress></Progress>,
      },
      {
        path: "all-employee-list",
        element: (
          <AdminRoute>
            <AllEmployeeList></AllEmployeeList>
          </AdminRoute>
        ),
      },
      {
        path: "Payroll",
        element: <Payroll></Payroll>,
      },
    ],
  },
  {
    path: "contact",
    element: <Contact></Contact>,
  },
]);

export default router;
