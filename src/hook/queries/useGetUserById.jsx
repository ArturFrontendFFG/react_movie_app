import { useQuery } from "@tanstack/react-query"
import { regService } from "../../services/registration.service"

export const useGetUserById = (id) => {
    return useQuery([`getUser`], () => regService.getUser(id), {
        select: data => data.data
    })
}