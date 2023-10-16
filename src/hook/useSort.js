import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useSort = (movieArray, nameSortedKey) => {
  const [sortedMode, setSortedMode] = useState(null);
  const [prevData, setPrevData] = useState(null);
  useEffect(() => {
    const oldData = JSON.parse(JSON.stringify(movieArray));
    setPrevData(oldData);
  }, [prevData]);
  const sortedItems = !sortedMode
    ? prevData
    : prevData.sort((a, b) => {
        if (nameSortedKey === "release_date") {
          let dateA = new Date(a.release_date);
          let dateB = new Date(b.release_date);
          return dateA - dateB;
        } else {
          return a[nameSortedKey] - b[nameSortedKey];
        }
      });

  // const sortedItems = !sortedMode
  //   ? movieArray
  //   : movieArray.sort((a, b) => a[nameSortedKey] - b[nameSortedKey]);

  return { sortedMode, setSortedMode, sortedItems };
};
