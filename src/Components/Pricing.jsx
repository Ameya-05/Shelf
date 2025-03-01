import React from "react";

const Pricing = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 p-6">
      {/* Collaboration Section */}
      <div className="bg-yellow-100 p-8 rounded-2xl shadow-md max-w-md">
        <h1 className=" text-3xl font-bold uppercase">₹0/ Month</h1>
        <ul className="text-gray-800 mt-5">
            <li>✅ Inventory Tracking</li>
            <li>❌ Stock Management</li>
            <li>❌ Reports & Analystics</li>
            <li>❌ Mobile & Cloud Access</li>
            <li>❌ Advance Analytics</li>
        </ul>
        <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">Buy Now</button>
      </div>

      {/* Engagement Section */}
      <div className="bg-green-100 p-8 rounded-2xl shadow-md max-w-md">
        <h1 className=" text-3xl font-bold uppercase">₹249/ Month</h1>
        <ul className="text-gray-800 mt-5">
            <li>✅ Inventory Tracking</li>
            <li>✅ Stock Management</li>
            <li>❌ Reports & Analystics</li>
            <li>❌ Mobile & Cloud Access</li>
            <li>❌ Advance Analytics</li>
        </ul>
        <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">Buy Now</button>
      </div>

      <div className="bg-purple-100 p-8 rounded-2xl shadow-md max-w-md">
        <h1 className=" text-3xl font-bold uppercase">₹799/ 6 Months</h1>
        <ul className="text-gray-800 mt-5">
            <li>✅ Inventory Tracking</li>
            <li>✅ Stock Management</li>
            <li>✅ Reports & Analystics</li>
            <li>❌ Mobile & Cloud Access</li>
            <li>❌ Advance Analytics</li>
        </ul>
        <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">Buy Now</button>
      </div>

      <div className="bg-blue-100 p-8 rounded-2xl shadow-md max-w-md">
        <h1 className=" text-3xl font-bold uppercase">₹999/ YEAR</h1>
        <ul className="text-gray-800 mt-5">
            <li>✅ Inventory Tracking</li>
            <li>✅ Stock Management</li>
            <li>✅ Reports & Analystics</li>
            <li>✅ Mobile & Cloud Access</li>
            <li>✅ Advance Analytics</li>
        </ul>
        <button className="mt-4 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">Buy Now</button>
      </div>
    </div>
  );
};

export default Pricing;
