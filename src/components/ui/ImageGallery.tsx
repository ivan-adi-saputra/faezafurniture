"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { NextPage } from "next";
import { useState } from "react";
import ImageModal from "./ImageModal";

interface Props {
  images: string[];
  productName: string;
}

const ImageGallery: NextPage<Props> = ({ images, productName }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [isZoomModalOpen, setIsZoomModalOpen] = useState<boolean>(false);

  const handlePrevious = () => {
    setSelectedImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <>
      <div className="space-y-4">
        <div className="relative bg-muted rounded-lg overflow-hidden h-96 md:h-[500px] flex items-center justify-center group">
          <img
            src={images[selectedImageIndex] || "/placeholder.svg"}
            alt={`${productName} - View ${selectedImageIndex + 1}`}
            className="w-full h-[500px] object-cover hover:cursor-zoom-in"
            onClick={() => setIsZoomModalOpen(true)}
          />{" "}
          {/* disini tambahkan fitur ketika di klik akan full image seperti di ecommerce dan bisa di zoom in dan zoom out baik di laptop dan di mobile */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImageIndex(index)}
              className={`flex shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                selectedImageIndex === index
                  ? "border-[#001f3f]"
                  : "border-border hover:border-muted-foreground"
              }`}
            >
              <img
                src={image || "/placeholder.svg"}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover hover:cursor-pointer"
              />
            </button>
          ))}
        </div>
      </div>

      {isZoomModalOpen && (
        <ImageModal
          images={images}
          productName={productName}
          selectedImageIndex={selectedImageIndex}
          onClose={() => setIsZoomModalOpen(false)}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
    </>
  );
};

export default ImageGallery;
