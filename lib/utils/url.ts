/**
 * URL manipulation utilities
 * Provides clean, reusable functions for URL parameter management
 */

/**
 * Updates a URL search parameter
 * @param searchParams - Current URLSearchParams
 * @param key - Parameter key to update
 * @param value - Parameter value (empty string removes the parameter)
 * @returns New URLSearchParams instance
 */
export function updateSearchParam(
  searchParams: URLSearchParams,
  key: string,
  value: string
): URLSearchParams {
  const params = new URLSearchParams(searchParams);

  if (value && value !== 'all') {
    params.set(key, value);
  } else {
    params.delete(key);
  }

  return params;
}

/**
 * Updates multiple URL search parameters
 * @param searchParams - Current URLSearchParams
 * @param updates - Object with key-value pairs to update
 * @returns New URLSearchParams instance
 */
export function updateSearchParams(
  searchParams: URLSearchParams,
  updates: Record<string, string | undefined>
): URLSearchParams {
  const params = new URLSearchParams(searchParams);

  Object.entries(updates).forEach(([key, value]) => {
    if (value && value !== 'all') {
      params.set(key, value);
    } else {
      params.delete(key);
    }
  });

  return params;
}

/**
 * Removes a search parameter from URL
 * @param searchParams - Current URLSearchParams
 * @param key - Parameter key to remove
 * @returns New URLSearchParams instance
 */
export function removeSearchParam(
  searchParams: URLSearchParams,
  key: string
): URLSearchParams {
  const params = new URLSearchParams(searchParams);
  params.delete(key);
  return params;
}

/**
 * Creates a URL with query parameters
 * @param pathname - Base pathname
 * @param params - URLSearchParams to append
 * @returns Complete URL string
 */
export function createUrlWithParams(
  pathname: string,
  params: URLSearchParams
): string {
  const queryString = params.toString();
  return queryString ? `${pathname}?${queryString}` : pathname;
}

/**
 * Resets page parameter when filter changes
 * Useful for pagination reset on filter/search changes
 * @param searchParams - Current URLSearchParams
 * @returns New URLSearchParams with page removed
 */
export function resetPageParam(
  searchParams: URLSearchParams
): URLSearchParams {
  return removeSearchParam(searchParams, 'page');
}
