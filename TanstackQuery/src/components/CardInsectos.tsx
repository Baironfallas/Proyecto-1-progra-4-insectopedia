import { insecto } from "../types/insecto";
import ButtonDelete from "./ButtonDelete";
import { FaEdit } from "react-icons/fa";

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
        <h3 className="card-title">{data.nombre}</h3>
        <em className="card-subtitle">{data.nombreCientifico}</em>
        <p className="card-type">
          <strong>Tipo:</strong> {data.tipo}
        </p>
        <p className="card-curiosity">
          <strong>Curiosidad:</strong> {data.curiosidad}
        </p>
        <div className="card-actions">
          <button className="btn btn-edit" onClick={handleEdit}>
            <FaEdit className="btn-icon" />
            Editar
          </button>
          <ButtonDelete id={data.id} nombre={data.nombre} />
        </div>
      </div>
    </div>
  );
};

export default CardInsectos;
