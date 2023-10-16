export const release = (date) => {
  return !!date ? date.split("-").join("/") : "-";
};
export const runtime = (time, hour = 60, finalyTime = "") => {
  finalyTime = time / hour;
  const a = String(finalyTime).substring(0, 3);
  return a 
};
export const date = (date) => {
  return date.split("-")[0];
};
export const genres = (genresArr, array = []) => {
  genresArr.forEach((el) => {
    array.push(el.name);
  });
  return genresArr.length ? array.join(",") : "-";
};
export const videoRedirect = (vid) => {
  if (vid.length > 0) {
    return `play/${vid[0].key}`;
  } else {
    return `play/undefined`;
  }
};
