import { useQuery } from "@tanstack/react-query";

export const useSocial = (query) => {
    return useQuery([`social`], () => query);
}