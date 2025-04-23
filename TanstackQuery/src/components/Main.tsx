import { useInsectos } from "../hooks/useInsectos";
import { insecto } from "../types/insecto";
import CardInsectos from "./CardInsectos";
import PostInsectoCard from "../page/createInsecto";
import { useState } from "react";


const Main = () => {
  const { data, isPending, error } = useInsectos();
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    setMostrarFormulario(prev => !prev);
  };

  if (isPending) return <p>Cargando...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;

  return (
    <>
    <button onClick={toggleFormulario}>
    {mostrarFormulario ? "Cancelar" : "➕ Crear nuevo insecto"}
  </button>

  {/* ✅ Mostrar el formulario si el estado está activo */}
  {mostrarFormulario && <PostInsectoCard />}

    <div className="main-container">
      {data.map((item: insecto, index: number) => (
        <CardInsectos key={index} data={item} />
        
      ))}
    </div>
  </>
  );
};

export default Main;
