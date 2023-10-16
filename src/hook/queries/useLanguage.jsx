import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { options } from "../../services/options";

export const useLanguage = () => {
  try{
    return useQuery(
      [`language`],
      () => axios.get(`https://api.themoviedb.org/3/configuration/languages`, options),
      { select: (data) => data.data }
    );
    
  }catch(e) {
    console.log('error >>>', e)
  }
};
