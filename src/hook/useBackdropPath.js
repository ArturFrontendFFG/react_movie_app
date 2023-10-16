import { useImage } from "./useImage";

export const useBackdropPath = (src, size) => {
  if (src === null) return `/src/assets/images/notfound.png`;
  return `${useImage(size !== undefined ? size : 'w500') + src}`;
};
