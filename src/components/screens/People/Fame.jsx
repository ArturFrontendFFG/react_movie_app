import React from "react";
import { withFames } from "../../../hoc/withFames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { useBackdropPath } from "../../../hook/useBackdropPath";
import { useCredits } from "../../../hook/useCredits";
import "swiper/css";

const Fame = ({ id }) => {
  const { data, isLoading, error } = useCredits(id);
  if (isLoading) return;
  if (error) return;

  const sort = data.cast
    .sort((a, b) => a.vote_average - b.vote_average)
    .reverse();
  return (
    <>
      <h3 className="main__fame-title">Fame for</h3>
      <div className="slider">
        <Swiper
          modules={[Scrollbar]}
          scrollbar={{
            el: ".custom-scrollbar",
            draggable: true,
          }}
          slidesPerView={4.5}
          spaceBetween={10}
        >
          {sort.length > 10
            ? sort.slice(0, 10).map((item, idx) => (
                <SwiperSlide key={idx + 1}>
                  <FameSlide item={item} />
                </SwiperSlide>
              ))
            : sort.map((item, idx) => (
                <SwiperSlide key={idx + 1}>
                  <FameSlide item={item} />
                </SwiperSlide>
              ))}
          <div className="custom-scrollbar"></div>
        </Swiper>
      </div>
    </>
  );
};

const FameSlide = ({ item }) => {
  return (
    <a className="" href={`/movie/${item.id}`}>
      <img
        className="main__fame-image"
        src={useBackdropPath(item.poster_path, "w150_and_h225_bestv2")}
        alt=""
      />
      <p className="main__fame-title">{item.title || item.name}</p>
    </a>
  );
};

export default Fame;
