import { FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

export const SortButtons = ({setNameSortObject,setSortedMode, sortedMode}) => {

  const activeSort = (name) => {
    if (!!sortedMode) {
      setSortedMode(null);
    } else {
      setSortedMode(true);
      setNameSortObject(name);
    }
  };
  return (
    <div className="space">
      <FormControlLabel
        control={
          <Switch
            color="secondary"
            onClick={() => {
              return activeSort("popularity");
            }}
          ></Switch>
        }
        label="By popularity"
      ></FormControlLabel>
      <FormControlLabel
        control={
          <Switch
            color="secondary"
            onClick={() => {
              return activeSort("release_date");
            }}
          ></Switch>
        }
        label="By release date"
      ></FormControlLabel>
      <FormControlLabel
        control={
          <Switch
            color="secondary"
            onClick={() => {
              return activeSort("vote_average");
            }}
          ></Switch>
        }
        label="By vote average"
      ></FormControlLabel>
    </div>
  );
};
