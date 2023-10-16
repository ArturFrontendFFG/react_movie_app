import { useQuery } from "@tanstack/react-query";
import { MovieDetails } from "../../services/details.service";

export const useKeywords = (id) => {
  return useQuery([`keyword`], () => MovieDetails.keyword(id), {
    select: (data) => data.keywords,
  });
};
