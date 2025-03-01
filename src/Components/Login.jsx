import React from "react";
import { FcGoogle } from "react-icons/fc";
import login from "../images/login.jpg";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-gray-100 shadow-lg rounded-lg flex overflow-hidden max-w-4xl w-full">
        <div className="w-1/2 p-10">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <p className="text-gray-600 mb-6">See your growth and get support!</p>
          <button className="w-full flex items-center justify-center border rounded-lg py-2 px-4 mb-4 text-gray-700 bg-white hover:bg-gray-200">
            Sign in with Google
            <FcGoogle className="ml-2" size={25}/>
          </button>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email*</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password*</label>
            <input
              type="password"
              placeholder="Minimum 8 characters"
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-gray-600">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-blue-500 text-sm">Forgot password?</a>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Login
          </button>
          <p className="text-center text-gray-600 mt-4">
            Not registered yet? <a href="/register" className="text-blue-500">Create a new account</a>
          </p>
        </div>
        <div className="w-1/2 bg-gray-100 flex items-center justify-center p-10">
          <img
            src={login}
            alt="Illustration"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
