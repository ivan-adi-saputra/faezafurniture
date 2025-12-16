"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { categories as dataCategories } from "@/data/categories";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import { Category as ICategory } from "@/types/Category";
import Image from "next/image";

interface Props {}

const Category: NextPage<Props> = ({}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<any[]>([]);

  // swiper
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const filtered = dataCategories.filter((category) => category.img !== null);
    setCategories(filtered);

    setIsLoading(false);
  }, []);

  return (
    <div className="container mt-10 mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-700">
          Semua Kategori
        </h2>
        <div className="flex space-x-2">
          <button
            className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
              isBeginning
                ? "opacity-50 cursor-not-allowed bg-gray-400"
                : "text-white cursor-pointer bg-emerald-600"
            }`}
            id="prevBtn"
            disabled={isBeginning}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
              isEnd
                ? "opacity-50 cursor-not-allowed bg-gray-400"
                : "text-white cursor-pointer bg-emerald-600"
            }`}
            id="nextBtn"
            disabled={isEnd}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={2}
        spaceBetween={16}
        navigation={{
          prevEl: "#prevBtn",
          nextEl: "#nextBtn",
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="pb-4"
      >
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => (
              <SwiperSlide key={index}>
                <CategoryLoading />
              </SwiperSlide>
            ))
          : categories.map((category: ICategory, index: number) => (
              <SwiperSlide key={index}>
                <Link href={`/furniture?categories=${category.id}`}>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                    <Image
                      src={category.img!}
                      alt={category.title}
                      height={130}
                      width={130}
                      className="mb-4 w-[130px] h-[130px]"
                    />
                    <p className="text-sm font-semibold text-gray-700">
                      {category.title}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

const CategoryLoading = ({}) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col items-center text-center">
      <div className="w-[140px] h-[120px] bg-gray-200 rounded mb-4 animate-pulse" />
      <div className="w-34 h-4 bg-gray-200 rounded animate-pulse" />
    </div>
  );
};

export default Category;
