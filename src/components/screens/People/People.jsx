import { peopleDetails } from "../../../services/people.service";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Aside from "./Aside";
import Main from "./Main";
import Loader from "../../widgets/Loader/Loader";
import "./People.scss";
import { useEffect, useState } from "react";

const People = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const { id } = useParams();
  const { data, isLoading, error } = useQuery(["people"], () =>
    peopleDetails.detail(id.split("-")[0])
  );
  if (isLoading) return;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <>
      
      <div className="wrapper container">
        <Aside data={data} id={id} />
        <Main item={data} />
      </div>
      
    </>
  );
};

export default People;
