import React, { useState } from 'react';
import { FaSearch, FaTimesCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import DispatchLayout from '../Layout/DispatchLayout';

const CreateOrder = () => {
  const [filter, setFilter] = useState('');

  const orders = [
    { id: 1, brandName: 'Antiq Craft', maskMobNumber: '123-456-7890', address: '123 Street, City', walletBalance: 'RS.100' },
    { id: 2, brandName: 'Saumic Craft', maskMobNumber: '098-765-4321', address: '456 Jaipur, City', walletBalance: 'RS.200' },
  ];

  const filteredOrders = orders.filter(order =>
    order.brandName.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <DispatchLayout>
      <div className="flex justify-center mt-14">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Filter by Enrol"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full p-3 pl-10 pr-10 border rounded-md shadow-sm focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200 transition duration-200 ease-in-out"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400 pointer-events-none" />
          {filter && (
            <FaTimesCircle
              className="absolute right-3 top-3 text-gray-400 cursor-pointer hover:text-gray-600 transition duration-200"
              onClick={() => setFilter('')}
            />
          )}
        </div>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-0 px-6 text-left">Brand Name</th>
              <th className="py-3 px-6 text-left">Mask Mob. Number</th>
              <th className="py-3 px-6 text-left">Address</th>
              <th className="py-3 px-6 text-left">Wallet Balance</th>
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(order => (
              <tr key={order.id} className="hover:bg-gray-100 transition duration-300 ease-in-out">
                <td className="py-0 px-6 border-b border-gray-200">{order.brandName}</td>
                <td className="py-0 px-6 border-b border-gray-200">{order.maskMobNumber}</td>
                <td className="py-0 px-6 border-b border-gray-200">{order.address}</td>
                <td className="py-0 px-6 border-b border-gray-200">{order.walletBalance}</td>
                <td className="py-0 px-6 border-b border-gray-200">
                  <Link to={`/dispatch-team/add-items/`}>
                    <button className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200 transition duration-200">
                      Add Items
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DispatchLayout>
  );
};

export default CreateOrder;