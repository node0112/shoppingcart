import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Cart from "./components/cart";
import HomePage from "./components/homepage";
import ShopPage from "./components/shoppage";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><App/><HomePage/></>} />
        <Route path="/shop" element={<><App/><ShopPage/></>} />
        <Route path="/bag" element={<><App/><Cart/></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;