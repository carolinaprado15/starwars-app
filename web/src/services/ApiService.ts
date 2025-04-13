import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1",
});

export const getPerson = async (id: string) => {
  const response = await api.get(`/people/${id}`);
  return response.data;
};

export const searchPeople = async (query: string) => {
  const response = await api.get(`/people?search=${query}`);
  return response.data;
};

export const getMovie = async (id: string) => {
  const response = await api.get(`/movies/${id}`);
  return response.data;
};

export const searchMovies = async (query: string) => {
  const response = await api.get(`/movies?search=${query}`);
  return response.data;
};
