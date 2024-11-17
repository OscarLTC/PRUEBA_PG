import { Product } from "../models/product.model";

export async function getProducts() {
  const data = await fetch("http://127.0.0.1:8000/api/products/", {
    cache: "no-store",
  });
  return await data.json();
}

export async function getProduct(id: number) {
  const data = await fetch(`http://127.0.0.1:8000/api/products/${id}`, {
    cache: "no-store",
  });
  return await data.json();
}

export async function createProduct(productData: Omit<Product, "id">) {
  const res = await fetch(`http://127.0.0.1:8000/api/products/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });
  const data = await res.json();
  console.log(data);
}

export async function deleteProduct(id: number) {
  const res = await fetch(`http://127.0.0.1:8000/api/products/${id}/`, {
    method: "DELETE",
  });
  return null;
}

export async function updateProduct(
  id: number,
  newProduct: Omit<Product, "id">
) {
  const res = await fetch(`http://127.0.0.1:8000/api/products/${id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
    cache: "no-store",
  });
  return await res.json();
}
