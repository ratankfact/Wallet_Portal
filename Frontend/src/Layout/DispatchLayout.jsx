import React, { useState } from 'react';
import { FaShoppingCart, FaUndoAlt, FaWallet, FaHeadset, FaChartBar, FaLuggageCart } from 'react-icons/fa';
import { MdProductionQuantityLimits } from "react-icons/md";
import { VscGitPullRequestCreate } from "react-icons/vsc";

import Navbar from '../components/Navbar';
import Logoratan from '../assets/Logoratan.png';
import logo2 from '../assets/logo2.png';
import SidebarFooterImage from '../assets/SidebarFooterImage.png';

const AdminLayout = ({ children }) => { // Add children prop
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Initially collapsed

  return (
    <div className="min-h-screen dark:bg-slate-900 dark:text-white flex flex-col relative">
      {/* Navbar */}
      <Navbar />

      {/* Interactive Kite Shape */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="kite-shape"></div>
      </div>

      <div className="flex flex-1 dark:bg-slate-900 dark:text-white z-10">
        {/* Sidebar */}
        <div
          className={`bg-Eigengrau from-black via-gray-700 to-white text-white border-r-4 border-r-red-500 ${isSidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 p-4 flex flex-col justify-between relative`}
          onMouseEnter={() => setIsSidebarOpen(true)}
          onMouseLeave={() => setIsSidebarOpen(false)}
        >
          {/* Logo Container */}
          <div className="flex-shrink-0 mb-4 text-left">
            <img
              src={isSidebarOpen ? logo2 : Logoratan}
              alt="Sidebar Logo"
              className={`${isSidebarOpen ? 'w-[169px] h-[51px]' : 'w-[52px] h-[38px]'}`}
            />
          </div>

          <nav className="flex-grow mt-0">
            <a href="/dispatch-team/dispatch-order-tab" className="flex items-center space-x-4 py-2 hover:text-gray-200 bg-gray-800 hover:bg-gray-700 rounded-lg px-4 transition duration-200 text-xs">
              <FaShoppingCart className="text-lg" />
              {isSidebarOpen && <span>Order</span>}
            </a>
            <a href="/dispatch-team/create-order" className="flex items-center space-x-4 py-2 hover:text-gray-200 bg-gray-800 hover:bg-gray-700 rounded-lg px-4 transition duration-200 mt-2 text-xs">
              <VscGitPullRequestCreate className="text-lg" />
              {isSidebarOpen && <span>Create Order</span>}
            </a>
            <a href="/dispatch-team/upload-products" className="flex items-center space-x-4 py-2 hover:text-gray-200 bg-gray-800 hover:bg-gray-700 rounded-lg px-4 transition duration-200 mt-2 text-xs">
              <MdProductionQuantityLimits className="text-lg" />
              {isSidebarOpen && <span>Products</span>}
            </a>
            <a href="/dispatch-team/order-report" className="flex items-center space-x-4 py-2 hover:text-gray-200 bg-gray-800 hover:bg-gray-700 rounded-lg px-4 transition duration-200 mt-2 text-xs">
              <FaChartBar className="text-lg" />
              {isSidebarOpen && <span>Order report</span>}
            </a>
            <a href="/dispatch-team/details-reporting" className="flex items-center space-x-4 py-2 hover:text-gray-200 bg-gray-800 hover:bg-gray-700 rounded-lg px-4 transition duration-200 mt-2 text-xs">
              <FaLuggageCart className="text-lg" />
              {isSidebarOpen && <span>Details Reporting</span>}
            </a>
            {/* <a target='blank' href="https://support.saumiccraft.com/" className="flex items-center space-x-4 py-2 hover:text-gray-200 bg-gray-800 hover:bg-gray-700 rounded-lg px-4 transition duration-200 mt-2 text-xs">
              <FaHeadset className="text-lg" />
              {isSidebarOpen && <span>Support</span>}
            </a> */}
          </nav>

          {/* Sidebar Footer */}
          {/* <div className="flex-shrink-0 mt-4 -mb-4 relative">
            <div
              className="h-10 w-100 bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${SidebarFooterImage})`,
                backgroundSize: 'contain',
              }}
            ></div>
          </div> */}
        </div>

        {/* Main Content Area */}
        <div className="flex-grow p-6">
          {children} {/* Render children here */}
        </div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default AdminLayout;
