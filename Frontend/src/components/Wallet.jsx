import React, { useState } from 'react';
import AdminLayout from '../Layout/ClientLayout';

const Wallet = () => {
    const [amount, setAmount] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Sample data for recent transactions
    const recentTransactions = [
        { id: 1, date: '2024-08-24', description: 'Added Balance', amount: '₹2,000.00' },
        { id: 2, date: '2024-08-23', description: 'Wallet Transfer', amount: '-₹500.00' },
        { id: 3, date: '2024-08-22', description: 'Coupon Redeem', amount: '₹1,000.00' },
        { id: 4, date: '2024-08-21', description: 'Added Balance', amount: '₹5,000.00' },
        { id: 5, date: '2024-08-20', description: 'Withdrawal Request', amount: '-₹1,000.00' },
    ];

    const handlePredefinedAmountClick = (amount) => {
        setAmount(amount);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <AdminLayout>
            <div className="max-w-4xl mx-auto p-6">
                {/* Wallet Balance Section */}
                <div className="bg-purple-600 text-white p-4 rounded-lg flex justify-between items-center mb-6 mt-10">
                    <div>
                        <h3 className="text-lg font-bold">Wallet Balance</h3>
                        <p className="text-3xl font-bold">₹0.00</p>
                        <a href="/order-wallet/view-transactions" className="text-sm underline">View Transactions</a>
                    </div>
                    <div className="text-center">
                        {/* Add Balance Button */}
                        <button onClick={openModal} className="bg-purple-200 text-black py-2 px-4 rounded-lg text-center hover:bg-purple-300 transition duration-300 transform hover:scale-105">
                            <div className="flex flex-col items-center">
                                <span className="text-xl">➕</span>
                                <span>Add Balance</span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Add Balance Section */}
                <div className="bg-white p-4 rounded-lg shadow-md mb-6 text-black">
                    <h3 className="text-lg font-bold mb-4">Add Balance:</h3>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <button
                            onClick={() => handlePredefinedAmountClick('2000')}
                            className="border-2 border-purple-600 py-2 px-4 rounded-lg text-center hover:bg-purple-100 transition duration-300 transform hover:scale-105"
                        >
                            ₹2,000.00
                        </button>
                        <button
                            onClick={() => handlePredefinedAmountClick('5000')}
                            className="border-2 border-purple-600 py-2 px-4 rounded-lg text-center hover:bg-purple-100 transition duration-300 transform hover:scale-105"
                        >
                            ₹5,000.00
                        </button>
                        <button
                            onClick={() => handlePredefinedAmountClick('10000')}
                            className="border-2 border-purple-600 py-2 px-4 rounded-lg text-center hover:bg-purple-100 transition duration-300 transform hover:scale-105"
                        >
                            ₹10,000.00
                        </button>
                    </div>
                    <label className="block mb-2 font-semibold">Enter Amount (₹):</label>
                    <input
                        type="number"
                        placeholder="Enter custom amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="border border-gray-300 p-2 rounded-lg w-full mb-4"
                    />
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-300 transform hover:scale-105">
                        Proceed
                    </button>
                </div>

                {/* Recent Transactions Section */}
                <div className="bg-white p-4 rounded-lg shadow-md text-black">
                    <h3 className="text-lg font-bold mb-4">Recent Transactions:</h3>
                    <ul className="space-y-2">
                        {recentTransactions.map((transaction) => (
                            <li key={transaction.id} className="flex justify-between items-center border-b border-gray-200 py-2">
                                <div>
                                    <p className="text-sm font-semibold">{transaction.description}</p>
                                    <p className="text-xs text-gray-500">{transaction.date}</p>
                                </div>
                                <p className={`font-bold ${transaction.amount.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                                    {transaction.amount}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Add Balance Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                            <h3 className="text-xl font-bold mb-4">Add Balance</h3>
                            <label className="block mb-2 font-semibold">Enter Amount (₹):</label>
                            <input
                                type="number"
                                placeholder="Enter amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="border border-gray-300 p-2 rounded-lg w-full mb-4"
                            />
                            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-300 transform hover:scale-105" onClick={() => { /* Handle balance addition */ closeModal(); }}>
                                Proceed
                            </button>
                            <button className="mt-4 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg w-full transition duration-300 transform hover:scale-105" onClick={closeModal}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}

export default Wallet;
