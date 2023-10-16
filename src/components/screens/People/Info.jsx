import { useQuery } from "@tanstack/react-query";
import React from "react";
import { peopleDetails } from "../../../services/people.service";
import { withFames } from "../../../hoc/withFames";

const Info = ({ item, id }) => {
  return (
    <div className="aside__info">
      <h2 className="aside__title">Personal Info</h2>
      <div className="aside__mixing">
        {departament(item.known_for_department)}
      </div>
      <div className="aside__mixing">{filmed(id)}</div>
      <div className="aside__mixing">{gender(item.gender)}</div>
      <div className="aside__mixing">{birthday(item.birthday)}</div>
      <div className="aside__mixing">{placeBorn(item.place_of_birth)}</div>
      <div className="aside__mixing">{fameAs(item.also_known_as)}</div>
    </div>
  );
};

const departament = (departament) => {
  return (
    <>
      <strong className="aside__subtitle">Fame for</strong>
      <p className="aside__main-title">
        {departament !== null ? departament : "Undefined"}
      </p>
    </>
  );
};
const filmed = (id) => {
  const { data, isLoading, error } = useQuery([`credits`], () =>
    peopleDetails.credits(id)
  );
  if (isLoading) return;
  if (error) return <p className="aside__main-title">Error: {error.message}</p>;
  return (
    <>
      <strong className="aside__subtitle">Known authorship</strong>
      <p className="aside__main-title">
        {data.cast.length > 0 ? data.cast.length : data.crew.length || ""}
      </p>
    </>
  );
};
const gender = (genderId) => {
  const gender = ["Female", "Male", 'Non-binary'];
  return (
    <>
      <strong className="aside__subtitle">Gender</strong>
      <p className="aside__main-title">
        {genderId === 0 ? "-" : gender[genderId - 1]}
      </p>
    </>
  );
};
const birthday = (date, finall = "") => {
  const yearNow = new Date().getFullYear();
  const actorsBithday = date !== null ? date.split(`-`)[0] : 0;
  const actorsYear = yearNow - actorsBithday;
  finall = `(${actorsYear} year)`;
  return (
    <>
      <strong className="aside__subtitle">Date of birth</strong>
      <p className="aside__main-title">{date ? date + " " + finall : "-"} </p>
    </>
  );
};
const placeBorn = (places) => {
  return (
    <>
      <strong className="aside__subtitle">Place of birth</strong>
      <p className="aside__main-title">{places !== null ? places : "-"}</p>
    </>
  );
};
const fameAs = (fames) => {
  const finn =
    fames.length > 0 ? (
      fames.map((el, idx) => (
        <p style={{ margin: "5px 0" }} className="aside__main-title" key={idx}>
          {el}
        </p>
      ))
    ) : (
      <p className="aside__main-title">-</p>
    );
  return (
    <>
      <strong className="aside__subtitle">Also known as</strong>
      {finn}
    </>
  );
};

export default Info;
