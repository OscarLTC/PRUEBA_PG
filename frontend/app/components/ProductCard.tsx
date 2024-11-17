import Image from "next/image";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { Product } from "../models/product.model";
import { IoCartOutline } from "react-icons/io5";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="p-6 rounded-lg flex flex-col gap-4 bg-zinc-900">
      <h3 className="font-bold text-3xl">{product.title}</h3>
      <div className="w-full ">
        <Image
          src={
            product.image ??
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
        <div className="bg-white flex rounded-lg p-2 items-center font-bold gap-2">
          <IoCartOutline />
          <button>Agregar al carrito</button>
        </div>
        <div className="flex gap-2 ">
          <div className="bg-white p-2 rounded-lg">
            <FaPencilAlt />
          </div>

          <div className="bg-white p-2 rounded-lg">
            <FaRegTrashAlt />
          </div>
        </div>
      </div>
    </div>
  );
};
