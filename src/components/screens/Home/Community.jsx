import React from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useProvider } from "../../../hook/useProvider";
import "./Community.scss";
const Community = () => {
  const { user } = useProvider();
  const fontFamily = "REM, sans-serif";
  return (
    <>
      {!user ? (
        <div className="community">
          <div className="container">
            <div className="content">
              <Typography variant="h2" component="div" fontFamily={fontFamily}>
                Join today
              </Typography>
              <Typography
                sx={{
                  span: {
                    fontStyle: "italic",
                    opacity: 0.7,
                  },
                }}
                variant="body2"
                mt={2}
                mb={4}
                fontSize="1.2rem"
                component="p"
                fontFamily={"Source Sans 3"}
              >
                Get access to maintain your own{" "}
                <span> custom personal lists, track what you've seen </span> and
                search and filter for <span>what to watch next</span>—regardless
                if it's in theatres, on TV or available on popular streaming
                services like .
              </Typography>
              <Button
                color="secondary"
                variant="contained"
                component={Link}
                to="/reg"
              >
                Registration
              </Button>
            </div>
            <div className="plus">
              <ul
                style={{
                  fontFamily: fontFamily,
                  opacity: 0.7,
                  listStyleType: "revert",
                }}
              >
                <li>Enjoy Movie ad free</li>
                <li>Maintain a personal watchlist</li>
                <li>Log the movies and TV shows you've seen</li>
                <li>Contribute to and improve our database</li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Community;
