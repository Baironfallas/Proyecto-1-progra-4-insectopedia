import { insecto } from "../types/insecto";
import { BASE_URL } from "../config/apiConfig";



export async function postInsecto( nuevoInsecto:insecto): Promise<insecto>{
    const response = await fetch (`${BASE_URL}insectos`,{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoInsecto)
    });

    const insectoCreado = await response.json();

    return insectoCreado;
}