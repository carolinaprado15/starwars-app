import axios from "axios";

const swapiClient = axios.create({
  baseURL: process.env.SWAPI_URL,
  timeout: 10000,
});

const fetchResource = async (resource: string) => {
  const { data } = await swapiClient.get(resource);
  
  return data;
};

export { fetchResource };
