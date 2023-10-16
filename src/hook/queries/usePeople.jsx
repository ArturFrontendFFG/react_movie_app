import { useQuery } from "@tanstack/react-query"
import MainService from "../../services/main.service"

export const usePeople = () => {
    return useQuery([`popular-people`], () => MainService.popularPeople());
}