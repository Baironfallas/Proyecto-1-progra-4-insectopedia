import { BASE_URL } from "../config/apiConfig";

export const getInsectos = async () => {
  const response = await fetch(`${BASE_URL}Insectos`);
  if (!response.ok) {
    throw new Error("Error al obtener los insectos");
  }
  return response.json();
};

export const deleteInsecto = async (id: string) => {
  const response = await fetch(`${BASE_URL}Insectos/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Error al eliminar el insecto");
  }
  return true;
};