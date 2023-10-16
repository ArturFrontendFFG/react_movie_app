import { Link, useParams, useSearchParams } from "react-router-dom";
import { withQueryToViewCatalog } from "../../../hoc/withQueryToViewCatalog";
import MovieCard from "../Catalog/MovieCard";
import {
  FormControlLabel,
  Pagination,
  PaginationItem,
  Switch,
} from "@mui/material";
import { useCorrectName } from "../../../hook/useCorrectName";
import { useSort } from "../../../hook/useSort";
import { useState } from "react";
import { SortButtons } from "./SortButtons";
const MostPopularCatalog = ({ page, setPage, movieArray, query, pageQty }) => {
  if (!movieArray) return;
  const [nameSortObject, setNameSortObject] = useState("");

  const title = useCorrectName(String(query).split("_").join(" "));
  const { setSortedMode, sortedMode, sortedItems } = useSort(
    movieArray,
    nameSortObject
  );

  return (
    <div className="popular">
      <div className="popular__container container">
        <div className="title">{title}</div>
        <SortButtons
          setNameSortObject={setNameSortObject}
          setSortedMode={setSortedMode}
          sortedMode={sortedMode}
        ></SortButtons>
        <div className="wrap__popular">
          {!sortedItems?.length ? (
            <>Loading</>
          ) : (
            sortedItems.map((item) => (
              <MovieCard item={item} key={item.id}></MovieCard>
            ))
          )}
        </div>
        <div className="flex" style={{ padding: "20px 0 20px" }}>
          <Pagination
            count={pageQty}
            page={page}
            onChange={(_, num) => setPage(num)}
            color="secondary"
            size="large"
            showLastButton
            variant="outlined"
            showFirstButton
            renderItem={(item) => (
              <>
                <PaginationItem
                  component={Link}
                  to={`/most/${query}?page=${item.page}`}
                  {...item}
                ></PaginationItem>
              </>
            )}
          ></Pagination>
        </div>
      </div>
    </div>
  );
};

export default withQueryToViewCatalog(MostPopularCatalog);
