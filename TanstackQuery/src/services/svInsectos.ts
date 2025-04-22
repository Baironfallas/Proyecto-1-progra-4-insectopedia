import { BASE_URL } from "../config/apiConfig";

export const getInsectos = async () => {
  const response = await fetch(`${BASE_URL}insectos`);
  if (!response.ok) {
    throw new Error("Error al obtener los insectos");
  }
  return response.json();
};
