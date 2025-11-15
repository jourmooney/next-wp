"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { updateSearchParam, createUrlWithParams } from "@/lib/utils/url";
import { DEBOUNCE } from "@/lib/constants";

/**
 * Custom hook for managing search query in URL
 * Provides debounced search functionality with URL state management
 *
 * @param debounceMs - Debounce delay in milliseconds (default: from constants)
 * @returns Object with search handler function
 */
export function useSearchQuery(debounceMs: number = DEBOUNCE.SEARCH) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = updateSearchParam(searchParams, "search", term);
    const url = createUrlWithParams(pathname, params);
    router.replace(url);
  }, debounceMs);

  return {
    handleSearch,
  };
}
