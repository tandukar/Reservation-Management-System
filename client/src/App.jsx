import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/pages/auth/Login";
import SendOtp from "./components/pages/auth/SendOtp";
import VerifyOtp from "./components/pages/auth/VerifyOtp";
import ResetPwd from "./components/pages/auth/Resetpwd";


function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/send-otp" element={<SendOtp/>} />
          <Route path="/verify-otp" element={<VerifyOtp/>} />
          <Route path="/reset-password" element={<ResetPwd/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
