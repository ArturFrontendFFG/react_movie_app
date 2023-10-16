import { useQuery, useQueryClient } from "@tanstack/react-query";
import { searchService } from "../../services/search.service";
import { useEffect, useState } from "react";

export const useSearchMovie = (query, page) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.refetchQueries([`searchMovie`]);
  }, [query, page]);
  
  const { data, isLoading, error } = useQuery(
    [`searchMovie`],
    () => searchService.movie(query, page),
    {
      refetchOnWindowFocus: false,
    }
  );

  return { data, isLoading, error };
};
