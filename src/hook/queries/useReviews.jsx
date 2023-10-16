import { useQuery } from "@tanstack/react-query";
import { MovieDetails } from "../../services/details.service";

export const useReviews = (id) => {
  return useQuery([`reviews`], () => MovieDetails.reviews(id), {
    select: (data) => data.results,
  });
};
