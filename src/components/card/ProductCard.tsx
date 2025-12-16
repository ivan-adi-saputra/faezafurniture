import { Product } from "@/types/Product";
import { Eye, Star, StarHalf } from "lucide-react";
import { NextPage } from "next";
import Link from "next/link";

interface Props {
  product: Product;
}

const ProductCard: NextPage<Props> = ({ product }) => {
  let url = `furniture/${product.uuid}`;

  return (
    <Link href={url}>
      <div className="product_pic group cursor-pointer overflow-hidden flex flex-col w-full h-52 md:h-88 border border-gray-300 shadow-md bg-white rounded-lg relative">
        {product.discount && (
          <div className="z-10 tax absolute top-2 left-2 py-1 px-2 font-bold bg-red-600 text-white text-xs rounded-md">
            {product.discount}%
          </div>
        )}

        <div className="productOptions flex-col gap-2 absolute right-2 top-2 text-xl font-semibold z-10 hidden group-hover:flex animate-slideIn">
          {/* <div className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center cursor-pointer text-gray-500 hover:text-white hover:bg-[#001f3f]">
            <Heart className="w-5 h-5" />
          </div> */}
          {/* <Link
            href={url}
            className="w-8 h-8 bg-white rounded-lg shadow-md flex items-center justify-center cursor-pointer text-gray-500 hover:text-white hover:bg-[#001f3f]"
          >
            <Eye className="w-5 h-5" />
          </Link> */}
        </div>

        <div
          className="w-full h-1/2 md:h-50 bg-cover bg-center relative"
          style={{
            backgroundImage: `url('${product.galleries[0].url}')`,
          }}
        >
          <img
            className="product_hover_pic w-full h-full opacity-0 scale-100 object-cover transition duration-200 ease-out group-hover:opacity-100 group-hover:scale-110"
            src={product.galleries[1].url}
            alt=""
          />
        </div>

        <div className="p-1.5 md:p-4 flex flex-col gap-0.5 md:gap-1.5">
          <h3 className="text-gray-400 hidden md:block text-base font-semibold">
            {product.category_name}
          </h3>
          <h5 className="text-gray-800 text-sm md:text-base font-semibold md:font-bold">
            {product.title}
          </h5>

          <div className="stars text-yellow-500 flex items-center md:gap-1">
            {Array.from({ length: 5 }).map((_, i) => {
              const fullStars = Math.floor(product.rating);
              const hasHalf = product.rating % 1 !== 0;

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
                <Star key={i} className="w-3 md:w-4 h-3 md:h-4 text-gray-300" />
              );
            })}
            <span className="text-gray-400 text-[11px] md:text-xs ml-1 md:ml-2 font-semibold">
              {product.rating}
            </span>
          </div>

          <div className="flex items-center justify-start gap-3">
            <strong className="text-[11px] md:text-base">
              Rp.{" "}
              {product.price_discount > 0
                ? product.price_discount.toLocaleString()
                : product.price.toLocaleString()}
            </strong>
            {product.price_discount > 0 && (
              <strong className="text-[10px] md:text-[13px] line-through text-gray-400">
                Rp. {product.price.toLocaleString()}
              </strong>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
