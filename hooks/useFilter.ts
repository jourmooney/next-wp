"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import {
  updateSearchParam,
  resetPageParam,
  createUrlWithParams,
} from "@/lib/utils/url";

type FilterType = "author" | "tag" | "category";

/**
 * Custom hook for managing filter state in URL
 * Handles filter changes and automatically resets pagination
 *
 * @param basePath - Base pathname for navigation (default: "/posts")
 * @returns Object with filter change and reset handlers
 */
export function useFilter(basePath: string = "/posts") {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = useCallback(
    (type: FilterType, value: string) => {
      // Reset page when filter changes
      let params = resetPageParam(searchParams);
      // Update the filter parameter
      params = updateSearchParam(params, type, value);

      const url = createUrlWithParams(basePath, params);
      router.push(url);
    },
    [router, searchParams, basePath]
  );

  const handleResetFilters = useCallback(() => {
    router.push(basePath);
  }, [router, basePath]);

  return {
    handleFilterChange,
    handleResetFilters,
  };
}
