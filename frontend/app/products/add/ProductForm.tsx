"use client";

import { Product } from "@/app/models/product.model";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { createProduct, updateProduct } from "../products.services";

interface Props {
  product: Product;
}

export default function ProductForm({ product }: Props) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: product.title,
      description: product.description,
      price: product.price,
      image_url: product.image ?? product.image_url,
    },
  });
  const router = useRouter();
  const params = useParams<{ id: string }>();

  const onSubmit = handleSubmit(async (data) => {
    if (params?.id) {
      const res = await updateProduct(params.id, {
        ...data,
        price: data.price,
        image_url: data.image_url,
      });
    } else {
      await createProduct({
        ...data,
        price: data.price,
        image_url: data.image_url,
      });
    }

    router.push("/");
    router.refresh();
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4 text-zinc-900">
      <div className="flex flex-col w-full">
        <label className="text-sm font-semibold">Nombre</label>
        <input
          className="border border-gray-300 rounded-md p-2 w-full"
          type="text"
          {...register("title", { required: true })}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold">Descripcion</label>
        <textarea
          className="border border-gray-300 rounded-md p-2"
          {...register("description", { required: true })}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold">Precio</label>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="number"
          {...register("price", { required: true })}
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold">Imagen</label>
        <input
          className="border border-gray-300 rounded-md p-2"
          type="text"
          {...register("image_url", { required: true })}
        />
        {params.id && (
          <img
            src={product.image}
            className="w-20 h-20 object-cover rounded-md mt-2"
          />
        )}
      </div>

      <button className="bg-zinc-500 text-white rounded-md p-2" type="submit">
        {params.id ? "Actualizar" : "Crear"}
      </button>
    </form>
  );
}
