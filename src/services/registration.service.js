import axios from "axios";

export const regService = {
  registration: async (data) => {
    await axios.post("http://localhost:3000/users", data);
  },
  authentication: async (data) => {
    const response = await axios.get("http://localhost:3000/users");
    return response;
  },
  getUser: async (id) => {
    const response = await axios.get(`http://localhost:3000/users/${id}`);
    return  response;
  },
};
