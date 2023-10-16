import axios from "axios";
import { options } from "./options";

export const searchService = {
  movie: async (keyword, page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${keyword}&page=${page}`,
      options
    );
    if (response.status !== 200) return alert(`Error ${response.status}`);
    return await response.data;
  },
  mostCatalog: async (query, page) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${query}?page=${page}`, options);
    return await response.data;
  },
  putFavoriteList: async (userId, data) => {
    await axios.put(`http://localhost:3000/users/${userId}`, data);
  },
};
