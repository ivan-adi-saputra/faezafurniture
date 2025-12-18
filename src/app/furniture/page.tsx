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
  ProductFilterMd,
  ProductFilterSm,
} from "@/components/ui/ProductFilter";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { products as dataProducts } from "@/data/products";
import { useProductFiltersFromParams } from "@/hooks/useProductFilters";
import { applyFilters } from "@/lib/applyFilters";
import {
  clearAllUrlParams,
  getCleanQueryString,
  updateUrlParam,
  updateUrlParams,
} from "@/lib/helpers";
import { Product, ProductFilters, SortFilter } from "@/types/Product";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState, useCallback, useRef } from "react";

interface Props {}

const PRODUCTS_PER_PAGE = 12;

const Furniture: NextPage<Props> = ({}) => {
  const params = useSearchParams();
  const router = useRouter();

  const {
    categories,
    minPrice,
    maxPrice,
    minDiscount,
    maxDiscount,
    sort,
    search,
  } = useProductFiltersFromParams();

  const [currentPage, setCurrentPage] = useState(1);
  const [isAppending, setIsAppending] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [products, setProducts] = useState<Product[]>([]);
  const [totalProduct, setTotalProduct] = useState(0);
  const [isLoadingProduct, setIsLoadingProduct] = useState(true);
  const [filters, setFilters] = useState<ProductFilters>({
    search,
    categories,
    minPrice,
    maxPrice,
    minDiscount,
    maxDiscount,
    sort,
  });

  const isFilterActive = useMemo(() => {
    if (filters.categories && filters.categories.length > 0) return true;

    for (const key in filters) {
      if (key === "categories" || key === "sort") continue;

      const value = filters[key as keyof ProductFilters];
      if (typeof value === "string" && value.trim() !== "") return true;
    }

    return false;
  }, [filters]);

  const handleFilterChange = useCallback(
    (
      name: keyof ProductFilters,
      value: string | number,
      isToggle: boolean = false
    ) => {
      setFilters((prevFilters: any) => {
        if (name === "categories" && isToggle) {
          const currentCategories = prevFilters.categories;

          if (currentCategories.includes(value)) {
            return {
              ...prevFilters,
              categories: currentCategories.filter(
                (catId: any) => catId !== value
              ),
            };
          } else {
            return {
              ...prevFilters,
              categories: [...currentCategories, value],
            };
          }
        }

        return {
          ...prevFilters,
          [name]: value,
        };
      });
    },
    []
  );

  const applyFilterAndPaginate = (
    filterState: ProductFilters,
    resetPage: boolean = true
  ) => {
    const filteredProducts = applyFilters(dataProducts, filterState);
    if (resetPage) {
      setCurrentPage(1);
    }

    const start = 0;
    const end = resetPage ? PRODUCTS_PER_PAGE : currentPage * PRODUCTS_PER_PAGE;

    const initialProducts = filteredProducts.slice(start, end);
    setProducts(initialProducts);
    setTotalProduct(filteredProducts.length);
    setHasMore(filteredProducts.length > initialProducts.length);
  };

  const loadMoreProducts = useCallback(() => {
    if (isAppending || !hasMore || isLoadingProduct) return;

    setIsAppending(true);

    setTimeout(() => {
      const nextPage = currentPage + 1;
      const start = products.length;
      const end = start + PRODUCTS_PER_PAGE;

      const fullFilteredList = applyFilters(dataProducts, filters);
      const newProducts = fullFilteredList.slice(start, end);

      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setCurrentPage(nextPage);
      setHasMore(fullFilteredList.length > end);

      setIsAppending(false);
    }, 500);
  }, [
    currentPage,
    isAppending,
    hasMore,
    isLoadingProduct,
    products.length,
    filters,
  ]);

  const handleApplyFilter = () => {
    setIsLoadingProduct(true);

    const targetQueryString = getCleanQueryString(filters);

    let currentQueryString = "";
    if (typeof window !== "undefined") {
      currentQueryString = window.location.search.substring(1);
    }

    if (targetQueryString === currentQueryString) {
      applyFilterAndPaginate(filters);
      setIsLoadingProduct(false);
      return;
    }

    updateUrlParams(router, filters);
  };

  const handleClearFilter = () => {
    setIsLoadingProduct(true);

    const defaultFilters: ProductFilters = {
      search: "",
      categories: [],
      minPrice: "",
      maxPrice: "",
      minDiscount: "",
      maxDiscount: "",
      sort: SortFilter.Latest,
    };
    setFilters(defaultFilters);
    applyFilterAndPaginate(defaultFilters);

    clearAllUrlParams(router);

    setIsLoadingProduct(false);
  };

  useEffect(() => {
    const newSearch = params.get("search") || "";

    const rawSort = params.get("sort") as SortFilter;
    let newSort: SortFilter;
    if (rawSort && Object.values(SortFilter).includes(rawSort)) {
      newSort = rawSort as SortFilter;
    } else {
      newSort = SortFilter.Latest;
    }

    const newCategories = params.get("categories")
      ? params
          .get("categories")!
          .split(",")
          .map((id) => parseInt(id))
      : [];

    const updatedFilters = {
      ...filters,
      search: newSearch,
      categories: newCategories,
      sort: newSort,
    };

    setFilters(updatedFilters);
    const filteredProducts = applyFilters(dataProducts, updatedFilters);

    setProducts(filteredProducts);

    applyFilterAndPaginate(updatedFilters, true);

    setIsLoadingProduct(false);
  }, [params]);

  useEffect(() => {
    if (!hasMore) return;

    const handleScroll = () => {
      const scrollPosition =
        window.innerHeight + document.documentElement.scrollTop;

      const width = window.innerWidth;
      let offset: number;

      if (width < 640) {
        offset = 750; // sm
      } else {
        offset = 500; // md
      }
      const targetPosition = document.documentElement.offsetHeight - offset;

      if (scrollPosition >= targetPosition && !isAppending && hasMore) {
        loadMoreProducts();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loadMoreProducts, isAppending, hasMore]);

  return (
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
        <ProductFilterMd
          filters={filters}
          handleApplyFilter={handleApplyFilter}
          handleClearFilter={handleClearFilter}
          isFilterActive={isFilterActive}
          handleFilterChange={handleFilterChange}
        />

        <main className="lg:col-span-3">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
            <p className="text-gray-600 font-semibold hidden md:block">
              {totalProduct} produk ditemukan
            </p>

            <div className="flex items-center gap-2 w-full md:w-auto">
              <h5 className="text-xs md:text-sm font-bold">Urutkan:</h5>
              <Select
                value={filters.sort}
                onValueChange={(value: SortFilter) =>
                  updateUrlParam(router, "sort", value)
                }
              >
                <SelectTrigger className="w-full md:w-[220px]">
                  <SelectValue placeholder="Paling Sesuai" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value={SortFilter.Latest}>Terbaru</SelectItem>
                    <SelectItem value={SortFilter.MostSuitable}>
                      Paling Sesuai
                    </SelectItem>
                    <SelectItem value={SortFilter.HighestPrice}>
                      Harga Tertinggi
                    </SelectItem>
                    <SelectItem value={SortFilter.LowestPrice}>
                      Harga Terendah
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <ProductFilterSm
                filters={filters}
                handleApplyFilter={handleApplyFilter}
                handleClearFilter={handleClearFilter}
                isFilterActive={isFilterActive}
                handleFilterChange={handleFilterChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {isLoadingProduct
              ? Array.from({ length: PRODUCTS_PER_PAGE }).map((_, index) => (
                  <ProductLoading key={index} />
                ))
              : products?.length > 0 &&
                products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}

            {isAppending &&
              Array.from({ length: 8 }).map((_, index) => (
                <ProductLoading key={`append-${index}`} />
              ))}
          </div>

          {products?.length < 1 && !isLoadingProduct && (
            <div className="font-semibold text-gray-500 text-center">
              Produk tidak ditemukan.
            </div>
          )}

          {!hasMore && products.length > 0 && !isLoadingProduct && (
            <div className="text-gray-500 text-center text-sm mt-8">
              Semua produk sudah dimuat.
            </div>
          )}
        </main>
      </div>
    </section>
  );
};

export default Furniture;
