import { FaEdit } from "react-icons/fa";
import { insecto } from "../types/insecto";

type Props = {
  data: insecto;
  onClick: () => void;
};

const ButtonUpdateInsecto = ({ data, onClick }: Props) => {
  return (
    <button
      className="btn btn-edit"
      onClick={onClick}
      title={`Editar ${data.nombre}`}
    >
      <FaEdit className="btn-icon" />
      Editar
    </button>
  );
};

export default ButtonUpdateInsecto;
