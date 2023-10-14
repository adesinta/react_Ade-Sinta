import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import profileImg from "../assets/profile.svg";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      text: "Are you sure you want to log out?",
      title: "Logout",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((response) => {
      if (response.isConfirmed) {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("user");
        navigate("/login");
      }
    });
  };
  

  return (
    <div>
      <div className="flex justify-between p-3 shadow-md">
        <h1 className="font-semibold text-2xl">Simple Header</h1>
        <nav>
          <ul className="flex gap-4">
            <Link to={"/"}>
              <li className="pt-2 text-[#0D6EFD] hover:text-blue-700">Home</li>
              </Link>
            <a href="#">
              <li className="pt-2 text-[#0D6EFD] hover:text-blue-700">
                Features
              </li>
            </a>
            <a href="#">
              <li className="pt-2 text-[#0D6EFD] hover:text-blue-700">
                Pricing
              </li>
            </a>
            <a href="#">
              <li className="pt-2 text-[#0D6EFD] hover:text-blue-700">FAQs</li>
            </a>
            <a href="#">
              <li className="pt-2 text-[#0D6EFD] hover:text-blue-700">About</li>
            </a>
            <Link to={"/chat"}>
              <li className="pt-2 text-[#0D6EFD] hover:text-blue-700">Chat OpenAI</li>
            </Link>
            <Link to={"/createproduct"}>
              <li className="hover:bg-blue-600 bg-[#0D6EFD] w-[150px] h-[40px] flex justify-center items-center text-white rounded">
                Create Product
              </li>
            </Link>
            {localStorage.getItem("isLoggedIn") ? (
              <li
                onClick={handleLogout}
                className="hover:bg-blue-600 bg-[#0D6EFD] w-[70px] h-[40px] flex justify-center items-center text-white rounded cursor-pointer"
              >
                Logout
              </li>
            ) : (
              <Link to={"/login"}>
                <li className="hover:bg-blue-600 bg-[#0D6EFD] w-[210px] h-[40px] gap-x-1 flex justify-center items-center text-white rounded">
                  <img src={profileImg} alt="" width={30} />
                  You are not logged in
                </li>
              </Link>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
