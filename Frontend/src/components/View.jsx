import React, { useState } from 'react';
import AdminLayout from '../Layout/ClientLayout';

const productsData = [
  {
    product: 'Laptop',
    sku: 'LAP123',
    qty: 5,
    price: '$999.99',
    amazonOrderId: 'AMZ123456',
    trackingId: 'TRACK12345',
    total: '$4999.95',
  },
  {
    product: 'Smartphone',
    sku: 'PHN456',
    qty: 10,
    price: '$499.99',
    amazonOrderId: 'AMZ654321',
    trackingId: 'TRACK67890',
    total: '$4999.90',
  },
  // Add more products as needed
];

const View = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'product', direction: 'ascending' });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (key) => {
    const direction = sortConfig.direction === 'ascending' ? 'descending' : 'ascending';
    setSortConfig({ key, direction });
  };

  const sortedProducts = [...productsData].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const filteredProducts = sortedProducts.filter(product =>
    Object.values(product).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <AdminLayout>
      <div className="max-w-6xl mx-auto my-8 p-4 bg-white shadow-md rounded-md">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border border-gray-300 rounded"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr>
              {['Product', 'SKU', 'Product QTY', 'Price', 'Amazon Order ID', 'Tracking ID', 'Total'].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 border-b-2 border-gray-300 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort(header.toLowerCase().replace(' ', '_'))}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProducts.map((product, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.product}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.sku}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.qty}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.amazonOrderId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.trackingId}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default View;
