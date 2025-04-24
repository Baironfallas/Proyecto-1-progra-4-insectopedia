import { BASE_URL } from "../config/apiConfig";
import { insecto } from "../types/insecto";

export const getInsectos = async () => {
  const response = await fetch(`${BASE_URL}Insectos`);
  if (!response.ok) {
    throw new Error("Error al obtener los insectos");
  }
  return response.json();
};


export const updateInsecto = async (insecto: insecto) => {
  const response = await fetch(`${BASE_URL}Insectos/${insecto.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(insecto),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar el insecto");
  }

  return response.json();

export const deleteInsecto = async (id: string) => {
  const response = await fetch(`${BASE_URL}Insectos/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Error al eliminar el insecto");
  }
  return true;

};