import { useQueryClient } from "@tanstack/react-query";
import { useGetUserById } from "../hook/queries/useGetUserById";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { searchService } from "../services/search.service";

export const widthAddMovieToFavoriteList = (Component) => {
  return function ({ movieid, ...props }) {
    const userId = JSON.parse(localStorage.getItem(`userId`));
    const [ariaDisabledBtn, setAriaDisabledBtn] = useState(true);
    if (userId !== null) {
      const queryClient = useQueryClient();
      let { data, isLoading, error } = useGetUserById(userId);
      if (isLoading) return;
      if (error) return;

      const sendFavorite = async () => {
        const id = await movieid;
        const favoriteArr = await data.favorite;
        console.log(favoriteArr, id);
        if (favoriteArr.includes(id)) {
          await Object.defineProperty(data, "favorite", {
            value: favoriteArr.filter((el) => el !== id),
          });
          await searchService.putFavoriteList(userId, data);
          queryClient.refetchQueries([`account`]);

          return setAriaDisabledBtn(true);
        }
        await favoriteArr.push(Number(id));
        await Object.defineProperty(data, "favorite", {
          value: favoriteArr,
        });

        await searchService.putFavoriteList(userId, data);
        await queryClient.refetchQueries([`account`]);
        return setAriaDisabledBtn(false);
      };
      return (
        <Component
          sendFavorite={sendFavorite}
          ariadisabled={ariaDisabledBtn}
          setariadisabled={setAriaDisabledBtn}
          userid={userId}
          favoritelist={data.favorite}
          movieid={movieid}
          {...props}
        ></Component>
      );
    }
  };
};
