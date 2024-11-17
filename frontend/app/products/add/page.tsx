import { getProduct } from "../products.services";
import ProductForm from "./ProductForm";

interface Props {
  params: {
    id: number;
  };
}

export default async function ProductsNewPage({ params }: Props) {
  const product = await getProduct(params.id);

  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="w-1/3 bg-white p-4 shadow-md rounded-md">
        <div className="text-center text-2xl font-semibold mb-4 text-zinc-900">
          <div>{params.id ? "Editar Producto" : "Crear Producto"}</div>
        </div>
        <div className="w-full">
          <ProductForm product={product} />
        </div>
      </div>
    </div>
  );
}
