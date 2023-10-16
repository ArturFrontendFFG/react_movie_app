const REAC_APP_API_KEY = import.meta.env.VITE_API_TOKEN
export const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${REAC_APP_API_KEY}`,
    }
}