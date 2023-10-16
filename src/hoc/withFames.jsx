import { useQuery } from "@tanstack/react-query";
import { peopleDetails } from "../services/people.service";

export function withFames(Component) {
  return function (props) {
    const { data, isLoading, error } = useQuery([`credits`], () =>
      peopleDetails.credits(id), {
        refetchOnWindowFocus: false
      }
    );

   if(isLoading) return 
   if(error) return 
    return <Component data={data} isLoading={isLoading} error={error} {...props}></Component>;
  };
}
