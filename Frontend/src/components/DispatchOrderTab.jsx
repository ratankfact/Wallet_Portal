import React, { useState } from 'react';
import DispatchLayout from '../Layout/DispatchLayout';
import { Link } from 'react-router-dom';

const DispatchOrderTab = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      enrol: 'AZ123',
      date: '2024-08-26',
      paymentStatus: 'Paid',
      total: 'RS.200',
      manager: 'Akhil'
    },
    {
      id: 2,
      enrol: 'AZ124',
      date: '2024-08-27',
      paymentStatus: 'Pending',
      total: 'RS.150',
      manager: 'Uzair'
    },
    // Additional sample data can be added here
  ]);

  const handleCreateOrder = () => {
    const newOrder = {
      id: orders.length + 1,
      enrol: `EN${125 + orders.length}`,
      date: new Date().toISOString().split('T')[0],
      paymentStatus: 'Pending',
      total: `RS.${(orders.length + 1) * 100}`,
      manager: `Manager ${String.fromCharCode(65 + orders.length)}`
    };
    setOrders([...orders, newOrder]);
  };

  const handleViewBodSheet = () => {
    alert('Viewing D.O.D Sheet');
  };

  return (
    <DispatchLayout>
      <div className="relative max-w-6xl mx-auto p-6 mt-5 pb-20 z-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Dispatch Orders Tab
        </h2>

        <div className="mb-6 flex justify-center gap-4">
          <Link to="/dispatch-team/create-order">
            <button
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors duration-200"
            >
              Create Order
            </button>
          </Link>
          <Link to="/dispatch-team/daily-order-dispatch">
            <button
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition-colors duration-200"
              onClick={handleViewBodSheet}
            >
              View D.O.D Sheet
            </button>
          </Link>
        </div>

        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
              <tr>
                <th className="py-1 px-4 text-left">Order ID</th>
                <th className="py-1 px-4 text-left">Enrol</th>
                <th className="py-1 px-4 text-left">Date</th>
                <th className="py-1 px-4 text-left">Payment Status</th>
                <th className="py-1 px-4 text-left">Total</th>
                <th className="py-1 px-4 text-left">Manager</th>
                <th className="py-1 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-0 px-4">{order.id}</td>
                  <td className="py-0 px-4">{order.enrol}</td>
                  <td className="py-0 px-4">{order.date}</td>
                  <td className="py-0 px-4">{order.paymentStatus}</td>
                  <td className="py-0 px-4">{order.total}</td>
                  <td className="py-0 px-4">{order.manager}</td>
                  <td className="py-0 px-4 text-center">
                    <button className="px-4 py-1 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition-colors duration-200">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <thead className="bg-gray-100 text-back uppercase text-sm leading-normal">
              <tr>
                <th className="py-1 px-4 text-left">Order ID</th>
                <th className="py-1 px-4 text-left">Enrol</th>
                <th className="py-1 px-4 text-left">Date</th>
                <th className="py-1 px-4 text-left">Payment Status</th>
                <th className="py-1 px-4 text-left">Total</th>
                <th className="py-1 px-4 text-left">Manager</th>
                <th className="py-1 px-4 text-center">Actions</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </DispatchLayout>
  );
};

export default DispatchOrderTab;
