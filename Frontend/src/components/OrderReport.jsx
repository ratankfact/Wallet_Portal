import React, { useState } from 'react';
import DispatchLayout from '../Layout/DispatchLayout';

const OrderReport = () => {
  const [formData, setFormData] = useState([
    {
      date: '',
      brandName: '',
      enrollment: '',
      amazonOrderId: '',
      manager: '',
      deliveryPartner: '',
      trackingId: '',
      sku: '',
      walletAction: '',
      remarks: ''
    }
  ]);

  const handleChange = (index, event) => {
    const { name, value } = event.target;
    const newFormData = [...formData];
    newFormData[index][name] = value;
    setFormData(newFormData);
  };

  const handleAddRow = () => {
    setFormData([
      ...formData,
      {
        date: '',
        brandName: '',
        enrollment: '',
        amazonOrderId: '',
        manager: '',
        deliveryPartner: '',
        trackingId: '',
        sku: '',
        walletAction: '',
        remarks: ''
      }
    ]);
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
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <DispatchLayout>
      <div className="relative max-w-6xl mx-auto pt-10 mt-5 pb-20 z-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Order Report
        </h1>

        <h2 className="text-xl font-semibold text-center text-gray-600 mb-6">
          The details Information about Order Report 
        </h2>

        <div className="overflow-x-auto mb-16">
          <form id="user-form" onSubmit={handleSubmit}>
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                  <th className="py-3 px-4 text-left sticky left-0 bg-gray-100 z-10">
                    SN.
                  </th>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Brand Name</th>
                  <th className="py-3 px-4 text-left">Enrollment</th>
                  <th className="py-3 px-4 text-left">Amazon Order ID</th>
                  <th className="py-3 px-4 text-left">Manager</th>
                  <th className="py-3 px-4 text-left">Delivery Partner</th>
                  <th className="py-3 px-4 text-left">Tracking ID</th>
                  <th className="py-3 px-4 text-left">SKU</th>
                  {/* <th className="py-3 px-4 text-left">Wallet Action</th> */}
                  <th className="py-3 px-4 text-left sticky right-0 bg-gray-200 z-10">
                    Remarks
                  </th>
                  <th className="py-3 px-4 text-center"></th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {formData.map((data, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <th className="py-3 px-4 text-left sticky left-0 bg-white z-10">
                      {index + 1}
                    </th>
                    <td className="py-1 text-left">
                      <input
                        type="date"
                        name="date"
                        value={data.date}
                        onChange={(event) => handleChange(index, event)}
                        className="w-35 px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                      />
                    </td>
                    <td className="py-3 px-4 text-left">
                      <input
                        type="text"
                        name="brandName"
                        value={data.brandName}
                        onChange={(event) => handleChange(index, event)}
                        className="w-40 px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                      />
                    </td>
                    <td className="py-3 px-4 text-left">
                      <input
                        type="text"
                        name="enrollment"
                        value={data.enrollment}
                        onChange={(event) => handleChange(index, event)}
                        className="w-40 px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                      />
                    </td>
                    <td className="py-3 px-4 text-left">
                      <input
                        type="text"
                        name="amazonOrderId"
                        value={data.amazonOrderId}
                        onChange={(event) => handleChange(index, event)}
                        className="w-40 px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                      />
                    </td>
                    <td className="py-3 px-4 text-left">
                      <select
                        name="manager"
                        value={data.manager}
                        onChange={(event) => handleChange(index, event)}
                        className="w-40 px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                      >
                        <option value="">Select Manager</option>
                        <option value="TL-13">TL-13</option>
                        <option value="TL-2">TL-2</option>
                        <option value="TL-6">TL-6</option>
                        <option value="TL-8">TL-8</option>
                      </select>
                    </td>
                    <td className="py-3 px-4 text-left">
                      <select
                        name="deliveryPartner"
                        value={data.deliveryPartner}
                        onChange={(event) => handleChange(index, event)}
                        className="w-45 px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                      >
                        <option value="">Select Delivery Partner</option>
                        <option value="Tirupati">Tirupati</option>
                        <option value="DTDC">DTDC</option>
                      </select>
                    </td>
                    <td className="py-3 px-4 text-left">
                      <input
                        type="text"
                        name="trackingId"
                        value={data.trackingId}
                        onChange={(event) => handleChange(index, event)}
                        className="w-40 px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                      />
                    </td>
                    <td className="py-3 px-4 text-left">
                      <input
                        type="text"
                        name="sku"
                        value={data.sku}
                        onChange={(event) => handleChange(index, event)}
                        className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                      />
                    </td>
                    {/* <td className="py-3 px-4 text-left">
                      <select
                        name="walletAction"
                        value={data.walletAction}
                        onChange={(event) => handleChange(index, event)}
                        className="w-64 px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                      >
                        <option value="">Select Wallet Action</option>
                        <option value="Recharge and Deduct">Recharge and Deduct</option>
                        <option value="Done Hold">Done Hold</option>
                        <option value="Pending">Pending</option>
                      </select>
                    </td> */}
                    <td className="py-3 px-4 text-left sticky right-0 bg-white z-10">
                      <input
                        type="text"
                        name="remarks"
                        value={data.remarks}
                        onChange={(event) => handleChange(index, event)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
              <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                  <th className="py-3 px-4 text-left sticky left-0 bg-gray-100 z-10">
                    SN.
                  </th>
                  <th className="py-3 px-4 text-left">Date</th>
                  <th className="py-3 px-4 text-left">Brand Name</th>
                  <th className="py-3 px-4 text-left">Enrollment</th>
                  <th className="py-3 px-4 text-left">Amazon Order ID</th>
                  <th className="py-3 px-4 text-left">Manager</th>
                  <th className="py-3 px-4 text-left">Delivery Partner</th>
                  <th className="py-3 px-4 text-left">Tracking ID</th>
                  <th className="py-3 px-4 text-left">SKU</th>
                  {/* <th className="py-3 px-4 text-left">Wallet Action</th> */}
                  <th className="py-3 px-4 text-left sticky right-0 bg-gray-200 z-10">
                    Remarks
                  </th>
                  <th className="py-3 px-4 text-center"></th>
                </tr>
            </table>

            <div className="flex justify-between mt-6">
              <button
                type="button"
                onClick={handleAddRow}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors duration-200"
              >
                Add More
              </button>

              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition-colors duration-200 fixed bottom-4 right-4 z-20"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </DispatchLayout>
  );
};

export default OrderReport;
