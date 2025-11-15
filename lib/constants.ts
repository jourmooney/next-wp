/**
 * Application-wide constants
 * Centralized configuration for magic numbers and strings
 */

/**
 * Pagination configuration
 */
export const PAGINATION = {
  /** Default number of posts per page */
  POSTS_PER_PAGE: 12,
  /** Maximum posts to fetch in a single request */
  MAX_PER_REQUEST: 120,
} as const;

/**
 * Debounce delays (in milliseconds)
 */
export const DEBOUNCE = {
  /** Search input debounce delay */
  SEARCH: 300,
} as const;

/**
 * Cache configuration (in seconds)
 */
export const CACHE = {
  /** Default cache duration for WordPress API requests */
  DEFAULT_REVALIDATE: 3600, // 1 hour
  /** Cache duration for posts page */
  POSTS_PAGE_REVALIDATE: 600, // 10 minutes
} as const;
