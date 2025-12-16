"use client";

import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from "lucide-react";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface Props {
  productName: string;
  images: string[];
  selectedImageIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const ImageModal: NextPage<Props> = ({
  productName,
  images,
  selectedImageIndex,
  onClose,
  onPrevious,
  onNext,
}) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  const currentImage = images[selectedImageIndex] || "/placeholder.svg";

  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [selectedImageIndex]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoom = (factor: number) => {
    setScale((prev) => Math.min(3, Math.max(1, prev + factor)));
    if (scale + factor <= 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  return (
    <div
      className="fixed inset-0 z-1000 bg-black/90 flex flex-col items-center justify-center p-4"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-white/20 cursor-pointer hover:bg-white/40 rounded-full text-white z-20"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center">
        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/40 rounded-full transition-colors text-white z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div
          className="overflow-hidden w-full h-full flex items-center justify-center cursor-grab"
          onMouseDown={handleMouseDown}
        >
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              transform: `scale(${scale}) translate(${position.x / scale}px, ${
                position.y / scale
              }px)`,
              transition: isDragging ? "none" : "transform 0.2s ease-out",
              cursor:
                scale > 1 ? (isDragging ? "grabbing" : "grab") : "default",
            }}
          >
            <img
              src={currentImage}
              alt={`${productName} - Zoomed View ${selectedImageIndex + 1}`}
              className="pointer-events-none"
            />
          </div>
        </div>

        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/40 rounded-full transition-colors text-white z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="absolute bottom-4 z-20 flex gap-4 p-2 backdrop-blur-sm rounded-xl shadow-lg">
        <button
          onClick={() => handleZoom(0.25)}
          className="p-3 bg-white/10 hover:bg-white/30 rounded-full cursor-pointer text-white transition-colors duration-200 flex items-center justify-center border border-white/20"
          title="Zoom In"
        >
          <ZoomIn className="w-5 h-5" />
        </button>

        <button
          onClick={() => handleZoom(-0.25)}
          className="p-3 bg-white/10 hover:bg-white/30 rounded-full cursor-pointer text-white transition-colors duration-200 flex items-center justify-center border border-white/20"
          title="Zoom Out"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
