import track from "../images/track.png";
import dashboard from "../images/dashboard.png";
import image4 from "../images/image4.png";
import mobile from "../images/mobile.png";

export default function Features() {
  return (
    <div className="flex flex-col gap-10 px-6 md:px-10 py-10">
      {/* Inventory Tracking */}
      <div id="inventory" className="bg-purple-100 p-6 rounded-2xl shadow-md">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-28">
          <div className="w-full max-w-md">
            <img className="w-full h-auto" src={track} alt="Inventory Tracking" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-800">Inventory Tracking</h1>
            <p className="text-gray-600 mt-2">
              Stay ahead with real-time stock tracking, barcode scanning, and smart location management.
            </p>
            <button className="mt-4 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md">
              Learn more →
            </button>
            <ul className="list-disc text-gray-600 mt-4 pl-5">
              <li>Real-time stock levels</li>
              <li>Barcode/QR code scanning</li>
              <li>Batch and serial number tracking</li>
              <li>Location-based tracking</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Stock Management */}
      <div id="stock" className="bg-orange-100 p-6 rounded-2xl shadow-md">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-14">
          <div className="w-full max-w-md">
            <img className="w-full h-auto rounded-lg" src={dashboard} alt="Stock Management" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800">Stock Management</h2>
            <p className="text-gray-600 mt-2">
              Managing stock effectively is the backbone of a smooth-running business. A smart stock system prevents 
              shortages, cuts excess, and keeps products available.
            </p>
            <button className="mt-4 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md">
              Learn more →
            </button>
            <ul className="list-disc text-gray-600 mt-4 pl-5">
              <li>Low stock alerts and reorder notifications</li>
              <li>Stock-in and stock-out records</li>
              <li>Expiry date tracking</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Reporting & Analytics */}
      <div id="report" className="bg-blue-100 p-6 rounded-2xl shadow-md">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-28">
          <div className="w-full max-w-md">
            <img className="w-full h-auto" src={image4} alt="Reporting & Analytics" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-800">Reporting & Analytics</h1>
            <p className="text-gray-600 mt-2">
              Unlock the full potential of your inventory with smart insights and real-time analytics.
            </p>
            <button className="mt-4 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md">
              Learn more →
            </button>
            <ul className="list-disc text-gray-600 mt-4 pl-5">
              <li>Inventory valuation reports</li>
              <li>Sales and demand forecasting</li>
              <li>Shrinkage and wastage analysis</li>
              <li>Customizable dashboards with key metrics</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile & Cloud Access */}
      <div id="mobile" className="bg-red-100 p-6 rounded-2xl shadow-md">
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-14">
          <div className="w-full max-w-md">
            <img className="w-full h-auto" src={mobile} alt="Mobile & Cloud Access" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800">Mobile & Cloud Access</h2>
            <p className="text-gray-600 mt-2">
              Managing stock effectively is the backbone of a smooth-running business. A smart stock system prevents 
              shortages, cuts excess, and keeps products available.
            </p>
            <button className="mt-4 bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md">
              Learn more →
            </button>
            <ul className="list-disc text-gray-600 mt-4 pl-5">
              <li>Mobile app for on-the-go management</li>
              <li>Cloud-based system for remote access</li>
              <li>Offline mode with data sync capability</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
