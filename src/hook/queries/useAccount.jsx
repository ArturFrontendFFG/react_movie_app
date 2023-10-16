import { useQuery } from "@tanstack/react-query";
import { accountService } from "../../services/account.service.js";
export const useAccount = (name) => {
  return useQuery([`account`], () => accountService.getInfo(name));
};
