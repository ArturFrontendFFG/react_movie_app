import { Link } from "react-router-dom";
import { CircularProgress, Pagination, PaginationItem } from "@mui/material";
import MovieCard from "./MovieCard";
import { withQueryToCatalog } from "../../../hoc/withQueryToCatalog";
import "./Catalog.scss";
const Catalog = ({ movieArray, page, setPage, query, pageQty }) => {

  return (
  <div className="catalog">
      <div className="catalog__container container">
        <div className="catalog__wrapper">
          {!movieArray.length ? (
            <div className="flex" style={{ padding: "40px 0" }}>
              <CircularProgress color="secondary" size={100}></CircularProgress>
            </div>
          ) : (
            movieArray.map((item) => (
              <MovieCard item={item} key={item.id}></MovieCard>
            ))
          )}
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
                    to={`/search?query=${query}&page=${item.page}`}
                    {...item}
                  ></PaginationItem>
                </>
              )}
            ></Pagination>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withQueryToCatalog(Catalog);