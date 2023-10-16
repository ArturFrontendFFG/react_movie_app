import { useQuery } from "@tanstack/react-query";
import { MovieDetails } from "../../services/details.service";

export const useVideo = (id) => {
    return useQuery(["video"], () => MovieDetails.movieVideo(id));
}