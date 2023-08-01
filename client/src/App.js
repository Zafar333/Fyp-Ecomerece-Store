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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "./pages/Users/Products/AllProducts/Products";
import Panel from "./pages/Admin/AdminPanel/Panel/Panel";
import Dashboard from "./pages/Admin/AdminPanel/Dashboard/Dashboard";
import AdminProducts from "./pages/Admin/AdminPanel/Products/AdminProducts";
import NewProductAdmin from "./pages/Admin/AdminPanel/NewProduct/NewProductAdmin";
import TailorDashboard from ".//pages/Tailors/TailorDashboard/Dashboard";
import Cart from "./pages/Users/Cart/Cart";
import SingleProduct from "./pages/Users/Products/SingleProduct/SingleProduct";
import CreateShop from "./pages/Tailors/TailorDashboard/CreateShop/CreateShop";
import ShopProfileCard from "./pages/Tailors/TailorDashboard/ShopProfileCard/ShopProfileCard";
import Success from "./components/Payments/Success";
import Cancel from "./components/Payments/Cancel";
import AllTailors from "./pages/Users/AllTailorsProfile/AllTailor/AllTailors";
import SingleTailorShop from "./pages/Users/AllTailorsProfile/SingleTailor/SingleTailorShop";
import SingleTailorRoot from "./pages/Users/AllTailorsProfile/SingleTailor/SingleTailorRoot";
import SingleTailorFormBasicPrice from "./pages/Users/AllTailorsProfile/SingleTailor/SingleTailorFormViews/BasicPriceDetail";
import SingleTailorFormPremiumPrice from "./pages/Users/AllTailorsProfile/SingleTailor/SingleTailorFormViews/PremiumPriceDetail";
import SingleTailorDetail from "./pages/Users/AllTailorsProfile/SingleTailor/SingleTailorFormViews/TailorDetail";
import NotFound from "./components/NotFound/NotFound";
import Users from "./pages/Admin/AdminPanel/Users/Users";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />

          <Route path="/admin">
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/register" element={<AdminRegister />} />
            <Route path="/admin/panel" element={<Root />}>
              <Route path="/admin/panel" element={<Panel />}>
                <Route path="/admin/panel/dashboard" element={<Dashboard />} />
                <Route
                  path="/admin/panel/products"
                  element={<AdminProducts />}
                />
                <Route
                  path="/admin/panel/products/new"
                  element={<NewProductAdmin />}
                />
                <Route
                  path="/admin/panel/products/edit/:id"
                  element={<NewProductAdmin />}
                />
                <Route path="/admin/panel/users" element={<Users />} />
              </Route>
            </Route>
          </Route>
          <Route path="/tailor" element={<TailorRoot />}>
            <Route path="/tailor/login" element={<TailorLogin />} />
            <Route path="/tailor/register" element={<TailorRegister />} />
            <Route path="/tailor/dashboard" element={<TailorDashboard />}>
              <Route path="/tailor/dashboard/" element={<ShopProfileCard />} />
              <Route
                path="/tailor/dashboard/createShop"
                element={<CreateShop />}
              />
            </Route>
          </Route>
          <Route path="/user" element={<UserRoot />}>
            <Route path="/user/login" element={<UserLogin />} />
            <Route path="/user/register" element={<UserRegister />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/product/:productID" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/allTailors" element={<AllTailors />} />
          <Route path="/signleTailor" element={<SingleTailorRoot />}>
            <Route
              path="/signleTailor/viewShop/:id"
              element={<SingleTailorShop />}
            >
              <Route
                path="/signleTailor/viewShop/:id/SingleTailorInfoFormViewsBasicPrice/:id"
                element={<SingleTailorFormBasicPrice />}
              />
              <Route
                path="/signleTailor/viewShop/:id/SingleTailorInfoFormViewsPremiumPrice/:id"
                element={<SingleTailorFormPremiumPrice />}
              />
              <Route
                path="/signleTailor/viewShop/:id/SingleTailorInfoFormViewsDetailView/:id"
                element={<SingleTailorDetail />}
              />
            </Route>
          </Route>
          {/* this route should be at end */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
