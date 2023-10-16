import React from "react";
import Carousel from "../../ui/Carousel/Carousel";
import Slider from "../../ui/Slider/Slider";
import Community from "./Community";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Carousel
        type="now_playing"
        title="Most Viewed"
        transition={9000}
      ></Carousel>
      <Carousel type="top_rated" title="Top Rated" transition={8500}></Carousel>
      <Carousel type="upcoming" title="Upcoming" transition={9500}></Carousel>
      <Carousel type="popular" title="Popular" transition={7500}></Carousel>
      <Community></Community>
    </div>
  );
};

export default Home;
