"use client";

import Banner from "@/components/section/Banner";
import Benefit from "@/components/section/Benefit";
import Category from "@/components/section/Category";
import Product from "@/components/section/Product";

export default function Home() {
  return (
    <div className="container py-0 md:py-8 px-4 md:px-12">
      <Banner />
      <Category />
      <Product />
      <Benefit />
    </div>
  );
}
