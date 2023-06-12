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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "./pages/Users/Products/AllProducts/Products";
import Panel from "./pages/Admin/AdminPanel/Panel/Panel";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element="root path" />
          <Route path="/admin">
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/register" element={<AdminRegister />} />
            <Route path="/admin/panel" element={<Root />}>
              <Route path="/admin/panel" element={<Panel />} />
            </Route>
          </Route>
          <Route path="/tailor" element={<TailorRoot />}>
            <Route path="/tailor/login" element={<TailorLogin />} />
            <Route path="/tailor/register" element={<TailorRegister />} />
          </Route>
          <Route path="/user" element={<UserRoot />}>
            <Route path="/user/login" element={<UserLogin />} />
            <Route path="/user/register" element={<UserRegister />} />
          </Route>
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
