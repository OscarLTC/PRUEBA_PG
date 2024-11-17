import Link from "next/link";
import { ProductCard } from "./components/ProductCard";
import { getProducts } from "./products/products.services";

export const dynamic = "force-dynamic";

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">CRUD PRODUCTOS</h1>

        <Link
          href="/products/add"
          className="bg-white rounded-lg p-2 font-bold text-zinc-900"
        >
          Crear Producto
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 mt-10">
        {products.map((product: any) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
