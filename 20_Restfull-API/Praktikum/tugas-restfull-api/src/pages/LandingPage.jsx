import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import heroImage from "../assets/hero-img.png";
import cicleGroup from "../assets/Group 3.png";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-[#37517e] flex p-14 justify-evenly">
        <div className="flex flex-col justify-center ">
          <h1 className="text-white font-bold text-5xl w-[600px] pb-4 leading-snug ">
            Better Solutions For Your Business
          </h1>
          <p className="text-[#94a3b8] font-normal text-2xl w-[600px] leading-snug">
            We are team of talented designers making websites with Bootstrap
          </p>
          <div className="pt-8 ">
          <Link to={"/createproduct"}><button className="bg-[#47b2e4] text-white border-none rounded-[50px] w-36 h-10 hover:bg-[#f3f5fa] hover:text-[#37517e]">
              Get Started
            </button></Link>
            <button className="bg-transparent text-white rounded-[50px] w-36 h-10 hover:bg-[#f3f5fa] hover:text-[#37517e] ml-2">
              Watch Video
            </button>
          </div>
        </div>
        <img src={heroImage} alt="" width={500} />
      </div>
      <div className="bg-[#f3f5fa] p-14 flex flex-col text-center gap-2 ">
        <h3 className="text-2xl font-bold text-[#37517e]">Join Our Newsletter</h3>
        <p>
          Tamen quem nulla quae legam multos aute sint culpa legam noster magna
        </p>
        <div>
          <div>
            <input className="border-none rounded-[50px] w-[600px] h-[40px] outline-none pl-5" type="text" name="" id="" />
            <button className="bg-[#47b2e4] w-[147px] h-10 rounded-[50px] border-none absolute text-white hover:bg-[#37517e] ">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="flex justify-between p-20 leading-loose">
        <div className="">
          <h4 className="text-3xl font-bold text-[#37517e]">ARSHA</h4>
          <p>A108 Adam Street</p>
          <p>New York, NY 535022</p>
          <p>United States</p>
          <div>
            <p>
              <span className="font-bold text-[#5e5e5e]">Phone:</span> +1 5589 55488 55
            </p>
            <p>
              <span className="font-bold text-[#5e5e5e]">Email:</span> info@example.com
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-[#37517e]">Usefull Links</h4>
          <p>Home</p>
          <p>About us</p>
          <p>Services</p>
          <p>Terms of Service</p>
          <p>Privacy policy</p>
        </div>
        <div>
          <h4 className="font-bold text-[#37517e]">Our Services</h4>
          <p>Web Design</p>
          <p>Web Development</p>
          <p>Product Management</p>
          <p>Marketing</p>
          <p>Graphic Design</p>
        </div>
        <div>
          <h4 className="font-bold text-[#37517e]">Our Social Networks</h4>
          <p className="w-[300px] pb-3"> 
            Cras fermentum odio eu feugiat lide par naso tierra videa magna
            derita valies
          </p>
          <img src={cicleGroup} alt="" />
        </div>
      </div>
      <div className="bg-[#37517e]">
        <div className="flex justify-between p-8 text-white">
          <p>
            &copy; Copyright <strong>Arsha</strong>. All Right reserved.
          </p>
          <p>
            Designed by <span className="text-[#47b2e4]">BootstrapMade</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
