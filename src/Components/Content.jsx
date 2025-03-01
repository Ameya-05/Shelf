import { useState } from "react";
// import image1 from "../images/image1.png";
import image3 from "../images/image3.png";
import image5 from "../images/image5.png";

export default function Content() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-[#f6f6ed] flex flex-col items-center justify-center ml-14 mr-14 rounded-3xl relative">
      {/* Floating Elements */}
      {/* <div className="absolute bottom-3 left-14 w-56 h-56">
        <img src={image1} className="w-full h-full" alt="" />
      </div> */}

      <div className="absolute top-2 -left-10 w-44 h-44">
        <img src={image3} className="w-full h-full" alt="" />
      </div>

      <div className="absolute top-5 -right-8 w-44 h-44">
        <img src={image5} className="w-full h-full" alt="" />
      </div>

      <div className="absolute bottom-12 left-10 bg-white shadow-lg p-3 rounded-lg">
        <p className="text-sm text-gray-600">✅ Smart Inventory</p>
        <p className="text-sm text-green-600">🚀 Seamless Efficiency!</p>
      </div>

      <div className="absolute bottom-12 -right-10 bg-white shadow-lg p-3 rounded-lg">
        <p className="text-sm text-gray-600">📦📊 Track, Manage, Succeed<br/> - Effortless Inventory at Your Fingertips!✅🚀</p>
      </div>

      {/* Main Content */}
      <h1 className="text-6xl font-bold text-gray-900 text-center">
        Accelerate Growth with AI✨ <br/> Sales & Marketing Automation
      </h1>
      <p className="text-lg text-gray-600 mt-4 text-center">
      Boost efficiency and streamline your inventory with smart management solutions!
      </p>

      {/* Email Signup */}
      <div className="mt-6 flex items-center gap-3">
        <input
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-80 focus:outline-none"
        />
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg">
          Get started now →
        </button>
      </div>
    </div>
  );
}
