"use client";

import { Input } from "@/components/ui/input";
import { useSearchQuery } from "@/hooks/useSearchQuery";

interface SearchInputProps {
  defaultValue?: string;
  placeholder?: string;
}

/**
 * SearchInput component
 * Provides debounced search functionality with URL state management
 *
 * Separated concerns:
 * - UI: Input rendering
 * - Business logic: Delegated to useSearchQuery hook
 */
export function SearchInput({
  defaultValue,
  placeholder = "Search posts...",
}: SearchInputProps) {
  const { handleSearch } = useSearchQuery();

  return (
    <Input
      type="text"
      name="search"
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}
