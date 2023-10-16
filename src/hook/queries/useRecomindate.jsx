import { useQuery } from "@tanstack/react-query";
import { MovieDetails } from "../../services/details.service";

export const useRecomindate = (id) => {
    return useQuery(["recomindate"], () =>
    MovieDetails.recomindate(id)
  );
}