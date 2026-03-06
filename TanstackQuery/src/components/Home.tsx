import { useState } from "react";
import { useInsectos } from "../hooks/useInsectos";
import { usePostInsecto } from "../hooks/usePostInsecto";
import { Createinsecto, insecto } from "../types/insecto";
import CardInsectos from "./CardInsectos";
import ButtonCreateInsecto from "./ButtonCreateInsecto";
import FormCreateInsecto from "./FormCreateInsecto";
import "../style/Home.css";

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
    <div className="home-wrapper">
      <div className="main-header">
        <ButtonCreateInsecto onClick={toggleFormulario} />
      </div>

      {mostrarFormulario && (
        <div className="modal-overlay">
          <div className="modal-content">
            <FormCreateInsecto
              onSubmit={handleCrearInsecto}
              onCancel={() => setMostrarFormulario(false)}
            />
          </div>
        </div>
      )}

      <div className="main-container">
        {data.map((item: insecto) => (
          <CardInsectos key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
