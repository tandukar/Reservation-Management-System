// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/pages/auth/Login";
import SendOtp from "./components/pages/auth/SendOtp";
import VerifyOtp from "./components/pages/auth/VerifyOtp";
import ResetPwd from "./components/pages/auth/Resetpwd";
import Dashboard from "./components/pages/dashboard/Dashboard";
import "./components/pages/calendar/Reservations.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path="/" element={<Navigate to="/login" />}>
    <Route path="/" element={<Login />}>
    <Route path="login" element={<Login />}/>
      <Route path="send-otp" element={<SendOtp />} />
      <Route path="verify-otp" element={<VerifyOtp />} />
      <Route path="reset-password" element={<ResetPwd />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/send-otp" element={<SendOtp />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
          <Route path="/reset-password" element={<ResetPwd />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
