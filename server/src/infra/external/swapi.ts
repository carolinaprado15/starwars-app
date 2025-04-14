import axios from "axios";
import { Agent } from "https";

const swapiClient = axios.create({
  baseURL: "https://swapi.dev/api",
  timeout: 10000,
  httpsAgent: new Agent({ rejectUnauthorized: false })
});

const fetchResource = async (resource: string, query?: string) => {
  const { data } = await swapiClient.get(resource, { params: { search: query } });
  return data;
};

const fetchUrl = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};

export { fetchResource, fetchUrl };
