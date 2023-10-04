import React from "react";
import TambingImg from "../assets/img/tambing.jpg";
import SomboriImg from "../assets/img/sombori.jpg";
import TogeanImg from "../assets/img/togean.jpg";

const AboutUs = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-3xl pt-10">About Us</h1>
      <div className="flex gap-x-4 p-4 justify-center ">
        <img src={TambingImg} alt="" className="w-[300px] h-[200px]" />
        <img src={SomboriImg} alt="" className="w-[300px] h-[200px]" />
        <img src={TogeanImg} alt="" className="w-[300px] h-[200px]" />
      </div>
      <div className="flex justify-center mb-10">
        <p className="text-justify w-[60rem]">
          {" "}
          Tripalu adalah sebuah website yang menyediakan akses bagi masyarakat
          untuk menemukan dan memesan berbagai layanan untuk liburan di Sulawesi
          Tengah. Tripalu dibuat untuk mengenalkan kepada masyarakat luas bahwa
          Sulawesi Tengah Memiliki tempat wisata yang tidak kalah indah dengan
          kota kota lain. Selain itu juga, Tripalu hadir untuk menemani anda
          mengelilingi daerah daerah yang ada di Sulawesi Tengah.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
