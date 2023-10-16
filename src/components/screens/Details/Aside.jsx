import React from "react";
import Social from "../People/Social";
import { MovieDetails } from "../../../services/details.service";
import Keywords from "./Keywords";
import { useLanguage } from "../../../hook/queries/useLanguage"; 
const Aside = ({ item }) => {
  return (
    <div className="aside">
      <Social
        id={item.id}
        homepage={null}
        query={MovieDetails.credits(item.id)}
      />
      <div className="facts">
        <div className="facts__block">
          <strong>Original title</strong>
          <p>{item.original_title || "-"}</p>
        </div>
        <div className="facts__block">
          <strong>Status</strong>
          <p>{item.status || "-"}</p>
        </div>
        <div className="facts__block">
          <strong>Original language</strong>
          <p>{lang(item.original_language)}</p>
        </div>  
        <div className="facts__block">
          <strong>Budget</strong>
          <p>{formatBudget(item.budget)}</p>
        </div>
        <div className="facts__block">
          <strong>Fees</strong>
          <p>{formatBudget(item.revenue)}</p>
        </div>
        <Keywords id={item.id}></Keywords>
      </div>
    </div>
  );
};
const formatBudget = (sum) => {
  if (sum !== 0) {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      currencyDisplay: "narrowSymbol",
    }).format(sum);
  } else return "-";
};
const lang = (nameLang) => {
  const { data, isLoading } = useLanguage();
  if (isLoading) return;
  const newData = data.filter((el) => el.iso_639_1 === nameLang);
  return newData[0].english_name;
};

export default Aside;
