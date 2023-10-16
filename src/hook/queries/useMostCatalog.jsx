import { useQuery } from "@tanstack/react-query"
import { searchService } from "../../services/search.service"

export const useMostCatalog = (query, page) => {
    return useQuery([`mostCatalog`], () => searchService.mostCatalog(query,page))
}