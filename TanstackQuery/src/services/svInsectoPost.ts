import { BASE_URL } from "../config/apiConfig";
import { Createinsecto, insecto } from "../types/insecto";

export async function postInsecto(nuevoInsecto: Createinsecto): Promise<insecto> {
  const response = await fetch(`${BASE_URL}Insectos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoInsecto),
  });

  if (!response.ok) {
    throw new Error("Error al crear el insecto");
  }

  return response.json();
}
