"use client";

import { products as dataProducts } from "@/data/products";
import { Eye, Heart, Star, StarHalf } from "lucide-react";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProductCard from "../card/ProductCard";
import { Product as IProduct } from "@/types/Product";

interface Props {}

const Product: NextPage<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const filtered = dataProducts.slice(0, 8);

    setProducts(filtered);
    setIsLoading(false);
  }, []);

  return (
    <div className="container mt-10 mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-gray-700 mb-6">
        Produk Terbaik
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
              <ProductLoading key={index} />
            ))
          : products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href={"/furniture"}
          className="text-white bg-emerald-600 px-6 md:px-8 py-2 md:py-3 text-sm md:text-base font-medium rounded-md hover:opacity-90 transition"
        >
          Lihat Produk
        </Link>
      </div>
    </div>
  );
};

export const ProductLoading = ({}) => {
  return (
    <div className="product_pic cursor-pointer overflow-hidden flex flex-col gap-2 w-full h-64 md:h-88 border border-gray-300 shadow-md bg-white rounded-lg relative animate-pulse">
      <div className="absolute top-2 left-2 w-12 h-5 bg-gray-300 rounded-md"></div>

      <div className="absolute right-2 top-2 flex flex-col gap-2">
        <div className="w-8 h-8 bg-gray-300 rounded-lg"></div>
        <div className="w-8 h-8 bg-gray-300 rounded-lg"></div>
        <div className="w-8 h-8 bg-gray-300 rounded-lg hidden md:block"></div>
        <div className="w-8 h-8 bg-gray-300 rounded-lg hidden md:block"></div>
      </div>

      <div className="w-full h-1/2 mb-2 bg-gray-300 rounded-md"></div>

      <div className="p-4 flex flex-col gap-3">
        <div className="w-24 h-4 bg-gray-300 rounded"></div>
        <div className="w-28 h-5 bg-gray-300 rounded"></div>

        <div className="flex gap-1">
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
        </div>

        <div className="flex gap-3 items-center">
          <div className="w-12 h-4 bg-gray-300 rounded"></div>
          <div className="w-14 h-3 bg-gray-300 rounded hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Product;
