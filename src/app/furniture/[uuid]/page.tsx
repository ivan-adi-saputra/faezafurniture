"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ImageGallery from "@/components/ui/ImageGallery";
import ProductTab from "@/components/ui/ProductTab";
import { contactConfigs } from "@/config";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/helpers";
import { Product } from "@/types/Product";
import { ArrowLeft, PackageSearch, Star, StarHalf } from "lucide-react";
import { NextPage } from "next";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

interface Props {
  params: Promise<{ uuid: string }>;
}

const DetailFurniture: NextPage<Props> = ({ params }) => {
  const resolvedParams = React.use(params);
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const spesifications = [
    {
      title: "Dimensions",
      value: "210cm W × 90cm D × 80cm H",
    },
    {
      title: "Material",
      value: "Premium linen blend",
    },
    {
      title: "Seating capacity",
      value: "3 People",
    },
  ];

  const getProduct = () => {
    setIsLoading(true);

    const product = products.find(
      (product) => product.uuid == resolvedParams.uuid
    );

    if (product) {
      setProduct(product);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product && !isLoading) {
    return (
      <section className="container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <div className="bg-muted p-6 rounded-full">
            <PackageSearch className="w-16 h-16 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tighter md:text-3xl text-gray-800">
              Produk Tidak Ditemukan
            </h1>
            <p className="text-muted-foreground max-w-[600px] mx-auto">
              Maaf, produk yang Anda cari tidak tersedia atau telah dihapus.
              Silakan periksa kembali URL atau jelajahi koleksi kami yang lain.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href={"/furniture"}
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Kembali ke Produk
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-0 md:py-8 px-4 md:px-12">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              <Link href="/furniture">Furniture</Link>
            </BreadcrumbPage>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Detail</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="container mx-auto py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <ImageGallery
            images={product?.galleries?.map((gallery) => gallery?.url) ?? []}
            productName={product?.title ?? ""}
          />

          {/* Product Info */}
          <div className="flex flex-col space-y-3 md:space-y-5">
            <div>
              <p className="text-md text-muted-foreground mb-2">
                {product?.category_name}
              </p>
              <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-2">
                {product?.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => {
                    const fullStars = Math.floor(product?.rating ?? 0);
                    const hasHalf = product?.rating ?? 0 % 1 !== 0;

                    if (i < fullStars) {
                      return (
                        <Star
                          key={i}
                          className="w-3 md:w-4 h-3 md:h-4 fill-current"
                        />
                      );
                    }
                    if (i === fullStars && hasHalf) {
                      return (
                        <StarHalf
                          key={i}
                          className="w-3 md:w-4 h-3 md:h-4 fill-current"
                        />
                      );
                    }
                    return (
                      <Star
                        key={i}
                        className="w-3 md:w-4 h-3 md:h-4 text-gray-300"
                      />
                    );
                  })}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({product?.rating}) 0 Reviews
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <p className="text-2xl md:text-4xl font-bold text-foreground">
                {formatPrice(product?.price)}
              </p>
              <p className="text-md md:text-lg text-muted-foreground line-through">
                ${(product?.price ?? 1 * 1.15).toLocaleString()}
              </p>
            </div>

            {/* Description */}
            {/* <p className="text-lg text-muted-foreground leading-relaxed">
              {product?.description}
            </p> */}

            {/* Product Type Options */}
            {/* {product.options && product.options.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Product Type
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedOption(index)}
                      className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                        selectedOption === index
                          ? "border-accent bg-accent/10 text-foreground"
                          : "border-border text-foreground hover:border-muted-foreground"
                      }`}
                    >
                      {option.type}
                    </button>
                  ))}
                </div>
              </div>
            )} */}

            {/* Color Options */}
            {/* {uniqueColors.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Color
                </h3>
                <div className="flex flex-wrap gap-2">
                  {uniqueColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                        selectedColor === color
                          ? "border-accent bg-accent/10 text-foreground"
                          : "border-border text-foreground hover:border-muted-foreground"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )} */}

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Specifications
              </h3>
              <ul className="space-y-2">
                {spesifications?.map((spec, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground flex items-center gap-2"
                  >
                    <span className="text-gray-600">•</span>
                    {spec.title}: {spec.value}
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-4">
              {/* <div className="flex items-center border border-border rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-foreground hover:bg-muted"
                >
                  −
                </button>
                <span className="px-6 py-2 text-foreground font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-foreground hover:bg-muted"
                >
                  +
                </button>
              </div> */}

              <Link
                target="_blank"
                href={contactConfigs.owner.whatsappLink}
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-8 py-3 bg-emerald-600 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                <FaWhatsapp className="w-5 h-5" />
                Hubungi Kami
              </Link>

              {/* <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="p-3 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isWishlisted ? "fill-accent text-accent" : "text-foreground"
                  }`}
                />
              </button> */}
            </div>

            {/* Info */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div>
                <p className="text-sm text-muted-foreground">Layanan</p>
                <p className="font-semibold text-foreground text-sm md:text-base">
                  Custom Desain
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Konstruksi</p>
                <p className="font-semibold text-foreground text-sm md:text-base">
                  Tangan Ahli
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Pengiriman</p>
                <p className="font-semibold text-foreground text-sm md:text-base">
                  Aman & Cepat
                </p>
              </div>
            </div>
          </div>
        </div>

        <ProductTab product={product!} />
      </div>
    </section>
  );
};

export default DetailFurniture;
