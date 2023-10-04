import React from "react";
import { Link } from "react-router-dom";
import PhoneIcon from "../assets/icons/phone.svg";
import EmailIcon from "../assets/icons/email.svg";
import LocationIcon from "../assets/icons/location.svg";
import InstagramImg from "../assets/icons/instagram.svg";
import GithubImg from "../assets/icons/github.svg";
import LinkedinImg from "../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <div className="flex justify-between p-16 bg-[#023e8a] text-white w-full rounded-t-3xl">
      <div>
        <h1 className="font-bold text-4xl">Tripalu</h1>
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Consequuntur,
          <br /> perferendis in assumenda sed quis ad repudiandae ut similique
          placeat
          <br /> ipsa ea corporis asperiores? Vitae eum beatae, asperiores quas
          <br /> temporibus tenetur.
        </p>
      </div>
      <div className="flex flex-col gap-y-4">
        <h1 className="font-semibold text-2xl">Contact</h1>
        <div className="flex gap-x-2 items-center">
          <img src={PhoneIcon} alt="" />
          <p className="">0822-9670-8560</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <img src={EmailIcon} alt="" />
          <p className="pl-1">adesintaaaa@gmail.com</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <img src={LocationIcon} alt="" className="pl-1" />
          <p className="pl-1">Jl. Lagarutu 2, Palu - Sulawesi Tengah</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-2">
        <h1 className="font-semibold text-2xl">Social Media</h1>
        <div className="flex">
          <Link to="https://www.instagram.com/adesinta_/" target="_blank">
            <img src={InstagramImg} alt="" width={40} />
          </Link>
          <Link to="https://www.linkedin.com/in/adesinta/" target="_blank">
            <img src={LinkedinImg} alt="" width={40} />
          </Link>
          <Link to="https://github.com/adesinta" target="_blank">
            <img src={GithubImg} alt="" width={40} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
