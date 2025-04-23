import { insecto } from "../types/insecto";
import ButtonDelete from "./ButtonDelete";

type Props = {
  data: insecto;
};

const CardInsectos = ({ data }: Props) => {
  const handleEdit = () => {
    alert(`Editar insecto con id: ${data.id}`);
  };

  return (
    <div className="card">
      <img src={data.img} alt={data.nombre} className="card-img" />
      <div className="card-content">
        <div className="card-title-actions">
          <h3 className="card-title">{data.nombre}</h3>
          <div className="card-actions">
            <button className="btn-edit" onClick={handleEdit}>
              Editar
            </button>
            <ButtonDelete id={data.id} nombre={data.nombre} />
          </div>
        </div>
        <em>{data.nombreCientifico}</em>
        <p className="card-type">
          <strong>Tipo:</strong> {data.tipo}
        </p>
        <p className="card-curiosity">
          <strong>Curiosidad:</strong> {data.curiosidad}
        </p>
      </div>
    </div>
  );
};

export default CardInsectos;
