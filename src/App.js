import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/HomePage";
import ProductDetails from "./pages/product details/ProductDetails";
import Payment from "./pages/payment/Payment";
import Gift from "./pages/gift/Gift";
import Login from "./pages/login/Login";
import Profile from "../src/pages/profile/Profile";
import Wishlist from "./pages/wishlist/Wishlist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AppContext from "./globalState";
import Signup from "./pages/signup/Signup";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { CookiesProvider } from "react-cookie";

function App() {
  return (
    <CookiesProvider>
      <Provider store={store()}>
        <div className="App" style={{ color: "#4A5F80 !important" }}>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/details/:productId" element={<ProductDetails />} />
            <Route path="/payment/:productId" element={<Payment />} />
            <Route path="/gift/:productId" element={<Gift />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/your-profile" element={<Profile />} />
            <Route path="/your-wishlist" element={<Wishlist />} />
          </Routes>
        </div>
      </Provider>
    </CookiesProvider>
  );
}

export default App;
