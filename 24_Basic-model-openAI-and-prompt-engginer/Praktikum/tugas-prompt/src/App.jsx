import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProduct from "./pages/CreateProduct";
import LandingPage from "./pages/LandingPage";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import Faqs from "./pages/Faqs";
import WritingAssistant from "./pages/WritingAssistant";

const App = () => {
  return (
    <div className="w-full h-screen">
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} path="/" />
          <Route element={<CreateProduct />} path="/createproduct" />
          <Route element={<ProductDetails />} path="/productdetails/:index" />
          <Route element={<Login />} path="/login" />
          <Route element={<Chat />} path="/chat" />
          <Route element={<Faqs />} path="/faqs" />
          <Route element={<WritingAssistant />} path="/writing-assistant" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
