import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';
import DispatchLayout from "../Layout/DispatchLayout";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement);

const DetailsReporting = () => {
  // Example data, replace with actual data from your API or state management
  const managerData = {
    name: 'Manish',
    totalOrders: 100,
    totalOrdersHold: 20,
    holdMoneyIssue: 8,
    holdProductNotAvailable: 12,
    gms: {
      today: 5000,
      yesterday: 4500,
      thisWeek: 30000,
      thisMonth: 120000,
      custom: 15000,
    },
    hold: {
      today: 2,
      yesterday: 3,
      thisWeek: 10,
      thisMonth: 40,
      custom: 5,
    },
  };

  // Data for GMS chart
  const gmsData = {
    labels: ['Today', 'Yesterday', 'This Week', 'This Month', 'Custom'],
    datasets: [
      {
        label: 'Gross Merchandise Sales (GMS)',
        data: [
          managerData.gms.today,
          managerData.gms.yesterday,
          managerData.gms.thisWeek,
          managerData.gms.thisMonth,
          managerData.gms.custom
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Data for Hold chart
  const holdData = {
    labels: ['Today', 'Yesterday', 'This Week', 'This Month', 'Custom'],
    datasets: [
      {
        label: 'Holds',
        data: [
          managerData.hold.today,
          managerData.hold.yesterday,
          managerData.hold.thisWeek,
          managerData.hold.thisMonth,
          managerData.hold.custom
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <DispatchLayout>
      <div className="relative max-w-7xl mx-auto p-6 mt-8 pb-20 min-h-screen">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-1">Manager Performance Dashboard</h1>

        {/* Manager Info */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          {/* <h2 className="text-xl font-semibold text-gray-800 mb-4">Manager: {managerData.name}</h2> */}
          <div className="grid grid-cols-2 gap-4">
            <button className="w-full p-4 bg-yellow-100 rounded-lg hover:bg-yellow-200 active:bg-yellow-300 transition duration-150 ease-in-out">
              <p className="text-lg font-medium text-yellow-800">Hold: Money Issue - {managerData.holdMoneyIssue}</p>
            </button>

            <button className="w-full p-4 bg-green-100 rounded-lg hover:bg-green-200 active:bg-green-300 transition duration-150 ease-in-out">
              <p className="text-lg font-medium text-green-800">Hold: Product Not Available - {managerData.holdProductNotAvailable}</p>
            </button>
          </div><br />

          <div className="grid grid-cols-2 gap-4">
            <button className="w-full p-4 bg-blue-100 rounded-lg hover:bg-blue-200 active:bg-blue-300 transition duration-150 ease-in-out">
              <p className="text-lg font-medium text-blue-800">Total Orders - {managerData.totalOrders}</p>
            </button>

            <button className="w-full p-4 bg-red-100 rounded-lg hover:bg-red-200 active:bg-red-300 transition duration-150 ease-in-out">
              <p className="text-lg font-medium text-red-800">Total Orders Hold - {managerData.totalOrdersHold}</p>
            </button>



            {/* <div className="p-4 bg-yellow-100 rounded-lg">
              <p className="text-lg font-medium text-yellow-800">Client Level GMS - {managerData.holdMoneyIssue}</p>
              <p className="text-3xl font-bold text-yellow-900">{managerData.holdMoneyIssue}</p>
            </div>
            <div className="p-4 bg-green-100 rounded-lg">
              <p className="text-lg font-medium text-green-800">Manager Level GMS - {managerData.holdProductNotAvailable}</p>
              <p className="text-3xl font-bold text-green-900">{managerData.holdProductNotAvailable}</p>
            </div> */}
          </div>
        </div>

        {/* GMS and Hold Analytics */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center underline">GMS and Hold Analytics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* GMS Chart */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Gross Merchandise Sales (GMS)</h3>
              <Line data={gmsData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
            </div>

            {/* Holds Chart */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Hold Analytics</h3>
              <Bar data={holdData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
            </div>
          </div>
        </div>
      </div>
    </DispatchLayout>
  );
};

export default DetailsReporting;
