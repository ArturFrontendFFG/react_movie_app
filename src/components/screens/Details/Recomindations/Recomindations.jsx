import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import {useRecomindate} from '../../../../hook/queries/useRecomindate'
import "swiper/css/scrollbar";
import Slides from "./Slides";
const Recomindations = ({ id }) => {
  const { data, isLoading, error } = useRecomindate(id);
  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="details__recomendation">
      <h2 className="details__title-rec title">
        {data.results.length > 0 ? "Recomendations" : "We don't have enough data to show recommendations "}
      </h2>
      <Swiper
        modules={[Scrollbar]}
        spaceBetween={20}
        scrollbar={{
          draggable: true,
        }}
        slidesPerView={4.25}
      >
        {Array.from(data.results).map((item, index) => (
          <SwiperSlide key={item.id}>
            <Slides item={item}></Slides>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Recomindations;
