import React from 'react';
import AdminLayout from '../Layout/ClientLayout';
import { Link } from 'react-router-dom';

const PaymentStage = () => {
    const totalAmount = 30000;
    const installments = [
        { amount: 10000, date: '2024-08-01', description: 'First Installment', paid: true },
        { amount: 10000, date: '2024-08-15', description: 'Second Installment', paid: true },
    ];
    const paidAmount = installments.reduce((acc, installment) => acc + installment.amount, 0);
    const remainingBalance = totalAmount - paidAmount;
    const nextInstallment = 10000; // Next expected installment

    const handlePayNow = () => {
        alert('Redirecting to payment gateway...');
    };

    return (
        <AdminLayout>
            <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-md rounded-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Your Payment Status</h2>

                {/* Timeline Container */}
                <div className="relative border-l border-gray-300">
                    {installments.map((installment, index) => (
                        <div key={index} className="mb-10 ml-6">
                            <span className={`flex absolute -left-3 justify-center items-center w-6 h-6 ${installment.paid ? 'bg-green-600' : 'bg-red-600'} rounded-full ring-8 ring-white`}>
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM9 12"/></svg>
                            </span>
                            <div className={`p-4 rounded-md shadow-inner ${installment.paid ? 'bg-green-50' : 'bg-red-50'}`}>
                                <p className={`text-lg mb-1 ${installment.paid ? 'text-green-700' : 'text-red-700'}`}>
                                    <span className="font-semibold">{installment.description}:</span> ₹{installment.amount.toLocaleString('en-IN')}
                                </p>
                                <p className={`text-sm ${installment.paid ? 'text-green-500' : 'text-red-500'}`}>{installment.date}</p>
                            </div>
                        </div>
                    ))}

                    {/* Next Installment */}
                    <div className="mb-10 ml-6">
                        <span className="flex absolute -left-3 justify-center items-center w-6 h-6 bg-red-600 rounded-full ring-8 ring-white">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM9 12"/></svg>
                        </span>
                        <div className="bg-red-50 p-4 rounded-md shadow-inner">
                            <p className="text-lg text-red-700 mb-1">
                                <span className="font-semibold">Next Installment:</span> ₹{nextInstallment.toLocaleString('en-IN')}
                            </p>
                            <p className="text-sm text-red-500">Not Paid</p>
                        </div>
                    </div>
                </div>

                {/* Remaining Balance */}
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md shadow-sm flex justify-between items-center">
                    <h3 className="text-2xl text-blue-800 font-bold">
                        Remaining Balance: ₹{remainingBalance.toLocaleString('en-IN')}
                    </h3>
                    <Link to={"/order-wallet"}>
                    <button
                        onClick={handlePayNow}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                        Pay Now
                    </button>
                    </Link>
                </div>
            </div>
        </AdminLayout>
    );
};

export default PaymentStage;
