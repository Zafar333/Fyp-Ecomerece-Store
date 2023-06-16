import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./pages/Admin/Root";
import AdminLogin from "./pages/Admin/Login/Login";
import AdminRegister from "./pages/Admin/Register/Register";
import TailorLogin from "./pages/Tailors/Login/Login";
import TailorRegister from "./pages/Tailors/Register/Register";
import TailorRoot from "./pages/Tailors/TailorRoot";
import UserRoot from "./pages/Users/UserRoot";
import UserLogin from "./pages/Users/Login/Login";
import UserRegister from "./pages/Users/Register/Register";
import HomePage from "./pages/Users/HomePageDesign/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<Root />}>
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/register" element={<AdminRegister />} />
          </Route>
          <Route path="/tailor" element={<TailorRoot />}>
            <Route path="/tailor/login" element={<TailorLogin />} />
            <Route path="/tailor/register" element={<TailorRegister />} />
          </Route>
          <Route path="/user" element={<UserRoot />}>
            <Route path="/user/login" element={<UserLogin />} />
            <Route path="/user/register" element={<UserRegister />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
