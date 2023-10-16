import { useQuery } from "@tanstack/react-query";
import React from "react";
import { MovieDetails } from "../../../services/details.service";
import { useKeywords } from "../../../hook/queries/useKeywords";

const Keywords = ({ id }) => {
  const { data, isLoading, error } = useKeywords(id);
  if (isLoading) return;
  if (error) return <p>-</p>;
  return (
    <div className="keywords">
      <h3 className="keywords__title">Keywords</h3>
      <ul>
        {data.length > 0 ? (
          data.map((item) => (
            <li>
              <a className="keywords__link" href={`/search?query=${String(item.name).split(' ').join('-')}&page=1`}>
                {item.name}
              </a>
            </li>
          ))
        ) : (
          <li>No key ones were found</li>
        )}
      </ul>
    </div>
  );
};

export default Keywords;
