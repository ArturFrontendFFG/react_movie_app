import axios from "axios";
import { options } from "./options";

export const peopleDetails = {
    detail: async (id) => {
        const response = await axios.get(`https://api.themoviedb.org/3/person/${id}?language=en-US`, options)
        return await response.data
    },
    social: async (id) => {
        const response = await axios.get(`https://api.themoviedb.org/3/person/${id}/external_ids`, options)
        return await response.data
    },
    credits: async (id) => {
        const response = await axios.get(`https://api.themoviedb.org/3/person/${id}/combined_credits`, options)
        return await response.data
    },

}