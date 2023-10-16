import { useEffect, useState } from "react";
import { MovieDetails } from "../services/details.service";

export const withGetFavoriteData = (Children) => {
  return function ({favoriteList,...props}) {
  const [favoriteData, setFavoriteData] = useState([]);
    
    useEffect(() => {
        const getFavoriteData = async () => {
          const data = await Promise.all(
            favoriteList.map(async (favoriteIdx) => {
              const details = await MovieDetails.detail(favoriteIdx);
              return details;
            })
          );
          setFavoriteData(data);
        };
        getFavoriteData();
      }, [favoriteList]);
    return <Children favoriteData={favoriteData.reverse()} favoriteList={favoriteList} {...props}></Children>;
  };
};
