import { useQuery } from "@tanstack/react-query";
import MainService from "../../services/main.service";

export const useSlider = () => {
  return useQuery(["slider"], () => MainService.slider());

};
