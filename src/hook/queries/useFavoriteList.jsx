import { useQuery } from "@tanstack/react-query"
import {MovieDetails} from '../../services/details.service'
export const useFavoriteList = (id) => {
    return useQuery([`favorite-list`], () => MovieDetails.detail(id))
}