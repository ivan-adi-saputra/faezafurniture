"use client";

import { LayoutGrid, MapPin, Menu, Moon, Search, X } from "lucide-react";
import { NextPage } from "next";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { updateUrlParam } from "@/lib/helpers";
import { Product } from "@/types/Product";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { contactConfigs, siteConfigs } from "@/config";

interface Props {}

const navbarLists = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Furniture",
    url: "/furniture",
  },
  {
    title: "Tentang Kami",
    url: "/about-me",
  },
];

const Navbar: NextPage<Props> = ({}) => {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const handleSearch = () => {
    const searchValue = search.trim();
    updateUrlParam(router, "search", searchValue);
  };

  useEffect(() => {
    const searchParam = params.get("search");
    if (searchParam) {
      setSearch(searchParam);
    } else {
      setSearch("");
    }
  }, [params]);

  useEffect(() => {
    if (search.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filtered.slice(0, 5));
  }, [search, products]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-sm mb-3 relative z-999">
      <div className="container mx-auto px-4 md:px-12 py-4 flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0">
        <Link href={"/"}>
          <span className="text-3xl font-bold text-gray-800">
            {siteConfigs.name}
          </span>
        </Link>

        <div className="w-full md:w-auto flex items-center space-x-4 grow max-w-xl">
          {/* input search */}
          <div className="relative grow" ref={searchRef}>
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
                onFocus={() => setShowDropdown(true)}
                placeholder="Cari produk di sini..."
                className="w-full h-10 px-4 pr-10 border font-semibold text-gray-500 border-gray-300 rounded-lg placeholder:font-normal focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
              />

              <button
                type="button"
                onClick={() => handleSearch()}
                className="absolute right-1.5 top-1.5 bottom-1.5 px-4 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm rounded-sm transition-all active:scale-95 shadow-sm cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Cari</span>
              </button>
            </div>

            {search.trim() && showDropdown && (
              <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
                <div className="max-h-80 overflow-y-auto p-2">
                  {searchResults.length > 0 ? (
                    <div className="space-y-1">
                      {searchResults.map((product, index) => (
                        <Link
                          key={index}
                          href={`/furniture/${product.uuid}`}
                          onClick={() => setSearch("")}
                          className="block"
                        >
                          <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition-colors group">
                            <img
                              src={
                                product.galleries[0]?.url ||
                                "/placeholder-product.png"
                              }
                              alt={product.title}
                              className="w-12 h-12 object-cover rounded-md border border-gray-100"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-gray-800 truncate">
                                {product.title}
                              </p>
                              <div className="flex items-center justify-start gap-3">
                                <strong className="text-[10px] md:text-xs">
                                  Rp{" "}
                                  {product.price_discount > 0
                                    ? product.price_discount.toLocaleString()
                                    : product.price.toLocaleString()}
                                </strong>
                                {product.price_discount > 0 && (
                                  <strong className="text-[7px] md:text-[10px] line-through text-gray-400">
                                    Rp. {product.price.toLocaleString()}
                                  </strong>
                                )}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="py-4 text-center">
                      <p className="text-sm text-gray-500 font-medium">
                        Maaf, produk tidak ditemukan.
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        Coba gunakan kata kunci lain.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <Link
            href={siteConfigs.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded-lg hover:text-white hover:bg-emerald-600 transition-colors"
          >
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">Lokasi</span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg lg:hidden">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              {navbarLists.map((navbar, index) => (
                <Link
                  href={navbar.url}
                  key={index}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700"
                >
                  {navbar.title}
                </Link>
              ))}

              <div className="pt-4">
                <Link
                  target="_blank"
                  href={contactConfigs.owner.whatsappLink}
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 py-2 px-3 text-white bg-emerald-600 rounded-md hover:bg-green-700"
                >
                  <FaWhatsapp /> Hubungi Kami
                </Link>
              </div>
            </nav>
          </div>
        )}

        <div className="hidden md:flex items-center space-x-6">
          {/* Icon Dark Mode */}
          {/* <Moon className="w-7 h-7 cursor-pointer" /> */}
          <Link
            target="_blank"
            href={contactConfigs.owner.whatsappLink}
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 py-2 px-3 text-white bg-emerald-600 rounded-md hover:bg-green-700"
          >
            <FaWhatsapp /> Hubungi Kami
          </Link>

          {/* <Link
            href="#"
            className="relative text-gray-600 hover:text-emerald-600"
          >
            <Heart className="h-7 w-7" />
            <span className="absolute top-0 right-0 -mr-2 -mt-1 w-4 h-4 text-xs font-bold bg-green-500 text-white rounded-full flex items-center justify-center">
              5
            </span>
          </Link>
          <Link
            href="#"
            className="relative text-gray-600 hover:text-emerald-600"
          >
            <ShoppingBag className="h-7 w-7" />
            <span className="absolute top-0 right-0 -mr-2 -mt-1 w-4 h-4 text-xs font-bold bg-green-500 text-white rounded-full flex items-center justify-center">
              4
            </span>
          </Link> */}
        </div>
      </div>

      <nav className="container mx-auto px-4 md:px-12 py-2 hidden md:block">
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="px-4 py-5 space-x-2 bg-emerald-600! text-white! hover:text-white! data-[state=open]:bg-emerald-600! data-[state=open]:text-white!">
                <LayoutGrid className="h-5 w-5" /> Semua Kategori
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
                  <li>
                    {categories.map((category, index) => (
                      <NavigationMenuLink key={index} asChild>
                        <a
                          className="cursor-pointer"
                          onClick={() =>
                            updateUrlParam(router, "categories", category.id)
                          }
                        >
                          {category.title}
                        </a>
                      </NavigationMenuLink>
                    ))}
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            {navbarLists.map((nav, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} ${
                    pathname == nav.url
                      ? `text-emerald-600 hover:text-emerald-600`
                      : `text-gray-600 hover:text-gray-600`
                  }`}
                >
                  <Link href={nav.url} className={`font-bold`}>
                    {nav.title}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>

      <hr className="border-gray-200 hidden md:block" />
    </header>
  );
};

export default Navbar;
