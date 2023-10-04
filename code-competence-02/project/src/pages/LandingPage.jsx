import React from "react";
import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";
import AboutUs from "../components/AboutUs"
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="relative h-screen">
        <div
          className="absolute inset-0 flex flex-col justify-center "
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url('../src/assets/img/togean.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div>
            <p className="text-white text-4xl font-bold flex justify-center items-center">
              EXPLORE SULAWESI TENGAH
            </p>
          </div>
          <p className="text-white text-center">Mari mengenal lebih dekat daerah daerah wisata yang ada di Sulawesi Tengah!</p>
        </div>
      </div>
      <ContactUs/>
      <AboutUs/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
