import React, { useState } from 'react';
import DispatchLayout from '../Layout/DispatchLayout';
import * as XLSX from 'xlsx';

const UploadProducts = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    sku: '',
    name: '',
    price: '',
    gstRate: ''
  });
  const [editingIndex, setEditingIndex] = useState(null);

  // Handle Excel file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    
    if (!file) return;

    const reader = new FileReader();
    
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet);

      // Transform the data if needed
      const formattedProducts = json.map(item => ({
        sku: item['SKU'] || '',
        name: item['Product Name'] || '',
        price: item['Product Price'] || '',
        gstRate: item['GST Rate'] || ''
      }));

      setProducts(formattedProducts);
    };
    
    reader.readAsArrayBuffer(file);
  };

  // Handle adding or updating a product
  const handleAddOrUpdateProduct = () => {
    if (editingIndex !== null) {
      // Update the existing product
      const updatedProducts = [...products];
      updatedProducts[editingIndex] = newProduct;
      setProducts(updatedProducts);
      setEditingIndex(null); // Reset editing index
    } else {
      // Add a new product
      setProducts([...products, newProduct]);
    }
    setNewProduct({ sku: '', name: '', price: '', gstRate: '' });
  };

  // Handle input change for new product
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Handle editing a product
  const handleEditProduct = (index) => {
    setNewProduct(products[index]);
    setEditingIndex(index);
  };

  // Handle download sample file
  const handleDownloadSample = () => {
    const sampleData = [
      { SKU: 'SKU001', 'Product Name': 'Sample Product', 'Product Price': '100', 'GST Rate': '12%' }
    ];
    const worksheet = XLSX.utils.json_to_sheet(sampleData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sample');
    XLSX.writeFile(workbook, 'Sample_Products.xlsx');
  };

  return (
    <DispatchLayout>
      <div className="relative max-w-6xl mx-auto p-6 mt-5 pb-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Upload Products
        </h2>

        <div className="mb-4">
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-2"
            onClick={handleDownloadSample}
          >
            Download Sample File
          </button>
          <label className="block text-gray-700 mb-2">Bulk Upload Through Excel</label>
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleFileUpload}
            className="border border-gray-300 rounded-md py-2 px-4"
          />
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{editingIndex !== null ? 'Edit Product' : 'Add Product'}</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-200">
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">SKU</td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <input
                      type="text"
                      name="sku"
                      value={newProduct.sku}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md py-2 px-4 w-full"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">Product Name</td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <input
                      type="text"
                      name="name"
                      value={newProduct.name}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md py-2 px-4 w-full"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">Product Price</td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <input
                      type="text"
                      name="price"
                      value={newProduct.price}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md py-2 px-4 w-full"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-gray-200">GST Rate</td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <input
                      type="text"
                      name="gstRate"
                      value={newProduct.gstRate}
                      onChange={handleInputChange}
                      className="border border-gray-300 rounded-md py-2 px-4 w-full"
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2" className="py-2 px-4 border-b border-gray-200 text-right">
                    <button
                      type="button"
                      onClick={handleAddOrUpdateProduct}
                      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                      {editingIndex !== null ? 'Update Product' : 'Add Product'}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="overflow-x-auto mt-6">
          <table className="min-w-full bg-white shadow-md rounded-lg border border-gray-200">
            <thead className="bg-gray-100">
              <tr className="text-gray-700 uppercase text-sm leading-normal">
                <th className="py-3 px-4 border-b border-gray-200 text-left">SKU</th>
                <th className="py-3 px-4 border-b border-gray-200 text-left">Product Name</th>
                <th className="py-3 px-4 border-b border-gray-200 text-left">Product Price</th>
                <th className="py-3 px-4 border-b border-gray-200 text-left">GST Rate</th>
                <th className="py-3 px-4 border-b border-gray-200 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {products.length > 0 ? (
                products.map((product, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-3 px-4 border-b border-gray-200">{product.sku}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{product.name}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{product.price}</td>
                    <td className="py-3 px-4 border-b border-gray-200">{product.gstRate}</td>
                    <td className="py-3 px-4 border-b border-gray-200">
                      <button
                        onClick={() => handleEditProduct(index)}
                        className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 mr-2"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-3 px-4 text-center text-gray-500">No products available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </DispatchLayout>
  );
};

export default UploadProducts;
