export async function getProducts() {
  const data = await fetch("http://127.0.0.1:8000/api/products/", {
    cache: "no-store",
  });
  return await data.json();
}
