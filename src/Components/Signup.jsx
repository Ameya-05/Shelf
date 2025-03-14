import React from "react";
import signup from "../images/signup.jpg";

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="bg-white mt-5 shadow-lg rounded-lg flex flex-col md:flex-row overflow-hidden max-w-4xl w-full">
        <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-6">
          <img
            src={signup}
            alt="signup"
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="w-full md:w-1/2 p-7 bg-gray-100">
          <h2 className="text-2xl font-semibold mb-2">Register</h2>
          <p className="text-blue-800 mb-6">
            Manage all your inventory efficiently
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Let’s get you all set up so you can verify your personal account and begin setting up your work profile.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-1">First name*</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Last name*</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-1">Email*</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Phone no.*</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password*</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 border rounded-lg"
            />
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2" />
            <p className="text-gray-600 text-sm">
              I agree to all terms, privacy policies, and fees
            </p>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Sign up
          </button>
          <p className="text-center text-gray-600 mt-4">
            Already have an account? <a href="/login" className="text-blue-500">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
