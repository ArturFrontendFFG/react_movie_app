import axios from "axios";
import { options } from "./options";
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

let language = '?language=us-USA'
const MainService = {
  async slider() {
    const response = await axios.get(
      `/movie/popular`,
      options
  );
    return response.data;
  },
  async swiper(type) {
    const response = await axios.get(
      `/movie/${type}`,
      options
  );
    return response.data;
  },
  popularPeople: async () => {
    const response = await axios.get(`/person/popular?language=en-US`, options);
    return await response.data
  }
};



export default MainService;
