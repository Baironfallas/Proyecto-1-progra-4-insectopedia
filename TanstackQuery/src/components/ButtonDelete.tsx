import { MdDelete } from "react-icons/md";
import { useDeleteInsecto } from "../hooks/useDeleteInsecto";

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
    <button
      className="icon-btn delete"
      onClick={handleEliminar}
      title="Eliminar"
    >
      <MdDelete size={20} />
    </button>
  );
};

export default ButtonDelete;
