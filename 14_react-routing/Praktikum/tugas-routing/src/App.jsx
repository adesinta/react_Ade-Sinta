import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct";
import LandingPage from "./pages/LandingPage";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <div className="w-full h-screen">
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<CreateProduct />} path="/createproduct" />
          <Route element={<ProductDetails />} path="/productdetails/:index" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
