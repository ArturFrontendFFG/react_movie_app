import { peopleDetails } from "../services/people.service";
import { useQuery } from "@tanstack/react-query";
export function withSocial(Component) {
  return function (props) {

    return (
      <Component
        data={data}
        isLoading={isLoading}
        error={error}
        {...props}
      ></Component>
    );
  };
}
