import { useQuery } from "@tanstack/react-query";
import { MovieDetails } from "../../services/details.service";

export const useDetails = (id) => {
  return useQuery(["movie"], () => MovieDetails.detail(id), {
    refetchOnWindowFocus: false,
  });
};
