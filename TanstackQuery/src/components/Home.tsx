import { useState } from "react";
import { useInsectos } from "../hooks/useInsectos";
import { usePostInsecto } from "../hooks/usePostInsecto";
import { Createinsecto, insecto } from "../types/insecto";
import CardInsectos from "./CardInsectos";
import ButtonCreateInsecto from "./ButtonCreateInsecto";
import FormCreateInsecto from "./FormCreateInsecto";

const Home = () => {
  const { data, isPending, error } = useInsectos();
  const { crearInsecto } = usePostInsecto();
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    setMostrarFormulario((prev) => !prev);
  };

  const handleCrearInsecto = (nuevoInsecto: Createinsecto) => {
    crearInsecto(nuevoInsecto);
    setMostrarFormulario(false);
  };

  if (isPending) return <p className="status-message">Cargando...</p>;
  if (error)
    return <p className="status-message">Error: {(error as Error).message}</p>;

  return (
    <>
      <div className="main-header">
        <ButtonCreateInsecto onClick={toggleFormulario} />
      </div>

      {mostrarFormulario && (
        <div className="form-container">
          <FormCreateInsecto
            onSubmit={handleCrearInsecto}
            onCancel={() => setMostrarFormulario(false)}
          />
        </div>
      )}

      <div className="main-container">
        {data.map((item: insecto, index: number) => (
          <CardInsectos key={index} data={item} />
        ))}
      </div>
    </>
  );
};

export default Home;
