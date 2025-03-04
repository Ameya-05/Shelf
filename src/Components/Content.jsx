import { useState } from "react";
import image3 from "../images/image3.png";
import image5 from "../images/image5.png";

export default function Content() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-[#f6f6ed] md:ml-14 md:mr-14 flex flex-col items-center justify-center px-6 sm:px-10 md:px-14 rounded-3xl relative">

      {/* Floating Images */}
      <div className="absolute top-2 left-0 sm:-left-10 w-32 sm:w-36 md:w-44 h-auto">
        <img src={image3} className="w-full h-full object-contain" alt="Decoration" />
      </div>

      <div className="absolute top-5 right-0 sm:-right-8 w-32 sm:w-36 md:w-44 h-auto">
        <img src={image5} className="w-full h-full object-contain" alt="Decoration" />
      </div>

      {/* Floating Text Boxes */}
      <div className="absolute bottom-12 left-4 sm:left-10 bg-white shadow-lg p-3 rounded-lg text-center">
        <p className="text-xs sm:text-sm text-gray-600">✅ Smart Inventory</p>
        <p className="text-xs sm:text-sm text-green-600">🚀 Seamless Efficiency!</p>
      </div>

      <div className="absolute bottom-12 right-4 sm:-right-10 bg-white shadow-lg p-3 rounded-lg text-center">
        <p className="text-xs sm:text-sm text-gray-600">📦📊 Track, Manage, Succeed<br/> - Effortless Inventory at Your Fingertips!✅🚀</p>
      </div>

      {/* Main Content */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 text-center leading-tight">
        Accelerate Growth with AI✨ <br/> Sales & Marketing Automation
      </h1>
      <p className="text-base sm:text-lg text-gray-600 mt-4 text-center">
        Boost efficiency and streamline your inventory with smart management solutions!
      </p>

      {/* Email Signup */}
      <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full max-w-lg">
        <input
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-80 focus:outline-none"
        />
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg w-full sm:w-auto">
          Get started now →
        </button>
      </div>
    </div>
  );
}
