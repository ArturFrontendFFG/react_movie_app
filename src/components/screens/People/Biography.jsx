import React, { useState } from "react";

const Biography = ({ bio, name }) => {
  const [biographyMore, setBiography] = useState(false);
  const biography =
    bio !== "" ? bio.split("\n\n") : [`We don't have a biography for ${name}`];
  const examinationForReadMore =
    biography.length >= 3 && bio !== "" && !biographyMore
      ? { display: "block" }
      : { display: "none" };
  const examinationForBlockText =
    biography.length >= 3 && !biographyMore
      ? { height: "230px" }
      : { height: "auto" };

  return (
    <div className="main__biography">
      <h3 className="main__biography-title">Biography</h3>
      <div className="main__biography-block" style={examinationForBlockText}>
        {biography.map((el, idx) => (
          <p className="main__biography-text" key={idx}>
            {el}
          </p>
        ))}
      </div>
      <h3
        onClick={() => setBiography(true)}
        style={examinationForReadMore}
        className="main__biography-more"
      >
        Read more
      </h3>
    </div>
  );
};

export default Biography;
