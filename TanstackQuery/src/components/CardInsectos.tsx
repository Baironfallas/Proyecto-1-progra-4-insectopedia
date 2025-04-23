import { insecto } from "../types/insecto";

type Props = {
  data: insecto;
};

const CardInsectos = ({ data }: Props) => {
  return (
    <div className="card">
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
          <button className="btn-edit"> Editar</button>
          <button className="btn-delete">Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default CardInsectos;
