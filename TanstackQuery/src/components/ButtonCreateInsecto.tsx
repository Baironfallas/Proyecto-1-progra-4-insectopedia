import { MdAdd } from "react-icons/md";
import "../style/ButtonCreateInsecto.css";
type Props = {
  onClick: () => void;
};

const ButtonCreateInsecto = ({ onClick }: Props) => {
  return (
    <button className="btn-create" onClick={onClick}>
      <MdAdd className="btn-icon" id="button-create" />
      Crear nuevo insecto
    </button>
  );
};

export default ButtonCreateInsecto;
