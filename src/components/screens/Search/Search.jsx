import React, { useState } from "react";
import "./Search.scss";
import {
  Alert,
  AlertTitle,
  Collapse,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { SearchOff, SearchRounded } from "@mui/icons-material";
import { useNavigate, useSearchParams } from "react-router-dom";
const Search = (props) => {
  const [searchQueries] = useSearchParams();
  const [value, setValue] = useState(searchQueries.get("query") || "");
  const [isOpen, setOpen] = useState(false);
  const navigator = useNavigate();
  const redirect = () => {
    if (value === "" || value === " ") {
      setOpen(true);
      setTimeout(() => {
        setOpen(false);
      }, 1500);
    } else {
      if (value.split(" ").length > 0) {
        navigator(`/search?query=${value.split(" ").join("-")}&page=1`);
      } else {
        navigator(`/search?query=${value}&page=1`);
      }
    }
  };
  return (
    <div style={{ padding: "0 8rem", width: "100%" }}>
      <Collapse
        in={isOpen}
        sx={{ position: "absolute", width: 500, top: 0, zIndex: 9999 }}
      >
        <Alert severity="error" color="secondary">
          <AlertTitle sx={{ mb: 0 }}>Error: Field is required</AlertTitle>
        </Alert>
      </Collapse>
      <TextField
        autoComplete="off"
        variant="standard"
        color="secondary"
        label="Search"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        InputProps={{
          required: true,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                color="secondary"
                onClick={() => redirect()}
                aria-label="toggle password visibility"
              >
                <SearchRounded />
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
      ></TextField>
    </div>
  );
};

export default Search;
