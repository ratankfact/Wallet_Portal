import React, { useState } from 'react';
import AdminLayout from '../Layout/ClientLayout';

// Example transaction data
const transactions = [
    {
        id: 'T001',
        date: '2024-08-20',
        amount: '$1500',
        status: 'Completed',
        description: 'Payment for Order #12345',
    },
    {
        id: 'T002',
        date: '2024-08-21',
        amount: '$2000',
        status: 'Pending',
        description: 'Payment for Order #12346',
    },
    {
        id: 'T003',
        date: '2024-08-22',
        amount: '$500',
        status: 'Failed',
        description: 'Payment for Order #12347',
    },
    // Add more transactions as needed
];

const ViewTransactions = () => {
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredTransactions = transactions.filter(transaction =>
        transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <AdminLayout>
            <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Transaction Details</h2>

                {/* Search Bar */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search transactions..."
                        className="p-2 border border-gray-300 rounded"
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>

                {/* Transaction List */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredTransactions.map((transaction) => (
                                <tr key={transaction.id} className="hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.amount}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${transaction.status === 'Completed' ? 'bg-green-100 text-green-800' : transaction.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                                            {transaction.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        <button
                                            onClick={() => setSelectedTransaction(transaction)}
                                            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                                        >
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Transaction Details Modal */}
                {selectedTransaction && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white p-6 rounded-md shadow-lg max-w-md mx-auto">
                            <h3 className="text-xl font-bold mb-2">Transaction Details</h3>
                            <p><strong>ID:</strong> {selectedTransaction.id}</p>
                            <p><strong>Date:</strong> {selectedTransaction.date}</p>
                            <p><strong>Amount:</strong> {selectedTransaction.amount}</p>
                            <p><strong>Status:</strong> {selectedTransaction.status}</p>
                            <p><strong>Description:</strong> {selectedTransaction.description}</p>
                            <button
                                onClick={() => setSelectedTransaction(null)}
                                className="mt-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default ViewTransactions;
