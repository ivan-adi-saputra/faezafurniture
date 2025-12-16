import { Product, ProductFilters } from "@/types/Product";
import { useRouter } from "next/navigation";
import { ReadonlyURLSearchParams } from "next/navigation";

/**
 * Mengubah angka menjadi format mata uang Indonesia (IDR) tanpa simbol mata uang.
 * Contoh: 1000000 menjadi "1.000.000".
 * @param num Angka harga yang akan diformat.
 * @returns String harga yang sudah diformat atau string kosong jika input tidak valid.
 */
export const formatPrice = (num: number | undefined): string => {
  if (num === undefined || num === null) return "";
  return num.toLocaleString("id-ID", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

/**
 * [INTERNAL] Menangani logika pembersihan dan pengaturan nilai parameter ke URLSearchParams.
 * Hanya menambahkan parameter jika nilainya valid (tidak null, undefined, kosong, atau array kosong).
 * Ini mencegah parameter kosong dimasukkan ke URL.
 * * @param newParams Objek URLSearchParams tempat parameter akan diatur.
 * @param key Kunci parameter (misalnya: 'search', 'categories').
 * @param value Nilai parameter, bisa berupa string, number, atau array dari keduanya.
 */
const setCleanParam = (
  newParams: URLSearchParams,
  key: string,
  value: string | number | string[] | number[] | null | undefined
) => {
  if (Array.isArray(value)) {
    const filteredValues = value
      .filter((item) => item !== null && item !== undefined && item !== "")
      .map(String);

    if (filteredValues.length > 0) {
      const combinedString = filteredValues.join(",");
      newParams.set(key, combinedString);
    }
  } else {
    if (value !== null && value !== undefined && String(value).trim() !== "") {
      newParams.set(key, String(value));
    }
  }
};

// [INTERNAL] Menentukan apakah suatu nilai dianggap 'kosong' dan harus dihapus dari URL
const isValueEmpty = (value: any) => {
  if (value === null || value === undefined) return true;
  if (typeof value === "string" && value.trim() === "") return true;
  if (Array.isArray(value) && value.length === 0) return true;

  return false;
};

/**
 * Menghasilkan string query yang bersih dari objek filters.
 * Fungsi ini mengonversi objek ProductFilters menjadi string URLSearchParams.
 * Digunakan untuk perbandingan atau sebagai dasar untuk fungsi updateUrlParams.
 * * @param filters Objek ProductFilters saat ini.
 * @returns String query URL yang sudah bersih (misalnya: "categories=1,2&sort=latest").
 */
export const getCleanQueryString = (filters: ProductFilters): string => {
  const newParams = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    setCleanParam(newParams, key, value);
  });

  return newParams.toString();
};

/**
 * Mengganti semua parameter URL saat ini dengan objek filters yang baru.
 * Fungsi ini digunakan ketika seluruh set filter diterapkan (misalnya setelah menekan tombol "Terapkan Filter").
 * * @param router Objek router dari `useRouter()`.
 * @param filters Objek ProductFilters yang baru.
 */
export const updateUrlParams = (
  router: ReturnType<typeof useRouter>,
  filters: ProductFilters
) => {
  const queryString = getCleanQueryString(filters);
  const newUrl = `/furniture${queryString ? "?" + queryString : ""}`;

  router.replace(newUrl);
};

/**
 * Memperbarui atau menghapus satu parameter di URL yang sudah ada (single update).
 * Parameter yang lain di URL akan dipertahankan.
 * * @param router Objek router dari `useRouter()`.
 * @param key Kunci parameter ProductFilters yang akan diubah.
 * @param value Nilai baru parameter (gunakan null/undefined/"" untuk menghapus).
 */
export const updateUrlParam = (
  router: ReturnType<typeof useRouter>,
  key: keyof ProductFilters,
  value: string | number | string[] | number[] | null | undefined
) => {
  if (typeof window === "undefined") return;

  const currentUrl = new URL(window.location.href);
  const newParams = new URLSearchParams(currentUrl.search);

  const stringKey = String(key);
  if (isValueEmpty(value)) {
    newParams.delete(stringKey);
  } else {
    setCleanParam(newParams, stringKey, value);
  }

  const newUrl = `/furniture${
    newParams.toString() ? "?" + newParams.toString() : ""
  }`;

  router.replace(newUrl);
};

/**
 * Menghapus semua parameter URL dan menavigasi kembali ke halaman dasar "/furniture".
 * * @param router Objek router dari `useRouter()`.
 */
export const clearAllUrlParams = (router: ReturnType<typeof useRouter>) => {
  router.replace("/furniture");
};

/**
 * Menghitung harga produk yang efektif (diskon jika ada, atau harga normal).
 * * @param product Objek Product.
 * @returns Harga yang harus ditampilkan kepada pengguna (setelah diskon, jika berlaku).
 */
export const getEffectivePrice = (product: Product) => {
  const discountedPrice =
    product.price_discount && product.price_discount > 0
      ? product.price_discount
      : 0;

  if (!isNaN(discountedPrice)) return discountedPrice;

  return product.price;
};
