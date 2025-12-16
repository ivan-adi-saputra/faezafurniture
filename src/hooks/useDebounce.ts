import { useState, useEffect } from "react";

/**
 * Hook yang mengembalikan nilai setelah jeda waktu tertentu.
 * Berguna untuk menunda pemanggilan API atau pembaruan state induk.
 * @param value Nilai yang ingin di-debounce.
 * @param delay Jeda waktu dalam milidetik (ms).
 * @returns Nilai yang di-debounce.
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Atur timer untuk memperbarui debouncedValue setelah jeda
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Hapus timer sebelumnya jika value berubah sebelum jeda selesai (Clean-up)
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Hanya re-run jika value atau delay berubah

  return debouncedValue;
}
