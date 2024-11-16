import Image from "next/image";
import { FaPencilAlt } from "react-icons/fa";
import { Product } from "../models/product.model";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <Image
        src={
          product.image ??
          product.image_url ??
          "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
        }
        width={300}
        height={300}
        alt={product.title}
      />
      <p>{product.description}</p>
      <span>Precio: S/{product.price}</span>

      <div>
        <button>Agregar al carrito</button>
        <FaPencilAlt />
      </div>
    </div>
  );
};
