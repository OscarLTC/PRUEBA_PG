"use client"; // Marca el componente como Cliente

import { useEffect, useState } from "react";
import { ProductsList } from "./components/ProductsList";
import { getProducts } from "./services/products.services";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();
      setProducts(response);
    };

    fetchProducts();
  }, []);

  return (
    <main>
      <h1>Our Products</h1>
      <ProductsList products={products} />
    </main>
  );
}
