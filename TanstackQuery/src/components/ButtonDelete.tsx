import { MdDelete } from "react-icons/md";
import { useDeleteInsecto } from "../hooks/useDeleteInsecto";
import "../style/iconos.css";
import "../style/ButtonDelete.css";

type Props = {
  id: string;
  nombre: string;
};

const ButtonDelete = ({ id, nombre }: Props) => {
  const { mutate: eliminarInsecto } = useDeleteInsecto();

  const handleEliminar = () => {
    if (confirm(`¿Seguro que deseas eliminar a "${nombre}"?`)) {
      eliminarInsecto(id);
    }
  };

  return (
    <button className="btn-delete" onClick={handleEliminar}>
      <MdDelete className="btn-icon" />
      Eliminar
    </button>
  );
};

export default ButtonDelete;
