import { useState } from "react";
import { insecto } from "../types/insecto";
import EditInsec from "./EditInsec";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateInsecto } from "../services/svInsectos";

type Props = {
  data: insecto;
};




const CardInsectos = ({ data }: Props) => {
  const [editando, setEditando] = useState(false);
  const queryClient = useQueryClient();


  const mutation = useMutation({
    mutationFn: updateInsecto,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["insectos"] });
      setEditando(false);
    },
  });

  const handleGuardar = (insectoEditado: insecto) => {
    mutation.mutate(insectoEditado);
  };
  


  return (
    <div className="card">

      {editando?(
        <EditInsec insecto={data} onGuardar={handleGuardar} onCancelar={() => setEditando(false)} />
      ):(
        <>
      <img src={data.img} alt={data.nombre} className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{data.nombre}</h3>
        <em>{data.nombreCientifico}</em>
        <p className="card-type">
          <strong>Tipo:</strong> {data.tipo}
        </p>
        <p className="card-curiosity">
          <strong>Curiosidad:</strong> {data.curiosidad}
        </p>
        <div className="card-buttons">
        <button className="btn-edit" onClick={() => setEditando(true)}>Editar</button>
          
          <button className="btn-delete">Eliminar</button>
        </div>
        </div>
        </>
      )}
    </div>
  );
};

export default CardInsectos;
