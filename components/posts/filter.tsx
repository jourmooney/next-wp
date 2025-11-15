"use client";

import { Button } from "@/components/ui/button";
import { useFilter } from "@/hooks/useFilter";
import { FilterSelect } from "./filter-select";

interface Author {
  id: number;
  name: string;
}

interface Tag {
  id: number;
  name: string;
}

interface Category {
  id: number;
  name: string;
}

interface FilterPostsProps {
  authors: Author[];
  tags: Tag[];
  categories: Category[];
  selectedAuthor?: string;
  selectedTag?: string;
  selectedCategory?: string;
}

/**
 * FilterPosts component
 * Provides filtering UI for posts by tag, category, and author
 *
 * Separated concerns:
 * - UI: Composition of FilterSelect components
 * - Business logic: Delegated to useFilter hook
 * - Reusability: Uses FilterSelect for DRY principle
 */
export function FilterPosts({
  authors,
  tags,
  categories,
  selectedAuthor,
  selectedTag,
  selectedCategory,
}: FilterPostsProps) {
  const { handleFilterChange, handleResetFilters } = useFilter();

  return (
    <div className="grid md:grid-cols-[1fr_1fr_1fr_0.5fr] gap-2 my-4 !z-10">
      <FilterSelect
        options={tags}
        value={selectedTag}
        placeholder="All Tags"
        emptyMessage="No tags found"
        onValueChange={(value) => handleFilterChange("tag", value)}
      />

      <FilterSelect
        options={categories}
        value={selectedCategory}
        placeholder="All Categories"
        emptyMessage="No categories found"
        onValueChange={(value) => handleFilterChange("category", value)}
      />

      <FilterSelect
        options={authors}
        value={selectedAuthor}
        placeholder="All Authors"
        emptyMessage="No authors found"
        onValueChange={(value) => handleFilterChange("author", value)}
        className="text-center"
      />

      <Button variant="outline" onClick={handleResetFilters}>
        Reset Filters
      </Button>
    </div>
  );
}
