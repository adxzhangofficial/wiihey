// Base path for GitHub Pages deployment
export const BASE_PATH = import.meta.env.BASE_URL;

// Helper function to get the correct image path
export function getImagePath(path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE_PATH}${cleanPath}`;
}
