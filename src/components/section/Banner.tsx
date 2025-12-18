"use client";

import { NextPage } from "next";
import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/parallax";
import "swiper/css/autoplay";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Props {}

const banners = [
  // {
  //   title: "Best collection <br /> for home decoration",
  //   description:
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio <br /> in provident amet reiciendis quibusdam consectetur",
  //   img: "/images/banners/banner-1.jpg",
  // },
  {
    title: "Jelajahi Inspirasi Rumah <br /> dengan Desain Berkelas",
    description:
      "Temukan koleksi furniture eksklusif yang memadukan keindahan dan kenyamanan. <br /> Pilih desain favorit Anda dan ciptakan suasana rumah yang lebih hidup.",
    img: "/images/banners/banner-2.jpg",
  },
  {
    title: "Wujudkan Ruang Impian <br /> dengan Furniture Pilihan",
    description:
      "Hadirkan sentuhan elegan di setiap sudut ruangan dengan pengerjaan terbaik. <br /> Lihat beragam pilihan produk unggulan kami untuk melengkapi kebahagiaan keluarga.",
    img: "/images/banners/banner-3.jpg",
  },
];

const Banner: NextPage<Props> = ({}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [parallaxAmount, setParallaxAmount] = useState(0);
  const parallaxOpacity = 0.9;

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        setParallaxAmount(swiper.width * 0.95);
      }}
      parallax
      centeredSlides
      grabCursor
      speed={1000}
      spaceBetween={0}
      effect="slide"
      autoplay
      className="hero-slider"
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <div
            className="slide-image rounded-2xl"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <Image src={banner.img} alt={banner.title} fill priority />
          </div>

          <div className="container content relative z-10 px-4 md:px-12 py-16 sm:py-10 md:py-24 lg:py-32">
            <h1
              className="text-xl md:text-5xl lg:text-6xl font-bold md:font-medium text-gray-800 mb-2 md:mb-4 capitalize"
              data-swiper-parallax={parallaxAmount * 0.7}
              dangerouslySetInnerHTML={{ __html: banner.title }}
            ></h1>
            {/* Teks utuh untuk layar md ke atas */}
            <p
              className="hidden md:block text-gray-700 text-base"
              data-swiper-parallax={parallaxAmount * 0.5}
              dangerouslySetInnerHTML={{ __html: banner.description }}
            />

            {/* Teks hanya sampai sebelum <br> untuk layar kecil */}
            <p
              className="block md:hidden text-gray-700 text-xs"
              data-swiper-parallax={parallaxAmount * 0.5}
              dangerouslySetInnerHTML={{
                __html: banner.description.split("<br>")[0].split("<br />")[0],
              }}
            />
            <div
              className="mt-6 md:mt-12"
              data-swiper-parallax={parallaxAmount * 0.3}
            >
              <Link
                href="/furniture"
                className="group inline-flex items-center text-white bg-emerald-600 px-4 md:px-8 py-2 md:py-3 text-[10px] md:text-base font-medium rounded-md transition-all hover:bg-emerald-600"
              >
                <span>Jelajahi Koleksi</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
