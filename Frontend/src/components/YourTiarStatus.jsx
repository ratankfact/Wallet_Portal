import React from 'react';
import AdminLayout from '../Layout/ClientLayout';
import { FaMedal, FaBullseye } from 'react-icons/fa'; // Importing the gold medal and bullseye icons

const YourTierStatus = () => {
    const stages = [
        { name: 'Bronze', gms: 35000, achieved: true },
        { name: 'Silver', gms: 55000, achieved: true },
        { name: 'Gold', gms: 100000, achieved: true }, // Current stage
        { name: 'Platinum', gms: 150000, achieved: false } // Next target
    ];

    return (
        <AdminLayout>
            <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-md rounded-md">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center">
                    Your Tier Status, Rohan
                    <FaMedal className="ml-3 text-yellow-500" /> {/* Gold medal icon */}
                </h2>

                <div className="relative border-l border-gray-300 ml-6">
                    {stages.map((stage, index) => (
                        <div key={index} className="mb-10 ml-4">
                            <div
                                className={`absolute w-8 h-8 rounded-full -left-4 flex items-center justify-center ${stage.achieved ? 'bg-green-500' : 'bg-gray-300'}`}
                            >
                                {stage.achieved && <span className="text-white font-bold">✓</span>}
                            </div>
                            <div className="pl-6">
                                <h3 className={`text-xl font-bold ${stage.achieved ? 'text-green-600' : 'text-gray-600'}`}>
                                    {stage.name}
                                    {stage.name === 'Platinum' && !stage.achieved && (
                                        <span className="ml-2 text-red-600 flex items-center">
                                            <FaBullseye className="mr-1" /> {/* Target icon */}
                                            Next target
                                        </span>
                                    )}
                                </h3>
                                <p className={`text-lg ${stage.achieved ? 'text-green-600' : 'text-gray-600'}`}>
                                    {stage.gms.toLocaleString()} + GMS
                                </p>
                                {stage.name === 'Gold' && (
                                    <p className="mt-2 text-xl font-semibold text-yellow-600">
                                        Congratulations! You are currently at the Gold level.
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AdminLayout>
    );
};

export default YourTierStatus;
