import axios from "axios";

const CAKE = "chocolate";

export const getCakeIngredients = (endpoint) => {
  const url = endpoint.url
  const port = endpoint.port

  return axios.get(`${url}:${port}/ingredients/${CAKE}`, {
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
        Accept: 'application/json'
    }
  })
}
