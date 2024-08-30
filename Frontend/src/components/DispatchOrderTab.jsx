import React, { useState } from 'react';
import DispatchLayout from '../Layout/DispatchLayout';
import { Link } from 'react-router-dom'; // Adjusted import for Link

const UserForm = () => {
  const [formData, setFormData] = useState([
    {
      date: '2024-08-28',
      brandName: 'Brand A',
      enrollment: 'ENR-12345',
      amazonOrderId: 'AMZ-67890',
      manager: 'TL-13',
      deliveryPartner: 'Tirupati',
      trackingId: 'TRK-98765',
      sku: 'SKU-001',
      walletAction: 'Recharge and Deduct',
      remarks: 'Product Not Available',
      isEditing: false,
    },
    // ... other data
  ]);

  const handleEditToggle = (index) => {
    const newFormData = [...formData];
    newFormData[index].isEditing = !newFormData[index].isEditing;
    setFormData(newFormData);
  };

  const handlePay = (index) => {
    // Handle the payment logic here
    console.log('Pay clicked for index:', index);
  };

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newFormData = [...formData];
    newFormData[index][name] = value;
    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);

    fetch('/api/save-user-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const getRowClass = (walletAction) => {
    if (walletAction === 'Done Hold') return 'bg-yellow-200';
    if (walletAction === 'Pending') return 'bg-red-200';
    return '';
  };

  return (
    <DispatchLayout>
      <div className="relative max-w-6xl mx-auto p-6 mt-5 pb-20 z-10 h-8 w-30">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          DOD Table Data
        </h1>

        <h2 className="text-xl font-semibold text-center text-gray-600 mb-6">
          A detailed list of users and their information
        </h2>

        <div className="mb-6 flex justify-center gap-4">
          <Link to="/dispatch-team/create-order">
            <button
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors duration-200"
            >
              Create Order
            </button>
          </Link>
          {/* <Link to="/dispatch-team/daily-order-dispatch">
            <button
              className="px-4 py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition-colors duration-200"
              // onClick={handleViewBodSheet} // Removed as it's not defined
            >
              View D.O.D Sheet
            </button>
          </Link> */}
        </div>

        <div className="overflow-x-auto mb-16">
          <form id="user-form" onSubmit={handleSubmit}>
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-black uppercase text-sm leading-normal h-8">
                  <th className="py-3 px-4 text-left whitespace-nowrap">SN.</th>
                  <th className="py-3 px-4 text-left whitespace-nowrap">Date</th>
                  <th className="py-3 px-4 text-left whitespace-nowrap">Brand Name</th>
                  <th className="py-3 px-4 text-left whitespace-nowrap">Enrollment</th>
                  <th className="py-3 px-4 text-left whitespace-nowrap">Amazon Order ID</th>
                  <th className="py-3 px-4 text-left whitespace-nowrap">Manager</th>
                  <th className="py-3 px-4 text-left whitespace-nowrap">Delivery Partner</th>
                  <th className="py-3 px-4 text-left whitespace-nowrap">Tracking ID</th>
                  <th className="py-3 px-4 text-left whitespace-nowrap">SKU</th>
                  <th className="py-3 px-4 text-left whitespace-nowrap">Wallet Action</th>
                  <th className="py-3 px-4 text-left whitespace-nowrap">Remarks</th>
                  <th className="py-3 px-4 text-center whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody className="text-gray-900 text-sm font-light whitespace-nowrap leading-tight">
                {formData.map((data, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 hover:bg-gray-100 ${getRowClass(data.walletAction)}`}
                  >
                    <th className={`py-2 px-4 text-left ${getRowClass(data.walletAction)}`}>
                      {index + 1}
                    </th>
                    {data.isEditing ? (
                      <>
                        <td className={`py-2 px-4 text-left ${getRowClass(data.walletAction)}`}>
                          <input
                            type="date"
                            name="date"
                            value={data.date}
                            onChange={(event) => handleChange(index, event)}
                            className="w-32 px-3 py-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                          />
                        </td>
                        <td className={`py-2 px-4 text-left ${getRowClass(data.walletAction)}`}>
                          <input
                            type="text"
                            name="brandName"
                            value={data.brandName}
                            onChange={(event) => handleChange(index, event)}
                            className="w-40 px-3 py-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                          />
                        </td>
                        <td className={`py-2 px-4 text-left ${getRowClass(data.walletAction)}`}>
                          <input
                            type="text"
                            name="enrollment"
                            value={data.enrollment}
                            onChange={(event) => handleChange(index, event)}
                            className="w-40 px-3 py-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                          />
                        </td>
                        <td className={`py-2 px-4 text-left ${getRowClass(data.walletAction)}`}>
                          <input
                            type="text"
                            name="amazonOrderId"
                            value={data.amazonOrderId}
                            onChange={(event) => handleChange(index, event)}
                            className="w-48 px-3 py-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                          />
                        </td>
                        <td className={`py-2 px-4 text-left ${getRowClass(data.walletAction)}`}>
                          <select
                            name="manager"
                            value={data.manager}
                            onChange={(event) => handleChange(index, event)}
                            className="w-32 px-3 py-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                          >
                            <option value="">Select Manager</option>
                            <option value="TL-13">TL-13</option>
                            <option value="TL-2">TL-2</option>
                            <option value="TL-6">TL-6</option>
                            <option value="TL-8">TL-8</option>
                          </select>
                        </td>
                        <td className={`py-2 px-4 text-left ${getRowClass(data.walletAction)}`}>
                          <select
                            name="deliveryPartner"
                            value={data.deliveryPartner}
                            onChange={(event) => handleChange(index, event)}
                            className="w-40 px-3 py-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                          >
                            <option value="">Select Delivery Partner</option>
                            <option value="Tirupati">Tirupati</option>
                            <option value="DTDC">DTDC</option>
                          </select>
                        </td>
                        <td className={`py-2 px-4 text-left ${getRowClass(data.walletAction)}`}>
                          <input
                            type="text"
                            name="trackingId"
                            value={data.trackingId}
                            onChange={(event) => handleChange(index, event)}
                            className="w-40 px-3 py-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                          />
                        </td>
                        <td className={`py-2 px-4 text-left ${getRowClass(data.walletAction)}`}>
                          <input
                            type="text"
                            name="sku"
                            value={data.sku}
                            onChange={(event) => handleChange(index, event)}
                            className="w-32 px-3 py-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                          />
                        </td>
                        <td className={`py-2 px-4 text-left ${getRowClass(data.walletAction)}`}>
                          <select
                            name="walletAction"
                            value={data.walletAction}
                            onChange={(event) => handleChange(index, event)}
                            className="w-48 px-3 py-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                          >
                            <option value="">Select Wallet Action</option>
                            <option value="Recharge and Deduct">Recharge and Deduct</option>
                            <option value="Done Hold">Done Hold</option>
                            <option value="Pending">Pending</option>
                          </select>
                        </td>
                        <td className={`py-2 px-4 text-left ${getRowClass(data.walletAction)}`}>
                          <select
                            name="remarks"
                            value={data.remarks}
                            onChange={(event) => handleChange(index, event)}
                            className="w-48 px-3 py-1 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                          >
                            <option value="">Select Remarks</option>
                            <option value="Product Not Available">Product Not Available</option>
                            <option value="Money Issue">Money Issue</option>
                            <option value="Delivery Issue">Delivery Issue</option>
                            <option value="Custom">Custom</option>
                          </select>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className={`py-2 px-4 text-left ${getRowClass(data.walletAction)}`}>{data.date}</td>
                        <td className={`py-2 px-4 text-left ${getRowClass(data.walletAction)}`}>{data.brandName}</td>
                        <td className={`py-2 px-4 text-left ${getRowClass(data.walletAction)}`}>{data.enrollment}</td>
                        <td className={`py-2 px-4 text-left ${getRowClass(data.walletAction)}`}>{data.amazonOrderId}</td>
                        <td className={`py-2 px-4 text-left ${getRowClass(data.walletAction)}`}>{data.manager}</td>
                        <td className={`py-2 px-4 text-left ${getRowClass(data.walletAction)}`}>{data.deliveryPartner}</td>
                        <td className={`py-2 px-4 text-left ${getRowClass(data.walletAction)}`}>{data.trackingId}</td>
                        <td className={`py-2 px-4 text-left ${getRowClass(data.walletAction)}`}>{data.sku}</td>
                        <td className={`py-2 px-4 text-left ${getRowClass(data.walletAction)}`}>{data.walletAction}</td>
                        <td className={`py-2 px-4 text-left ${getRowClass(data.walletAction)}`}>
                          {data.remarks}
                        </td>
                      </>
                    )}
                    <td className={`py-2 px-4 text-center ${getRowClass(data.walletAction)}`}>
                      {data.walletAction === 'Pending' ? (
                        <Link to="/dispatch-team/add-items/">
                        <button
                          type="button"
                          onClick={() => handlePay(index)}
                          className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-3 rounded-full transition duration-300"
                        >
                          Pay
                        </button>
                        </Link>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleEditToggle(index)}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded-full transition duration-300"
                        >
                          {data.isEditing ? 'Save' : 'Edit'}
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
              >
                Save All
              </button>
            </div>
          </form>
        </div>
      </div>
    </DispatchLayout>
  );
};

export default UserForm;
