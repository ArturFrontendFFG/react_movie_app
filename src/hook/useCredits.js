import { useQuery } from "@tanstack/react-query";
import { peopleDetails } from "../services/people.service";

export function useCredits(id) {
  return useQuery(['credits'], () => peopleDetails.credits(id));
}
