import axios from "axios";

export const accountService = {
  getInfo: async (name) => {
    const response = await axios.get(
      `http://localhost:3000/users?name=${name}`
    );
    return await response.data;
  },
  deleteMovieFromFavorite: async (userId, data) => {
    return await axios.put(`http://localhost:3000/users/${userId}`, data);
  },
  deleteUser: async (userId) => {
    await axios.delete(`http://localhost:3000/users/${userId}`);
  },
};
