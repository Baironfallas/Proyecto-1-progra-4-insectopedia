import { useState } from "react";
import { insecto } from "../types/insecto";
import ButtonDelete from "./ButtonDelete";
import ButtonUpdateInsecto from "./ButtonUpdateInsecto";
import { useUpdateInsecto } from "../hooks/useUpdateInsecto";
import FormEditInsecto from "./FormUpdateInsecto";

type Props = {
  data: insecto;
};

const CardInsectos = ({ data }: Props) => {
  const [editando, setEditando] = useState(false);

  const { mutate: actualizarInsecto } = useUpdateInsecto();

  const handleEdit = () => {
    setEditando(true);
  };

  const handleGuardar = (insectoEditado: insecto) => {
    actualizarInsecto(insectoEditado);
    setEditando(false);
  };

  const handleCancelar = () => {
    setEditando(false);
  };

  return (
    <div className="card">
      {editando ? (
        <FormEditInsecto
          insectoActual={data}
          onGuardar={handleGuardar}
          onCancelar={handleCancelar}
        />
      ) : (
        <>
          <img src={data.img} alt={data.nombre} className="card-img" />
          <div className="card-content">
            <h3 className="card-title">{data.nombre}</h3>
            <em className="card-subtitle">{data.nombreCientifico}</em>
            <p className="card-type">
              <strong>Tipo:</strong> {data.tipo}
            </p>
            <p className="card-curiosity">
              <strong>Curiosidad:</strong> {data.curiosidad}
            </p>
            <div className="card-actions">
              <ButtonUpdateInsecto data={data} onClick={handleEdit} />
              <ButtonDelete id={data.id} nombre={data.nombre} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardInsectos;
