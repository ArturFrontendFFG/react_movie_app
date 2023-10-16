import {
  Backdrop,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useBackdropPath } from "../../../hook/useBackdropPath";
import { useNavigate } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";
import { accountService } from "../../../services/account.service";
import { useQueryClient } from "@tanstack/react-query";
import { withGetFavoriteData } from "../../../hoc/withGetFavoriteData";
import CustomLink from "../../widgets/Link";
import { useEffect, useState } from "react";
const Favorite = ({ favoriteList, userId, user, favoriteData }) => {
  const [loader, setLoader] = useState(true);
  const queryClient = useQueryClient();
  const navigator = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, []);
  if (loader)
    return (
      <div className="flex" style={{padding: '40px 0'}}>
        <CircularProgress color="secondary" />
      </div>
    );

  const deleteMovieFromFavoriteList = async (id) => {
    const correctFavoriteList = favoriteList.filter((item) => item !== id);
    await accountService.deleteMovieFromFavorite(userId, {
      ...user,
      favorite: correctFavoriteList,
    });
    await queryClient.refetchQueries(["account"]);
  };
  return (
    <div className="favorite">
      <p>
        <a name="favorite"></a>
      </p>
      <div className="container">
        <p className="favorite__title">Favorite</p>
        {!favoriteData.length ? (
          <p>
            You haven't added anything to the favorites yet{" "}
            <CustomLink
              to="/"
              style={{ color: "rgb(41,158,255)", textDecoration: "underline" }}
            >
              Watch
            </CustomLink>
          </p>
        ) : (
          favoriteData.map((data) => (
            <div className="cart" key={data.id}>
              <DeleteOutline
                className="delete"
                onClick={() => deleteMovieFromFavoriteList(data.id)}
              ></DeleteOutline>
              <Card
                sx={{
                  maxWidth: "100%",
                  mt: "1rem",
                  borderRadius: 2,
                  background: "rgb(0,0,0)",
                  background:
                    "linear-gradient(306deg, rgba(0,0,0,1) 0%, rgba(8,24,38,1) 63%, rgba(29,38,46,1) 100%)",
                }}
              >
                <CardContent sx={{ display: "flex", pb: 0.5 }}>
                  <CardMedia
                    sx={{
                      width: "10%",
                      height: 140,
                      mr: "1rem",
                      borderRadius: 4,
                    }}
                    image={useBackdropPath(data.poster_path)}
                    title={data.title}
                  />
                  <div
                    style={{
                      width: "90%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      paddingRight: "2.5rem",
                    }}
                  >
                    <Typography
                      sx={{ color: "#fff" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {data.title}
                    </Typography>
                    <Typography
                      sx={{ color: "#fff" }}
                      variant="body2"
                      color="text.secondary"
                    >
                      {data.overview}
                    </Typography>
                  </div>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => navigator(`/movie/${data.id}`)}
                    variant="outlined"
                  >
                    Watch now
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
export default withGetFavoriteData(Favorite);
