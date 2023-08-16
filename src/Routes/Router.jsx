import { Route, Routes } from "react-router-dom";
import Home from "../views/Home/Home";
import Dashboard from "../views/Dashboard/Dashboard";
import AddFood from "../views/AddFood/AddFood";
import OrderViews from "../views/OrderView/OrderView";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path='/addFood' element={<AddFood />} />
      <Route path='/orders' element={<OrderViews />} />
    </Routes>
  );
};

export default Routers;