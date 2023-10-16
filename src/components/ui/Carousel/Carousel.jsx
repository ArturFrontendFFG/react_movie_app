import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCarousel } from "../../../hook/queries/useCarousel";
import IMAGE_SOURCE from "../../../js/IMAGE_SOURCE";
import CarouselContent from "./CarouselContent";
import "swiper/css";
import "./Carousel.scss";
import { Button } from "@mui/material";
import { ArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
const Carousel = (props) => {
  const { type, title, transition } = props;
  const { data, isLoading, error } = useCarousel(type);
  if (error) return <p className="container">Error {error.message}</p>;
  if (isLoading) return;
  const viewAllStyle = {
    color: "#f0ae27",
    opacity: .8,
    transition: 'opacity .3s ease',
    borderRadius: 5,
    "&:hover": {
      opacity: 1
    }
  }
  return (
    <div className="carousel container">
      <div className="carousel__actions">
        <h2 className="carousel__title">{title}</h2>
        <Button variant="standard" component={Link} to={`/most/${type}?page=1`} sx={viewAllStyle}>
          View all
          <ArrowRight />
        </Button>
      </div>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        navigation={{
          prevEl: ".carousel__navigation-btn_prev",
          nextEl: ".carousel__navigation-btn_next",
        }}
        autoplay={{
          delay: transition,
        }}
        slidesPerView={3.75}
        grabCursor={true}
      >
        {data.results.map((item) => (
          <SwiperSlide key={item.id}>
            <CarouselContent
              item={item}
              IMAGE_SOURCE={IMAGE_SOURCE}
            ></CarouselContent>
          </SwiperSlide>
        ))}
        <div className="carousel__navigation">
          <div className="carousel__navigation-btn carousel__navigation-btn_prev"></div>
          <div className="carousel__navigation-btn carousel__navigation-btn_next"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
