// import React, { useState } from 'react';
// import AdminLayout from '../Layout/ClientLayout';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCrown } from '@fortawesome/free-solid-svg-icons'; // Import the gold crown icon

// const OrdersTable = () => {
//   // Sample data for demonstration
//   const [orders, setOrders] = useState([
//     {
//       orderId: '001',
//       amazonOrderId: 'AMZ123456',
//       date: '2024-08-20',
//       status: 'Shipped',
//       total: '$100.00',
//       deliveryPartner: 'DHL',
//       trackingId: 'DHL12345',
//     },
//     {
//       orderId: '002',
//       amazonOrderId: 'AMZ654321',
//       date: '2024-08-21',
//       status: 'Processing',
//       total: '$200.00',
//       deliveryPartner: 'FedEx',
//       trackingId: 'FED67890',
//     },
//     // Add more sample orders as needed
//   ]);

//   const handleTrack = (trackingId) => {
//     // Add tracking logic here if needed
//   };

//   const handlePay = (orderId) => {
//     // Add payment logic here if needed
//   };

//   const handleView = (orderId) => {
//     // Add view logic here if needed
//   };

//   const handleCancel = (orderId) => {
//     // Add cancel logic here if needed
//   };

//   return (
//     <AdminLayout>
//       <div className="max-w-6xl mx-auto my-8 p-4 bg-white shadow-md rounded-md">
//         {/* Header Section */}
//         <div className="flex justify-between items-center mb-6 text-black">
//           <h3 className="text-lg font-bold">Gaurav Sharma<br />AZ1223</h3>
//           <h3 className="text-lg font-bold animate-bounce flex items-center">
//             Tiar - Gold
//             <FontAwesomeIcon icon={faCrown} className="text-yellow-500 ml-2" /> {/* Gold Crown Icon */}
//           </h3>
//           <h3 className="text-lg font-bold">
//             Rs 00.00<br />
//             <span className="text-purple-500">GMS</span>
//           </h3>
//         </div>

//         {/* Orders Table Container with Scrolling */}
//         <div className="max-h-80 overflow-y-auto">
//           <table className="min-w-full bg-white border-collapse">
//             <thead>
//               <tr>
//                 <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Order ID</th>
//                 <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Amazon Order ID</th>
//                 <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
//                 <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
//                 <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Total</th>
//                 <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Delivery Partner</th>
//                 <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tracking ID</th>
//                 <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
//                 <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Track</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {orders.map((order, index) => (
//                 <tr key={index} className="hover:bg-gray-100">
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.orderId}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.amazonOrderId}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.date}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.status}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.total}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.deliveryPartner}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.trackingId}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex space-x-2">
//                     <button
//                       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                       onClick={() => handlePay(order.orderId)}
//                     >
//                       Pay
//                     </button>
//                     <Link to={"/order-view/"}>
//                       <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
//                         View
//                       </button>
//                     </Link>
//                     <button
//                       className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//                       onClick={() => handleCancel(order.orderId)}
//                     >
//                       Invoice
//                     </button>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                     <button
//                       className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//                       onClick={() => handleTrack(order.trackingId)}
//                     >
//                       Track
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </AdminLayout>
//   );
// };

// export default OrdersTable;

import React, { useState } from 'react';
import AdminLayout from '../Layout/ClientLayout';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons'; // Import the gold crown icon
import { Table, Button } from 'antd'; // Import Ant Design components

const OrdersTable = () => {
  // Sample data for demonstration
  const [orders] = useState([
    {
      key: '001',
      orderId: '001',
      amazonOrderId: 'AMZ123456',
      date: '2024-08-20',
      status: 'Shipped',
      total: '$100.00',
      deliveryPartner: 'DHL',
      trackingId: 'DHL12345',
    },
    {
      key: '002',
      orderId: '002',
      amazonOrderId: 'AMZ654321',
      date: '2024-08-21',
      status: 'Processing',
      total: '$200.00',
      deliveryPartner: 'FedEx',
      trackingId: 'FED67890',
    },
    // Add more sample orders as needed
  ]);

  // Define columns for the Ant Design table
  const columns = [
    {
      title: 'Order ID',
      dataIndex: 'orderId',
      key: 'orderId',
    },
    {
      title: 'Amazon Order ID',
      dataIndex: 'amazonOrderId',
      key: 'amazonOrderId',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Delivery Partner',
      dataIndex: 'deliveryPartner',
      key: 'deliveryPartner',
    },
    {
      title: 'Tracking ID',
      dataIndex: 'trackingId',
      key: 'trackingId',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <div className="flex space-x-2">
          <Button type="primary" onClick={() => handlePay(record.orderId)}>Pay</Button>
          <Link to={`/order-view/`}>
            <Button type="default">View</Button>
          </Link>
          <Button type="danger" onClick={() => handleCancel(record.orderId)}>Invoice</Button>
        </div>
      ),
    },
    {
      title: 'Track',
      key: 'track',
      render: (_, record) => (
        <Button type="primary" onClick={() => handleTrack(record.trackingId)}>Track</Button>
      ),
    },
  ];

  const handleTrack = (trackingId) => {
    // Add tracking logic here if needed
  };

  const handlePay = (orderId) => {
    // Add payment logic here if needed
  };

  const handleCancel = (orderId) => {
    // Add cancel logic here if needed
  };

  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto my-8 p-4 bg-white shadow-md rounded-md">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6 text-black">
          <h3 className="text-lg font-bold">Gaurav Sharma<br />AZ1223</h3>
          <h3 className="text-lg font-bold animate-bounce flex items-center">
            Tiar - Gold
            <FontAwesomeIcon icon={faCrown} className="text-yellow-500 ml-2" /> {/* Gold Crown Icon */}
          </h3>
          <h3 className="text-lg font-bold">
            Rs 00.00<br />
            <span className="text-purple-500">GMS</span>
          </h3>
        </div>

        {/* Orders Table using Ant Design */}
        <Table
          columns={columns}
          dataSource={orders}
          pagination={{ pageSize: 5 }}
          className="max-h-80 overflow-y-auto"
        />
      </div>
    </AdminLayout>
  );
};

export default OrdersTable;
