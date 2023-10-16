import { useQuery } from "@tanstack/react-query";
import { MovieDetails } from "../../../services/details.service";
import "./Details.scss";
import { ActorsCard } from "./ActorsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import {useActors} from '../../../hook/queries/useActors'
import CustomLink from "../../widgets/Link";
export const Actors = ({ id }) => {
  const { data, isLoading, error } = useActors(id);
  if (isLoading) return;
  if (error) return <p>Error: {error.message}</p>;

  const optimeData = data.cast;

  return (
    <>
      <div className="actors">
        <h2 className="actors__title title">In Main Roles</h2>
        <Swiper
          modules={[Scrollbar]}
          draggable={true}
          scrollbar={{
            draggable: true,
          }}
          spaceBetween={15}
          slidesPerView={5.25}
        >
          {optimeData.slice(0, 10).map((item, idx) => (
            <SwiperSlide key={item.id}>
              <ActorsCard item={item}></ActorsCard>
            </SwiperSlide>
          ))}
          {optimeData.length > 10 ? (
            <SwiperSlide
              style={{ height: "310px", display: "flex", alignItems: "center" }}
            >
              <CustomLink to={`/all_people/${id}`} className="actors__link">
                See <br /> more
              </CustomLink>
            </SwiperSlide>
          ) : (
            ""
          )}
        </Swiper>
      </div>
    </>
  );
};
