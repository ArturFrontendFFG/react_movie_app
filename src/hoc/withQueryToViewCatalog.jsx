import { useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { searchService } from "../services/search.service";
import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
export function withQueryToViewCatalog(Component) {
  return function WithQueryToViewCatalogWrapper(props) {
    const queryClient = useQueryClient();

    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [movieArray, setData] = useState([]);

    const { query } = useParams();
    const [page, setPage] = useState(parseInt(searchParams.get(`page`) || 1));
    const [pageQty, setPageQty] = useState(parseInt(0));
    const { data, isLoading, error } = useQuery([`${query}`, query, page], () =>
      searchService.mostCatalog(query, page)
    );
    useEffect(() => {
      if (isLoading) return;
      if (error) return;
      setData(data.results);
      setPage(parseInt(searchParams.get(`page`) || 1));
      setPageQty(data.total_pages);
      queryClient.refetchQueries([query]);
      window.scrollTo(0, 0);
    }, [data, query, page, location.search]);

    return (
      <Component
        movieArray={movieArray}
        page={page}
        setPage={setPage}
        query={query}
        pageQty={pageQty}
        {...props}
      ></Component>
    );
  };
}
