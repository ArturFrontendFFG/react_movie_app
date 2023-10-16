import { useQuery } from "@tanstack/react-query";
import MainService from "../../services/main.service";

export const useCarousel = (type) => {
  return useQuery([type], () => MainService.swiper(type));
};
