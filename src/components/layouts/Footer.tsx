"use client";

import { NextPage } from "next";
import Link from "next/link";
import { categories } from "@/data/categories";
import { products } from "@/data/products";
import { benefits } from "@/data/benefits";
import { updateUrlParam } from "@/lib/helpers";
import { useRouter } from "next/navigation";
import { contactConfigs, siteConfigs } from "@/config";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  const router = useRouter();

  return (
    <>
      <footer className="bg-gray-200 pt-16 mt-12 pb-12 px-4 md:px-12 border-t border-gray-100">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          <div className="col-span-1 space-y-3">
            <h1 className="font-semibold text-3xl text-gray-700">
              {siteConfigs.name}
            </h1>
            <p className="text-gray-500">{siteConfigs.description}</p>
            <div className="flex items-center space-x-5">
              {contactConfigs.owner.socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.link}
                  className={`text-gray-400 ${
                    social.color
                      ? `hover:text-[${social.color}]`
                      : "hover:text-emerald-600"
                  } transition`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Social Media
                </h2>
                <div className="mt-4 space-y-3">
                  {contactConfigs.owner.socials.map((social, index) => (
                    <Link
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-base text-gray-500 ${
                        social.color
                          ? `hover:text-[${social.color}]`
                          : "hover:text-emerald-600"
                      } flex gap-2 items-center`}
                    >
                      <span
                        className={`
                      ${
                        social.color
                          ? `text-[${social.color}]`
                          : "text-emerald-600"
                      }
                      `}
                      >
                        {social.icon}
                      </span>
                      {social.account}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Benefit
                </h2>
                <div className="mt-4 space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="text-base text-gray-500 block">
                      {benefit.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Kategori
                </h2>
                <div className="mt-4 space-y-3">
                  {categories.slice(0, 4).map((category, index) => (
                    <a
                      key={index}
                      onClick={() =>
                        updateUrlParam(router, "categories", category.id)
                      }
                      className="text-base text-gray-500 hover:text-emerald-600 block cursor-pointer"
                    >
                      {category.title}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Produk
                </h2>
                <div className="mt-4 space-y-3">
                  {products.slice(0, 4).map((product, index) => (
                    <Link
                      key={index}
                      href={`/furniture/${product.uuid}`}
                      className="text-base text-gray-500 hover:text-emerald-600 block"
                    >
                      {product.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <hr className="border-gray-300" />
      <div className="bg-gray-200 py-4 px-4 md:px-12">
        <div className="container flex items-center justify-center">
          <p className="font-semibold">
            &copy; {siteConfigs.year} {siteConfigs.name} By&nbsp;
            <Link
              href={contactConfigs.developer.portfolioLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              {siteConfigs.developer.name}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
