"use client";
import Image from "next/image";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { Product } from "../models/product.model";
import { IoCartOutline } from "react-icons/io5";
import { deleteProduct } from "../products/products.services";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const router = useRouter();

  async function onRemoveProduct() {
    await deleteProduct(product.id);
    router.refresh();
  }

  return (
    <div className="p-6 rounded-lg flex flex-col gap-4 bg-zinc-900">
      <h3 className="font-bold text-3xl">{product.title}</h3>
      <div className="w-full ">
        <Image
          src={
            product.image_url ??
            "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
          }
          width={200}
          height={200}
          className="w-full h-full object-cover rounded"
          alt={product.title}
        />
        <p className="line-clamp-2">{product.description}</p>
      </div>
      <span className="font-bold mt-10">Precio: S/{product.price}</span>
      <div className="flex items-center justify-between text-zinc-900 gap-4">
        <div className="bg-white opacity-50 cursor-not-allowed select-none flex rounded-lg p-2 items-center font-bold gap-2">
          <IoCartOutline />
          <span>Agregar al carrito</span>
        </div>
        <div className="flex gap-2 ">
          <Link
            href={`/products/${product.id}/edit`}
            className="bg-white p-2 rounded-lg"
          >
            <FaPencilAlt />
          </Link>

          <button onClick={onRemoveProduct} className="bg-white p-2 rounded-lg">
            <FaRegTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};
