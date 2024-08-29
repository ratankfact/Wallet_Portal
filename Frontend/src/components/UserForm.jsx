import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState([
    {
      date: '',
      party: '',
      enrollment: '',
      amazonOrderId: '',
      manager: '',
      deliveryPartner: '',
      trackingId: '',
      portalUpdate: '',
      sku: '',
      walletAction: '',
      remarks: '' // Added field for remarks
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
        party: '',
        enrollment: '',
        amazonOrderId: '',
        manager: '',
        deliveryPartner: '',
        trackingId: '',
        portalUpdate: '',
        sku: '',
        walletAction: '',
        remarks: '' // Added field for remarks
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
    <div className="relative max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
        DOD Table Data
      </h1>
      
      <h2 className="text-xl font-semibold text-center text-gray-600 mb-6">
        A detailed list of users and their information
      </h2>

      <div className="overflow-x-auto mb-16">
        <form onSubmit={handleSubmit}>
          <table className="table table-xs table-pin-rows table-pin-cols border-collapse border border-gray-300 w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 sticky left-0 bg-gray-100 z-10">
                  SN.
                </th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-16 py-2">Party</th>
                <th className="border border-gray-300 px-10 py-2">Enrollment</th>
                <th className="border border-gray-300 px-20 py-2">Amazon Order ID</th>
                <th className="border border-gray-300 px-16 py-2">Manager</th>
                <th className="border border-gray-300 px-14 py-2">Delivery Partner</th>
                <th className="border border-gray-300 px-14 py-2">Tracking ID</th>
                <th className="border border-gray-300 px-16 py-2">SKU</th>
                <th className="border border-gray-300 px-14 py-2">Wallet Action</th>
                <th className="border border-gray-300 px-14 py-2 sticky right-0 bg-gray-100 z-10">
                  Remarks
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center"></th>
              </tr>
            </thead>
            <tbody>
              {formData.map((data, index) => (
                <tr key={index}>
                  <th className="border border-gray-300 px-4 py-2 sticky left-0 bg-white z-10">
                    {index + 1} {/* Automatically generate serial number */}
                  </th>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="date"
                      name="date"
                      value={data.date}
                      onChange={(event) => handleChange(index, event)}
                      className="w-full px-2 py-1 border border-gray-300"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      name="party"
                      value={data.party}
                      onChange={(event) => handleChange(index, event)}
                      className="w-full px-2 py-1 border border-gray-300"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      name="enrollment"
                      value={data.enrollment}
                      onChange={(event) => handleChange(index, event)}
                      className="w-full px-2 py-1 border border-gray-300"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      name="amazonOrderId"
                      value={data.amazonOrderId}
                      onChange={(event) => handleChange(index, event)}
                      className="w-full px-2 py-1 border border-gray-300"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <select
                      name="manager"
                      value={data.manager}
                      onChange={(event) => handleChange(index, event)}
                      className="w-full px-2 py-1 border border-gray-300"
                    >
                      <option value="">Select Manager</option>
                      <option value="TL-13">TL-13</option>
                      <option value="TL-2">TL-2</option>
                      <option value="TL-6">TL-6</option>
                      <option value="TL-8">TL-8</option>
                    </select>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <select
                      name="deliveryPartner"
                      value={data.deliveryPartner}
                      onChange={(event) => handleChange(index, event)}
                      className="w-full px-2 py-1 border border-gray-300"
                    >
                      <option value="">Select Delivery Partner</option>
                      <option value="Tirupati">Tirupati</option>
                      <option value="DTDC">DTDC</option>
                    </select>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      name="trackingId"
                      value={data.trackingId}
                      onChange={(event) => handleChange(index, event)}
                      className="w-full px-2 py-1 border border-gray-300"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="text"
                      name="sku"
                      value={data.sku}
                      onChange={(event) => handleChange(index, event)}
                      className="w-full px-2 py-1 border border-gray-300"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <select
                      name="walletAction"
                      value={data.walletAction}
                      onChange={(event) => handleChange(index, event)}
                      className="w-full px-2 py-1 border border-gray-300"
                    >
                      <option value="">Select Wallet Action</option>
                      <option value="Recharge and Deduct">Recharge and Deduct</option>
                      <option value="Done Hold">Done Hold</option>
                    </select>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 sticky right-0 bg-white z-10">
                    <select
                      name="remarks"
                      value={data.remarks}
                      onChange={(event) => handleChange(index, event)}
                      className="w-full px-2 py-1 border border-gray-300"
                    >
                      <option value="">Select Remarks</option>
                      <option value="Product Not Available">Product Not Available</option>
                      <option value="Money Issue">Money Issue</option>
                      <option value="Delivery Issue">Delivery Issue</option>
                      <option value="Custom">Custom</option>
                    </select>
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {index === formData.length - 1 && (
                      <button
                        type="button"
                        onClick={handleAddRow}
                        className="text-green-500 font-bold text-lg"
                      >
                        +
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 sticky left-0 bg-gray-100 z-10">
                  SN.
                </th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
                <th className="border border-gray-300 px-16 py-2">Party</th>
                <th className="border border-gray-300 px-10 py-2">Enrollment</th>
                <th className="border border-gray-300 px-20 py-2">Amazon Order ID</th>
                <th className="border border-gray-300 px-16 py-2">Manager</th>
                <th className="border border-gray-300 px-14 py-2">Delivery Partner</th>
                <th className="border border-gray-300 px-14 py-2">Tracking ID</th>
                <th className="border border-gray-300 px-16 py-2">SKU</th>
                <th className="border border-gray-300 px-14 py-2">Wallet Action</th>
                <th className="border border-gray-300 px-14 py-2 sticky right-0 bg-gray-100 z-10">
                  Remarks
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center"></th>
              </tr>
            </tfoot>
          </table>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
            >
              Submit Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;