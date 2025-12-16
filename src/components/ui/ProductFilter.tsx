import { categories } from "@/dataOld/categories";
import { formatPrice } from "@/lib/helpers";
import { ProductFilters } from "@/types/Product";
import { NextPage } from "next";
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
import { Filter } from "lucide-react";

interface Props {
  isFilterActive: boolean;
  handleClearFilter: () => void;
  filters: ProductFilters;
  handleFilterChange: (
    name: keyof ProductFilters,
    value: string | number,
    isToggle?: boolean
  ) => void;
  handleApplyFilter: () => void;
}

export const ProductFilterMd: NextPage<Props> = ({
  isFilterActive,
  handleClearFilter,
  filters,
  handleFilterChange,
  handleApplyFilter,
}) => {
  return (
    <aside className="hidden lg:block lg:col-span-1">
      <div className="bg-white space-y-4 rounded-lg sticky top-5">
        <div className="flex justify-between">
          <h3 className="text-md font-bold text-gray-800">Filter</h3>
          {/* {isFilterActive && ( */}
          <span
            onClick={handleClearFilter}
            className="text-red-500 font-semibold cursor-pointer"
          >
            Clear
          </span>
          {/* )} */}
        </div>
        <hr />

        <FilterContent
          filters={filters}
          handleFilterChange={handleFilterChange}
        />

        {isFilterActive && (
          <button
            onClick={handleApplyFilter}
            className="w-full py-2 bg-emerald-600 text-white rounded-lg cursor-pointer"
          >
            Tampilkan Produk
          </button>
        )}
      </div>
    </aside>
  );
};

export const ProductFilterSm: NextPage<Props> = ({
  isFilterActive,
  handleClearFilter,
  filters,
  handleFilterChange,
  handleApplyFilter,
}) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button
          onClick={() => {}}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-emerald-600 text-white md:hidden rounded-lg hover:opacity-90 transition-opacity"
        >
          <Filter className="w-5 h-5" />
          Filters
        </button>
      </DrawerTrigger>
      <DrawerContent className="min-h-[620px]">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Filter Produk</DrawerTitle>
            <DrawerDescription>
              Tentukan kriteria untuk menyaring daftar produk.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <FilterContent
              filters={filters}
              handleFilterChange={handleFilterChange}
            />
          </div>
          <DrawerFooter>
            {isFilterActive && (
              <DrawerClose asChild>
                <button
                  onClick={handleApplyFilter}
                  className="px-4 py-2 bg-emerald-600 text-white rounded-lg"
                >
                  Tampilkan Produk
                </button>
              </DrawerClose>
            )}
            <DrawerClose asChild>
              <button
                onClick={handleClearFilter}
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Clear
              </button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

interface PropsFilterContent {
  filters: ProductFilters;
  handleFilterChange: (
    name: keyof ProductFilters,
    value: string | number,
    isToggle?: boolean
  ) => void;
}

const FilterContent: NextPage<PropsFilterContent> = ({
  filters,
  handleFilterChange,
}) => {
  return (
    <>
      {/* Filter By Category */}
      <div>
        <h3 className="text-md font-bold text-gray-800 mb-4">Kategori</h3>

        {categories.map((category, index) => (
          <button
            key={index}
            className={`border border-emerald-600 mr-3 mb-3 px-3 py-1 rounded-lg cursor-pointer ${
              filters.categories?.includes(category.id) &&
              "bg-emerald-600 text-white"
            }`}
            onClick={(e) => handleFilterChange("categories", category.id, true)}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Filter By Price */}
      <div>
        <h3 className="text-md font-bold text-gray-800">Harga</h3>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Harga Minimum"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-emerald-600"
            value={
              filters.minPrice ? formatPrice(parseInt(filters.minPrice)) : ""
            }
            onChange={(e) =>
              handleFilterChange("minPrice", e.target.value.replace(/\D/g, ""))
            }
          />

          <input
            type="text"
            placeholder="Harga Maksimum"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-emerald-600"
            value={
              filters.maxPrice ? formatPrice(parseInt(filters.maxPrice)) : ""
            }
            onChange={(e) =>
              handleFilterChange("maxPrice", e.target.value.replace(/\D/g, ""))
            }
          />
        </div>
      </div>

      {/* Filter By Discount */}
      <div>
        <h3 className="text-md font-bold text-gray-800">Diskon</h3>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Diskon Minimum"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-emerald-600"
            value={
              filters.minDiscount
                ? formatPrice(parseInt(filters.minDiscount))
                : ""
            }
            onChange={(e) =>
              handleFilterChange(
                "minDiscount",
                e.target.value.replace(/\D/g, "")
              )
            }
          />

          <input
            type="text"
            placeholder="Diskon Maksimum"
            className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-emerald-600"
            value={
              filters.maxDiscount
                ? formatPrice(parseInt(filters.maxDiscount))
                : ""
            }
            onChange={(e) =>
              handleFilterChange(
                "maxDiscount",
                e.target.value.replace(/\D/g, "")
              )
            }
          />
        </div>
      </div>
    </>
  );
};
