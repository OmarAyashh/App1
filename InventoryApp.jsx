
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function InventoryApp() {
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
    <div className="p-4 grid gap-4">
      <h1 className="text-2xl font-bold">📊 Product Inventory</h1>
      <div className="grid grid-cols-4 gap-2 font-semibold">
        <div>Product</div>
        <div>Stored Amount</div>
        <div>Sold Amount</div>
        <div>Remaining Stock</div>
      </div>
      {products.map((product, index) => (
        <div
          key={index}
          className="grid grid-cols-4 gap-2 items-center border rounded p-2"
        >
          <input
            value={product.name}
            onChange={(e) => updateProduct(index, "name", e.target.value)}
            className="border p-1 rounded"
          />
          <input
            type="number"
            value={product.stored}
            onChange={(e) => updateProduct(index, "stored", e.target.value)}
            className="border p-1 rounded"
          />
          <input
            type="number"
            value={product.sold}
            onChange={(e) => updateProduct(index, "sold", e.target.value)}
            className="border p-1 rounded"
          />
          <div className="p-1">{product.stored - product.sold}</div>
        </div>
      ))}

      <Button onClick={addProduct}>➕ Add Product</Button>

      <Card className="mt-4">
        <CardContent>
          <p className="text-lg">
            🧮 Total Sold This Year: <strong>{totalSold}</strong>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
