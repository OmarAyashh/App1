
import React, { useState } from "react";

function App() {
  const [products, setProducts] = useState([
    { name: "Product A", stored: 100, sold: 20 },
    { name: "Product B", stored: 50, sold: 10 },
  ]);

  const addProduct = () => {
    setProducts([...products, { name: "New Product", stored: 0, sold: 0 }]);
  };

  const updateProduct = (index, key, value) => {
    const updated = [...products];
    updated[index][key] = key === "name" ? value : parseInt(value) || 0;
    setProducts(updated);
  };

  const totalSold = products.reduce((sum, p) => sum + p.sold, 0);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📊 Product Inventory</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', fontWeight: 'bold' }}>
        <div>Product</div>
        <div>Stored Amount</div>
        <div>Sold Amount</div>
        <div>Remaining Stock</div>
      </div>
      {products.map((product, index) => (
        <div key={index} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', marginTop: '10px' }}>
          <input
            value={product.name}
            onChange={(e) => updateProduct(index, "name", e.target.value)}
            style={{ padding: '5px' }}
          />
          <input
            type="number"
            value={product.stored}
            onChange={(e) => updateProduct(index, "stored", e.target.value)}
            style={{ padding: '5px' }}
          />
          <input
            type="number"
            value={product.sold}
            onChange={(e) => updateProduct(index, "sold", e.target.value)}
            style={{ padding: '5px' }}
          />
          <div style={{ padding: '5px' }}>{product.stored - product.sold}</div>
        </div>
      ))}
      <button onClick={addProduct} style={{ marginTop: '20px', padding: '10px' }}>➕ Add Product</button>
      <h2 style={{ marginTop: '20px' }}>🧮 Total Sold This Year: {totalSold}</h2>
    </div>
  );
}

export default App;
