import clsx from 'clsx'

/**
 * Utility function to merge class names
 * Similar to shadcn/ui's cn function but adapted for JavaScript
 */
export function cn(...inputs) {
  return clsx(inputs)
}

/**
 * Utility function to check if we're in a browser environment
 */
export function isBrowser() {
  return typeof window !== 'undefined'
}

/**
 * Utility function to get window dimensions safely
 */
export function getWindowDimensions() {
  if (!isBrowser()) {
    return { width: 0, height: 0 }
  }
  
  return {
    width: window.innerWidth,
    height: window.innerHeight
  }
}
