import React, { useEffect, useState } from "react";
import Biography from "./Biography";
import Fame from "./Fame";
import Art from './Art'
const Main = ({ item }) => {
  console.log(item);
  return (
    <main className="main">
      <h1 className="main__title">
        {item.name !== null ? item.name : "undefined"}
      </h1>
      <Biography bio={item.biography} name={item.name} />
      <Fame id={item.id}></Fame> 
      <Art id={item.id}></Art>
    </main>
  );
};

export default Main;
