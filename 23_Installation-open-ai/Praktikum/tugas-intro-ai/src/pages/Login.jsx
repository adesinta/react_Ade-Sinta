import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import Navbar from "../components/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email and password are required!",
      });
      return;
    }

    const dummyUser = { username: "admin", password: "admin123" };
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      (storedUser &&
        storedUser.username === username &&
        storedUser.password === password) ||
      (dummyUser.username === username && dummyUser.password === password)
    ) {
      localStorage.setItem("isLoggedIn", true);

      const user = {
        username: username,
      };
      localStorage.setItem("user", JSON.stringify(user));

      Swal.fire({
        icon: "success",
        title: "Successfully Login!",
        confirmButtonText: "OK",
      }).then((res) => {
        if (res.isConfirmed) {
          navigate("/");
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password",
      });
    }
  };

  return (
    <>
    <Navbar/>
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="mb-4">
          <h1 className="font-bold text-3xl">Login,</h1>
          <p className="font-semibold">
            Welcome back, please login to your account
          </p>
        </div>
        <div className="">
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email" className="text-center flex items-center">
                Username :
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="rounded w-[320px] "
              />
            </div>
            <div className="flex flex-col gap-y-2 mt-6">
              <label
                htmlFor="password"
                className="text-center flex items-center"
              >
                Password :
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded w-[320px] "
              />
            </div>
            <button
              type="submit"
              className="bg-[#0D6EFD] w-full mt-3 rounded h-10 text-white font-semibold hover:bg-blue-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
