import axios from "axios";
import { options } from "./options";

export const MovieDetails = {
  detail: async (id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
    return await response.data;
  },
  movieVideo: async (id) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    );
    return await response.data;
  },
  recomindate: async (id) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
      options
    );
    return await response.data;
  },
  reviews: async (id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, options);
    return await response.data;
  },
  actors: async (id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`, options)
    return await response.data
  },
  credits: async (id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/external_ids`, options)
    return await response.data
  },
  keyword: async (id) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/keywords`, options);
    return await response.data
  }
};
