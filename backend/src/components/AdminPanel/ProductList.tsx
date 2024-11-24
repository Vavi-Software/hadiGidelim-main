import React, { useState } from "react";

type ProductListProps = {
  onAddProduct: (product: string) => void;
};

const ProductList: React.FC<ProductListProps> = ({ onAddProduct }) => {
  const [productName, setProductName] = useState<string>("");

  const handleAdd = () => {
    if (productName) {
      onAddProduct(productName);
      setProductName("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Ürün adı girin"
      />
      <button onClick={handleAdd}>Ürün Ekle</button>
    </div>
  );
};

export default ProductList;
