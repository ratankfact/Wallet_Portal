import React from 'react';
import AdminLayout from '../Layout/ClientLayout';

const ShippingAddress = () => {
    const address = {
        name: 'Rohan',
        street: '123 Elm Street',
        apartment: '12/24 Karolbagh',
        city: 'Narkatiya Ganj',
        state: 'BR',
        zipCode: '845451',
        country: 'KNE'
    };

    const handleEditAddress = () => {
        alert('Redirecting to edit address page...');
    };

    const handleConfirmAddress = () => {
        alert('Address confirmed!');
    };

    return (
        <AdminLayout>
            <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-md rounded-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Shipping Address</h2>
                
                <div className="p-4 bg-gray-100 border border-gray-300 rounded-md shadow-sm">
                    <p className="text-lg text-gray-700 mb-2"><span className="font-semibold">Name:</span> {address.name}</p>
                    <p className="text-lg text-gray-700 mb-2"><span className="font-semibold">Street:</span> {address.street}</p>
                    <p className="text-lg text-gray-700 mb-2"><span className="font-semibold">Apartment:</span> {address.apartment}</p>
                    <p className="text-lg text-gray-700 mb-2"><span className="font-semibold">City:</span> {address.city}</p>
                    <p className="text-lg text-gray-700 mb-2"><span className="font-semibold">State:</span> {address.state}</p>
                    <p className="text-lg text-gray-700 mb-2"><span className="font-semibold">ZIP Code:</span> {address.zipCode}</p>
                    <p className="text-lg text-gray-700 mb-2"><span className="font-semibold">Country:</span> {address.country}</p>
                </div>

                {/* Action Buttons */}
                {/* <div className="mt-6 flex justify-between">
                    <button
                        onClick={handleEditAddress}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Edit Address
                    </button>
                    <button
                        onClick={handleConfirmAddress}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                    >
                        Confirm Address
                    </button>
                </div> */}
            </div>
        </AdminLayout>
    );
};

export default ShippingAddress;
