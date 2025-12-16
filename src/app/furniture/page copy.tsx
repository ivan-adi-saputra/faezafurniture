"use client";

import ProductCard from "@/components/card/ProductCard";
import { ProductLoading } from "@/components/section/Product";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories as dataCategories } from "@/data/categories";
import { products as dataProducts } from "@/data/products";
import { useDebounce } from "@/hooks/useDebounce";
import { applyFilters } from "@/lib/applyFilters";
import { formatPrice, updateUrlParams } from "@/lib/helpers"; // Assuming formatPrice and updateUrlParams are correctly implemented
import { ProductFilters, SortFilter } from "@/types/Product";
import { Filter } from "lucide-react";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState, useCallback, useRef } from "react";

const processedDataProducts = dataProducts;

interface Props {}

const Furniture: NextPage<Props> = ({}) => {
  const params = useSearchParams();
  const router = useRouter();

  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const [filters, setFilters] = useState<ProductFilters>({
    search: "",
    categories: [],
    minPrice: "",
    maxPrice: "",
    minDiscount: "",
    maxDiscount: "",
    sort: SortFilter.Latest,
  });

  const handleFilterChange = (name: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredProductsV1 = useMemo(() => {
    return applyFilters(dataProducts, filters);
  }, [filters]);

  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [isLoadingProduct, setIsLoadingProduct] = useState(true);
  const [categoryFilterText, setCategoryFilterText] = useState("");
  const [isLoadingCategory, setIsLoadingCategory] = useState(true);

  const currentSearch = params.get("search") ?? undefined;
  const currentSelectedCategories = useMemo(() => {
    const categoryParam = params.get("category");
    return categoryParam ? categoryParam.split(",").map(Number) : [];
  }, [params]);
  const currentMinPrice = params.get("minPrice")
    ? parseInt(params.get("minPrice")!)
    : undefined;
  const currentMaxPrice = params.get("maxPrice")
    ? parseInt(params.get("maxPrice")!)
    : undefined;
  const currentMinDiscount = params.get("minDiscount")
    ? parseInt(params.get("minDiscount")!)
    : undefined;
  const currentMaxDiscount = params.get("maxDiscount")
    ? parseInt(params.get("maxDiscount")!)
    : undefined;
  const currentSortBy = params.get("sortBy") ?? "2";

  const [minPriceInput, setMinPriceInput] = useState<string>("");
  const [maxPriceInput, setMaxPriceInput] = useState<string>("");
  const [minDiscountInput, setMinDiscountInput] = useState<string>("");
  const [maxDiscountInput, setMaxDiscountInput] = useState<string>("");

  const debouncedMinPrice = useDebounce(minPriceInput, 500);
  const debouncedMaxPrice = useDebounce(maxPriceInput, 500);
  const debouncedMinDiscount = useDebounce(minDiscountInput, 500);
  const debouncedMaxDiscount = useDebounce(maxDiscountInput, 500);

  const handleMinPriceChange = (value: string) => {
    const rawValue = value.replace(/\D/g, "");
    setMinPriceInput(rawValue);
  };

  const handleMaxPriceChange = (value: string) => {
    const rawValue = value.replace(/\D/g, "");
    setMaxPriceInput(rawValue);
  };

  const handleMinDiscountChange = (value: string) => {
    const rawValue = value.replace(/\D/g, "");
    setMinDiscountInput(rawValue);
  };

  const handleMaxDiscountChange = (value: string) => {
    const rawValue = value.replace(/\D/g, "");
    setMaxDiscountInput(rawValue);
  };

  useEffect(() => {
    const rawMinPrice =
      debouncedMinPrice.length > 0 ? parseInt(debouncedMinPrice) : undefined;
    const rawMaxPrice =
      debouncedMaxPrice.length > 0 ? parseInt(debouncedMaxPrice) : undefined;
    const rawMinDiscount =
      debouncedMinDiscount.length > 0
        ? parseInt(debouncedMinDiscount)
        : undefined;
    const rawMaxDiscount =
      debouncedMaxDiscount.length > 0
        ? parseInt(debouncedMaxDiscount)
        : undefined;

    const isDiff = (
      rawVal: number | undefined,
      currentVal: number | undefined
    ): boolean => {
      if (rawVal === undefined && currentVal === undefined) return false;
      if (rawVal === undefined || currentVal === undefined) return true;
      return rawVal !== currentVal;
    };

    let updates: { [key: string]: number | undefined } = {};
    let shouldUpdate = false;

    if (isDiff(rawMinPrice, currentMinPrice)) {
      updates.minPrice = rawMinPrice;
      shouldUpdate = true;
    }
    if (isDiff(rawMaxPrice, currentMaxPrice)) {
      updates.maxPrice = rawMaxPrice;
      shouldUpdate = true;
    }
    if (isDiff(rawMinDiscount, currentMinDiscount)) {
      updates.minDiscount = rawMinDiscount;
      shouldUpdate = true;
    }
    if (isDiff(rawMaxDiscount, currentMaxDiscount)) {
      updates.maxDiscount = rawMaxDiscount;
      shouldUpdate = true;
    }

    if (shouldUpdate) {
      // updateUrlParams(updates, params, router);
    }
  }, [
    debouncedMinPrice,
    debouncedMaxPrice,
    debouncedMinDiscount,
    debouncedMaxDiscount,
    currentMinPrice,
    currentMaxPrice,
    currentMinDiscount,
    currentMaxDiscount,
    params,
    router,
  ]);

  const handleFilter = useCallback(() => {
    setIsLoadingProduct(true);

    let filtered = [...processedDataProducts];

    if (currentSearch) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(currentSearch.toLowerCase())
      );
    }

    if (currentSelectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        currentSelectedCategories.includes(product.category_id)
      );
    }

    if (currentMinPrice !== undefined) {
      filtered = filtered.filter(
        (product) =>
          (product.price_discount ?? product.price) >= currentMinPrice
      );
    }
    if (currentMaxPrice !== undefined) {
      filtered = filtered.filter(
        (product) =>
          (product.price_discount ?? product.price) <= currentMaxPrice
      );
    }

    if (currentMinDiscount !== undefined) {
      filtered = filtered.filter(
        (product) => product.discount >= currentMinDiscount
      );
    }
    if (currentMaxDiscount !== undefined) {
      filtered = filtered.filter(
        (product) => product.discount <= currentMaxDiscount
      );
    }

    filtered.sort((a, b) => {
      switch (currentSortBy) {
        case "1":
          return b.id - a.id;
        case "3":
          return (b.price_discount ?? b.price) - (a.price_discount ?? a.price);
        case "4":
          return (a.price_discount ?? a.price) - (b.price_discount ?? b.price);
        case "2":
        default:
          return 0;
      }
    });

    setTimeout(() => {
      setFilteredProducts(filtered);
      setIsLoadingProduct(false);
      setIsLoadingCategory(false);
    }, 150);
  }, [
    currentSearch,
    currentSelectedCategories,
    currentMinPrice,
    currentMaxPrice,
    currentMinDiscount,
    currentMaxDiscount,
    currentSortBy,
  ]);

  useEffect(() => {
    handleFilter();
  }, [params, handleFilter]);

  const handleCategoryChange = (categoryId: number, isChecked: boolean) => {
    let newCategories = isChecked
      ? [...currentSelectedCategories, categoryId]
      : currentSelectedCategories.filter((id) => id !== categoryId);

    const uniqueCategories = Array.from(new Set(newCategories));
    // updateUrlParams({ category: uniqueCategories }, params, router);
  };

  const handleNumericInputChange = (value: string, key: string) => {
    const rawValue = value.replace(/\D/g, "");
    const num = parseInt(rawValue);
    // updateUrlParams({ [key]: isNaN(num) ? undefined : num }, params, router);
  };

  const handleSortChange = (value: string) => {
    // updateUrlParams({ sortBy: value }, params, router);
  };

  const filteredCategories = useMemo(() => {
    if (!categoryFilterText) return dataCategories.slice(0, 4);
    return dataCategories
      .filter((category) =>
        category.title.toLowerCase().includes(categoryFilterText.toLowerCase())
      )
      .slice(0, 4);
  }, [categoryFilterText]);

  const handleSearchCategory = (currentValue: string) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      setCategoryFilterText(currentValue);
    }, 300);
  };

  return (
    <>
      <section className="container py-0 md:py-8 px-4 md:px-12">
        <Breadcrumb className="hidden md:block">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Furniture</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="md:py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="bg-white rounded-lg space-y-8 sticky top-5">
              {/* Filter By Category */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  Kategori
                </h3>
                {/* <div className="relative mb-4">
                  <input
                    onChange={(e) => handleSearchCategory(e.target.value)}
                    type="text"
                    placeholder="Cari berdasarkan kategori"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#001f3f]"
                  />
                </div> */}
                <ul className="space-y-2">
                  {/* Categories */}
                  {isLoadingCategory ? (
                    Array.from({ length: 4 }).map((_, index) => (
                      <li
                        key={index}
                        className="flex items-center space-x-2 animate-pulse"
                      >
                        <div className="w-4 h-4 rounded bg-gray-300" />
                        <div className="w-full h-4 rounded bg-gray-300" />
                      </li>
                    ))
                  ) : filteredCategories.length < 1 ? (
                    <li className="text-sm text-gray-600">
                      Kategori tidak ditemukan.
                    </li>
                  ) : (
                    filteredCategories.map((category, index) => (
                      <button
                        key={index}
                        className={`border border-[#001f3f] mr-3 mb-3 px-3 py-1 rounded-lg ${
                          filters.categories.includes(category.id) &&
                          "bg-[#001f3f] text-white"
                        }`}
                        onChange={(e) =>
                          handleCategoryChange(
                            category.id,
                            currentSelectedCategories.includes(category.id)
                          )
                        }
                      >
                        {category.title}
                      </button>
                      // <li key={index} className="flex items-center space-x-2">
                      //   <input
                      //     type="checkbox"
                      //     className="rounded text-green-600 focus:ring-[#001f3f]"
                      //     id={`category-${index}`}
                      //     checked={currentSelectedCategories.includes(
                      //       category.id
                      //     )}
                      //     onChange={(e) =>
                      //       handleCategoryChange(category.id, e.target.checked)
                      //     }
                      //   />
                      //   <label
                      //     htmlFor={`category-${index}`}
                      //     className="text-gray-600 cursor-pointer"
                      //   >
                      //     {category.title}
                      //   </label>
                      // </li>
                    ))
                  )}
                </ul>
              </div>

              {/* Filter By Price */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Harga</h3>
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Harga Minimum"
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#001f3f]"
                    value={minPriceInput.toString()}
                    onChange={(e) => handleMinPriceChange(e.target.value)}
                  />

                  <input
                    type="text"
                    placeholder="Harga Maksimum"
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#001f3f]"
                    value={maxPriceInput.toString()}
                    onChange={(e) => handleMaxPriceChange(e.target.value)}
                  />
                </div>
              </div>

              {/* Filter By Discount */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-4">Diskon</h3>
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Diskon Minimum"
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#001f3f]"
                    value={minDiscountInput}
                    onChange={(e) => handleMinDiscountChange(e.target.value)}
                  />

                  <input
                    type="text"
                    placeholder="Diskon Maksimum"
                    className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-[#001f3f]"
                    value={maxDiscountInput}
                    onChange={(e) => handleMaxDiscountChange(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
              <p className="text-gray-600 font-semibold hidden md:block">
                {filteredProducts.length} produk ditemukan
              </p>

              <div className="flex items-center gap-2 w-full md:w-auto">
                <h5 className="text-xs md:text-sm font-bold">Urutkan:</h5>
                <Select value={currentSortBy} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-full md:w-[220px]">
                    <SelectValue placeholder="Paling Sesuai" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="1">Terbaru</SelectItem>
                      <SelectItem value="2">Paling Sesuai</SelectItem>
                      <SelectItem value="3">Harga Tertinggi</SelectItem>
                      <SelectItem value="4">Harga Terendah</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Drawer>
                  <DrawerTrigger asChild>
                    <button
                      onClick={() => {}}
                      className="flex items-center gap-2 px-4 py-2 text-sm bg-[#001f3f] text-white md:hidden rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <Filter className="w-5 h-5" />
                      Filters
                    </button>
                  </DrawerTrigger>
                  <DrawerContent>
                    <div className="mx-auto w-full max-w-sm">
                      <DrawerHeader>
                        <DrawerTitle>Filter Produk</DrawerTitle>
                        <DrawerDescription>
                          Tentukan kriteria untuk menyaring daftar produk.
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="p-4 pb-0">
                        {/* Filter By Category */}
                        <div>
                          <h3 className="text-md font-bold text-gray-800 mb-3">
                            Kategori
                          </h3>
                          {isLoadingCategory ? (
                            Array.from({ length: 4 }).map((_, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-2 animate-pulse"
                              >
                                <div className="w-4 h-4 rounded bg-gray-300" />
                                <div className="w-full h-4 rounded bg-gray-300" />
                              </div>
                            ))
                          ) : filteredCategories.length < 1 ? (
                            <div className="text-sm text-gray-600">
                              Kategori tidak ditemukan.
                            </div>
                          ) : (
                            filteredCategories.map((category, index) => (
                              <button
                                key={index}
                                className={`border border-[#001f3f] mr-3 mb-3 px-3 py-1 rounded-lg ${
                                  currentSelectedCategories.includes(
                                    category.id
                                  ) && "bg-[#001f3f] text-white"
                                }`}
                                onChange={(e) =>
                                  handleCategoryChange(
                                    category.id,
                                    currentSelectedCategories.includes(
                                      category.id
                                    )
                                  )
                                }
                              >
                                {category.title}
                              </button>
                            ))
                          )}
                        </div>

                        {/* Filter By Price */}
                        <div>
                          <h3 className="text-md font-bold text-gray-800 mb-3">
                            Harga
                          </h3>
                          <input
                            type="text"
                            placeholder="Harga Minimum"
                            className="w-full px-4 py-2 border border-[#001f3f] rounded-md text-sm"
                            value={minPriceInput.toString()}
                            onChange={(e) =>
                              handleMinPriceChange(e.target.value)
                            }
                          />

                          <input
                            type="text"
                            placeholder="Harga Maksimum"
                            className="w-full mt-2 mb-3 px-4 py-2 border border-[#001f3f] rounded-md text-sm"
                            value={maxPriceInput.toString()}
                            onChange={(e) =>
                              handleMaxPriceChange(e.target.value)
                            }
                          />
                        </div>

                        {/* Filter By Discount */}
                        <div>
                          <h3 className="text-md font-bold text-gray-800 mb-3">
                            Diskon
                          </h3>
                          <input
                            type="text"
                            placeholder="Diskon Minimum"
                            className="w-full px-4 py-2 border border-[#001f3f] rounded-md text-sm"
                            value={minDiscountInput}
                            onChange={(e) =>
                              handleMinDiscountChange(e.target.value)
                            }
                          />

                          <input
                            type="text"
                            placeholder="Diskon Maksimum"
                            className="w-full mt-2 px-4 py-2 border border-[#001f3f] rounded-md text-sm"
                            value={maxDiscountInput}
                            onChange={(e) =>
                              handleMaxDiscountChange(e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <DrawerFooter>
                        <button className="px-4 py-2 bg-[#001f3f] text-white rounded-lg">
                          Tampilkan Produk
                        </button>
                      </DrawerFooter>
                    </div>
                  </DrawerContent>
                </Drawer>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {isLoadingProduct
                ? Array.from({ length: 8 }).map((_, index) => (
                    <ProductLoading key={index} />
                  ))
                : filteredProducts?.length > 0 &&
                  filteredProducts.map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
            </div>
            {filteredProducts?.length < 1 && !isLoadingProduct && (
              <div className="font-semibold text-gray-500 text-center">
                Produk tidak ditemukan.
              </div>
            )}
          </main>
        </div>
      </section>
    </>
  );
};

export default Furniture;
