import { useQuery } from "@tanstack/react-query"
import { regService } from "../../services/registration.service"

export const useAllUser = () => {
    return useQuery([`getAllUser`], () => regService.authentication(), {
        select: data => {
            return data.data.filter(item => item.name !== "admin")
        }
    });
}