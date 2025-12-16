import { Product, ProductFilters, SortFilter } from "@/types/Product";
import { getEffectivePrice } from "./helpers";

export const applyFilters = (products: Product[], filters: ProductFilters) => {
  let filteredProducts = products;
  const {
    categories,
    minPrice,
    maxPrice,
    minDiscount,
    maxDiscount,
    sort,
    search,
  } = filters;

  if (categories && categories.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      categories.includes(product.category_id)
    );
  }

  const minP = parseFloat(minPrice);
  const maxP = parseFloat(maxPrice);

  if (!isNaN(minP) && minP > 0) {
    filteredProducts = filteredProducts.filter((product) => {
      if (product.price_discount && product.price_discount > 0) {
        return product.price_discount >= minP;
      } else {
        return product.price >= minP;
      }
    });
  }

  if (!isNaN(maxP) && maxP > 0) {
    filteredProducts = filteredProducts.filter((product) => {
      if (product.price_discount && product.price_discount > 0) {
        return product.price_discount <= maxP;
      } else {
        return product.price <= maxP;
      }
    });
  }

  const minD = parseFloat(minDiscount);
  const maxD = parseFloat(maxDiscount);

  if (!isNaN(minD) && minD > 0) {
    filteredProducts = filteredProducts.filter(
      (product) => product.discount >= minD
    );
  }

  if (!isNaN(maxD) && maxD > 0) {
    filteredProducts = filteredProducts.filter(
      (product) => product.discount <= maxD
    );
  }

  if (search && search.trim() !== "") {
    const searchTerm = search.trim().toLowerCase();

    filteredProducts = filteredProducts.filter((product) => {
      const nameMatch = product.title.toLowerCase().includes(searchTerm);
      const categoryMatch = product.category_name
        ? product.category_name.toLowerCase().includes(searchTerm)
        : false;

      return nameMatch || categoryMatch;
    });
  }

  if (sort) {
    filteredProducts.sort((a, b) => {
      const priceA = getEffectivePrice(a);
      const priceB = getEffectivePrice(b);

      switch (sort) {
        case SortFilter.HighestPrice:
          return priceB - priceA;
        case SortFilter.LowestPrice:
          return priceA - priceB;
        case SortFilter.Latest:
          return b.id - a.id;
        case SortFilter.MostSuitable:
          const scoreA = a.rating * 100;
          const scoreB = b.rating * 100;

          return scoreB - scoreA;
        default:
          return 0;
      }
    });
  }

  return filteredProducts;
};
