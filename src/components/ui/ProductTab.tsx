"use client";

import { Product } from "@/types/Product";
import { NextPage } from "next";
import { useState } from "react";

interface Props {
  product?: Product;
}

const ProductTab: NextPage<Props> = ({ product }) => {
  const tabData = [
    {
      key: "productDetail",
      label: "Detail Produk",
      content: (
        <div
          dangerouslySetInnerHTML={
            product?.description ? { __html: product.description } : undefined
          }
        />
      ),
    },
    {
      key: "information",
      label: "Information",
      content: (
        <p className="text-gray-700">Content for Information tab goes here.</p>
      ),
    },
    {
      key: "reviews",
      label: "Reviews",
      content: (
        <div className="py-6">
          <ProductReviewsContent />
        </div>
      ),
    },
  ];
  const [activeTab, setActiveTab] = useState(tabData[0].key);
  const activeContent = tabData.find((tab) => tab.key === activeTab)?.content;

  return (
    <>
      <div className="flex border-b border-gray-200 overflow-x-auto whitespace-nowrap">
        {tabData.map((tab) => (
          <button
            key={tab.key}
            className={`
              py-2 px-4 text-sm font-semibold transition-colors duration-200 cursor-pointer
              ${
                activeTab === tab.key
                  ? "text-emerald-600 border-b-2 border-emerald-600"
                  : "text-gray-500 hover:text-gray-700"
              }
              focus:outline-none
            `}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="py-6">{activeContent}</div>
    </>
  );
};

const StarRating = ({ rating }: { rating: number }) => {
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-500" : "text-gray-300"
        } fill-current`}
        viewBox="0 0 20 20"
      >
        <path d="M10 15l-5.878 3.09 1.123-6.545L.487 7.21l6.561-.954L10 .685l2.952 5.57 6.561.954-4.758 4.636 1.123 6.545z" />
      </svg>
    ));
  return <div className="flex">{stars}</div>;
};

const ReviewSummary = () => {
  const ratingSummary = [
    { star: 5, percentage: 53, width: "w-[53%]" },
    { star: 4, percentage: 22, width: "w-[22%]" },
    { star: 3, percentage: 14, width: "w-[14%]" },
    { star: 2, percentage: 5, width: "w-[5%]" },
    { star: 1, percentage: 7, width: "w-[7%]" },
  ];

  return (
    <div className="pr-4">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">
        Customer reviews
      </h1>
      <div className="flex items-center space-x-2 mb-2">
        <StarRating rating={4} />
        <span className="text-lg font-semibold text-gray-800">
          4.1 out of 5
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-6">11,130 global ratings</p>

      <div className="space-y-2 mb-8">
        {ratingSummary.map((item) => (
          <div key={item.star} className="flex items-center space-x-3">
            <span className="text-blue-600 text-sm font-medium w-4 text-right cursor-pointer hover:text-orange-500">
              {item.star}
            </span>
            <div className="flex-1 bg-gray-200 rounded-full h-2.5">
              <div
                className={`bg-orange-500 h-2.5 rounded-full ${item.width}`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
            <span className="text-gray-600 text-sm w-8 text-right">
              {item.percentage}%
            </span>
          </div>
        ))}
      </div>

      <div className="pt-4 border-t border-gray-200">
        <h2 className="text-lg font-semibold mb-2 text-gray-800">
          Review this product
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Share your thoughts with other customers.
        </p>
        <button className="w-full py-2 px-4 border border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition duration-150">
          Write the Review
        </button>
      </div>
    </div>
  );
};

interface Review {
  id: number;
  name: string;
  date: string;
  verified: boolean;
  rating: number;
  title: string;
  body: string;
  images: string[];
}
const IndividualReview = ({ review }: { review: Review }) => (
  <div className="pb-8 border-b border-gray-200 last:border-b-0">
    <div className="flex items-center mb-2">
      <div className="w-10 h-10 bg-gray-300 rounded-full mr-3 overflow-hidden">
        <img
          src="https://via.placeholder.com/40"
          alt={review.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">{review.name}</h3>
        <p className="text-xs text-gray-500">
          {review.date}{" "}
          <span className="text-green-600 font-medium">Verified Purchase</span>
        </p>
      </div>
    </div>

    <div className="mt-2 mb-2">
      <StarRating rating={review.rating} />
      <p className="font-semibold text-sm text-yellow-800 mt-1">
        {review.title}
      </p>
    </div>

    <p className="text-sm text-gray-700 mb-3">{review.body}</p>

    {review.images.length > 0 && (
      <div className="flex space-x-2 my-3">
        {review.images.map((src: any, index: number) => (
          <img
            key={index}
            src={"https://via.placeholder.com/48"}
            alt={`Review attachment ${index + 1}`}
            className="w-12 h-12 border border-gray-200 rounded-md object-cover"
          />
        ))}
      </div>
    )}

    <div className="flex space-x-4 text-xs mt-3 text-gray-500">
      <button className="flex items-center hover:text-blue-600 transition">
        Helpful
      </button>
      <button className="flex items-center hover:text-red-600 transition">
        Report abuse
      </button>
    </div>
  </div>
);

const ReviewList = () => {
  const mockReviews = [
    {
      id: 1,
      name: "Shankar Subbaraman",
      date: "30 December 2024",
      verified: true,
      rating: 4,
      title: "Need to recheck the weight at delivery point",
      body: "Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open package, there is a possibility of pilferage in between. FreshCart sends the veggies and fruits through sealed plastic covers and Barcode on the weight etc. .",
      images: ["/image1.png", "/image2.png", "/image3.png"],
    },
    {
      id: 2,
      name: "Robert Thomas",
      date: "29 December 2024",
      verified: true,
      rating: 4,
      title: "Need to recheck the weight at delivery point",
      body: "Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open package, there is a possibility of pilferage in between. FreshCart sends the veggies and fruits through sealed plastic covers and Barcode on the weight etc. .",
      images: [],
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Reviews</h1>
        <div className="relative">
          <select className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option>Top Reviews</option>
            <option>Most Recent</option>
            <option>Highest Rated</option>
          </select>
          <svg
            className="w-4 h-4 absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <div className="space-y-6">
        {mockReviews.map((review) => (
          <IndividualReview key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

const ProductReviewsContent = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="md:col-span-1">
      <ReviewSummary />
    </div>

    <div className="md:col-span-2">
      <ReviewList />
    </div>
  </div>
);

export default ProductTab;
