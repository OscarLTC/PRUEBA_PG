import { Product } from "../models/product.model";
import { ProductCard } from "./ProductCard";

interface Props {
  products: Product[];
}

export const ProductsList = ({ products }: Props) => {
  return (
    <div>
      <h1>Listado de Productos</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
