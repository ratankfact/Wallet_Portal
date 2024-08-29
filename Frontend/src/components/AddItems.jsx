import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import DispatchLayout from '../Layout/DispatchLayout';
import Modal from './Modal'; 
const AddItems = () => {
  const { orderId } = useParams();
  const [items, setItems] = useState([
    { sku: '', name: '', price: '', quantity: '', amazonOrderId: '', trackingId: '', shippingPartner: '', customPartner: '' },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedItems = [...items];
    updatedItems[index][name] = value;

    // Hide the custom input field if a different option is selected
    if (name === 'shippingPartner' && value !== 'Custom') {
      updatedItems[index].customPartner = '';
    }

    setItems(updatedItems);
  };

  const handleAddRow = () => {
    setItems([
      ...items,
      { sku: '', name: '', price: '', quantity: '', amazonOrderId: '', trackingId: '', shippingPartner: '', customPartner: '' },
    ]);
  };

  const handleRemoveRow = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', items);
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setCurrentIndex(null);
  };

  const handleCustomSubmit = (customPartner) => {
    const updatedItems = [...items];
    updatedItems[currentIndex].shippingPartner = customPartner;
    updatedItems[currentIndex].customPartner = customPartner;
    setItems(updatedItems);
    closeModal();
  };

  return (
    <DispatchLayout>
      <main className="max-w-6xl mx-auto my-8 p-4 bg-white shadow-md rounded-md">
        <h1 className="text-lg font-bold mb-6 text-center underline">Add Items for Order {orderId}</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md mb-6">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border-collapse">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">SKU</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product Name</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Amazon Order ID</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Shipping Partner</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Tracking ID</th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {items.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100 transition duration-300 ease-in-out">
                    <td className="px-3 py-1 whitespace-nowrap text-sm text-gray-900">
                      <input
                        type="text"
                        name="sku"
                        value={item.sku}
                        onChange={(e) => handleChange(index, e)}
                        className="w-20 py-1 px-3 border rounded-md focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <input
                        type="text"
                        name="name"
                        value={item.name}
                        onChange={(e) => handleChange(index, e)}
                        className="w-30 py-1 px-3 border rounded-md focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <input
                        type="text"
                        name="price"
                        value={item.price}
                        onChange={(e) => handleChange(index, e)}
                        className="w-20 py-1 px-3 border rounded-md focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <input
                        type="number"
                        name="quantity"
                        value={item.quantity}
                        onChange={(e) => handleChange(index, e)}
                        className="w-20 py-1 px-3 border rounded-md focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <input
                        type="text"
                        name="amazonOrderId"
                        value={item.amazonOrderId}
                        onChange={(e) => handleChange(index, e)}
                        className="w-30 py-1 px-3 border rounded-md focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <select
                        name="shippingPartner"
                        value={item.shippingPartner}
                        onChange={(e) => {
                          const value = e.target.value;
                          handleChange(index, e);
                          if (value === 'Custom') {
                            openModal(index);
                          }
                        }}
                        className="w-30 py-1 px-3 border rounded-md focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
                      >
                        <option value="">Select Shipping Partner</option>
                        <option value="DTDC">DTDC</option>
                        <option value="Tirupati">Tirupati</option>
                        <option value="Maruti">Maruti</option>
                        <option value="Delivery">Delivery</option>
                        <option value="Custom">Custom</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <input
                        type="text"
                        name="trackingId"
                        value={item.trackingId}
                        onChange={(e) => handleChange(index, e)}
                        className="w-25 py-1 px-3 border rounded-md focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-200"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <button
                        type="button"
                        onClick={() => handleRemoveRow(index)}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-200"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={handleAddRow}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-green-200"
            >
              Add Row
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-200"
            >
              Save Items
            </button>
          </div>
        </form>
      </main>

      {/* Modal Component */}
      <Modal
        isVisible={modalVisible}
        onClose={closeModal}
        onSubmit={handleCustomSubmit}
      />
    </DispatchLayout>
  );
};

export default AddItems;
