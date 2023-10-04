import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <div className="w-full h-screen">
       <BrowserRouter>
        <Routes>
          <Route element={<LandingPage />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
