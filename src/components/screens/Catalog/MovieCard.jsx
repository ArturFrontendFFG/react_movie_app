import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import FavoriteButton from "../../widgets/Button/Button";
import { useBackdropPath } from "../../../hook/useBackdropPath";
import { useNavigate } from "react-router-dom";
import { Genres } from "../../ui/Slider/Genres";
const MovieCard = ({ item }) => {
  const navigator = useNavigate();
  return (
    <Card sx={{ mt: 2, mb: 2, background: "rgb(3,37,65)" }}>
      <CardContent
        sx={{ display: "flex", width: "100%", alignItems: "center", gap: 5 }}
      >
        <div style={{ width: "12%" }}>
          <CardMedia
            sx={{
              height: 200,
              width: "100%",
              borderRadius: 2,
            }}
            image={useBackdropPath(item.poster_path)}
            component="img"
            alt={item.original_title}
          ></CardMedia>

          <Typography
            mt={1}
            color="white"
            textAlign="center"
            variant="body2"
            component="p"
          >
            {Genres(item.genre_ids)}
          </Typography>
        </div>

        <div style={{ width: "85%" }}>
          <Typography color="#fff" gutterBottom variant="h5" component="div">
            {item.title || ""}
            <Typography gutterBottom sx={{ml: 1.5}} color="#ccc" variant="body1" component='span'>
              ({String(item.release_date).split('-').join('/')})
            </Typography>
          </Typography>
          <Typography variant="body2" color="#fff">
            {item.overview || "undefined"}
          </Typography>
          <CardActions sx={{ pl: 0, pt: 2 }}>
            <Button
              sx={{ mr: 1 }}
              size="normal"
              variant="contained"
              onClick={() => navigator(`/movie/${item.id}`)}
            >
              Watch
            </Button>
            <FavoriteButton
              className="movie__btn"
              innerText="Add Favorite"
              movieid={item.id}
            ></FavoriteButton>
          </CardActions>
        </div>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
