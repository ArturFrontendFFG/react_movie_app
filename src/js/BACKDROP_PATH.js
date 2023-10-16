import IMAGE_SOURCE from "./IMAGE_SOURCE";

export const BACKDROP_PATH = (src, size) => {
  if (src === null) return `/src/assets/images/notfound.png`;
  return `${IMAGE_SOURCE(size !== undefined ? size : 'w500') + src}`;
};
