import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { ProductFilters, SortFilter } from "@/types/Product";

export const useProductFiltersFromParams = (): ProductFilters => {
  const params = useSearchParams();

  const categories = useMemo(() => {
    const categoryParam = params.get("categories");
    return categoryParam
      ? categoryParam.split(",").map((id) => parseInt(id))
      : [];
  }, [params]);

  const getFilterValue = (paramName: string): string => {
    const paramValue = params.get(paramName);
    if (!paramValue) return "";

    const parsed = parseInt(paramValue);
    return isNaN(parsed) ? "" : parsed.toString();
  };

  const minPrice = getFilterValue("minPrice");
  const maxPrice = getFilterValue("maxPrice");
  const minDiscount = getFilterValue("minDiscount");
  const maxDiscount = getFilterValue("maxDiscount");
  const search = getFilterValue("search");

  const sort = (params.get("sortBy") as SortFilter) ?? SortFilter.Latest;

  return {
    search,
    categories,
    minPrice,
    maxPrice,
    minDiscount,
    maxDiscount,
    sort,
  };
};
