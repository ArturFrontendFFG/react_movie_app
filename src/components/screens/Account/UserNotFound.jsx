const UserNotFound = ({ name }) => {
    return (
      <div className="container">
        <h2 className="title">
          Oops user{" "}
          <span
            style={{
              color: "yellowgreen",
            }}
          >
            {name}
          </span>{" "}
          not found
        </h2>
      </div>
    );
  };
  export default UserNotFound