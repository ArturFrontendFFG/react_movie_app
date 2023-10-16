import { useQuery } from "@tanstack/react-query";
import { MovieDetails } from "../../services/details.service";

export const useActors = (id) => {
  return useQuery(["actors"], () => MovieDetails.actors(id), {
    refetchOnWindowFocus: false,
  });
};
