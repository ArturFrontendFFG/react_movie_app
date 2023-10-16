import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { searchService } from "../services/search.service";

export function withQueryToCatalog(Component) {
  return function (props) {
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [movieArray, setData] = useState([]);
    const [query, setQuery] = useState(searchParams.get("query"));
    const [page, setPage] = useState(parseInt(searchParams.get(`page`) || 1));
    const [pageQty, setPageQty] = useState(parseInt(0));

    useEffect(() => {
      searchService.movie(query, page).then((data) => {
        setData(data.results);
        setQuery(searchParams.get("query"));
        setPage(parseInt(searchParams.get(`page`) || 1));
        setPageQty(data.total_pages);
      });
      window.scrollTo(0, 0);
    }, [query, page, location.search]);
    return <Component movieArray={movieArray} page={page} setPage={setPage} query={query} pageQty={pageQty} {...props}></Component>;
  };
}
