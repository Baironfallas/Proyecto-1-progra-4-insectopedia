import { useState } from "react";
import { insecto } from "../types/insecto";
import {
  FaUser,
  FaLeaf,
  FaMapMarkerAlt,
  FaLightbulb,
  FaImage,
} from "react-icons/fa";
import "../style/FormUpdateInsecto.css";

type Props = {
  insectoActual: insecto;
  onGuardar: (insectoEditado: insecto) => void;
  onCancelar: () => void;
};

const FormEditInsecto = ({ insectoActual, onGuardar, onCancelar }: Props) => {
  const [formData, setFormData] = useState<insecto>(insectoActual);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGuardar(formData);
  };

  return (
    <form className="form-edit" onSubmit={handleSubmit}>
      <div className="input-icon">
        <FaUser className="icon" />
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
      </div>

      <div className="input-icon">
        <FaLeaf className="icon" />
        <input
          type="text"
          name="nombreCientifico"
          value={formData.nombreCientifico}
          onChange={handleChange}
          placeholder="Nombre científico"
          required
        />
      </div>

      <div className="input-icon">
        <FaMapMarkerAlt className="icon" />
        <input
          type="text"
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          placeholder="Tipo"
          required
        />
      </div>

      <div className="input-icon">
        <FaLightbulb className="icon" />
        <input
          type="text"
          name="curiosidad"
          value={formData.curiosidad}
          onChange={handleChange}
          placeholder="Curiosidad"
          required
        />
      </div>

      <div className="input-icon">
        <FaImage className="icon" />
        <input
          type="url"
          name="img"
          value={formData.img}
          onChange={handleChange}
          placeholder="URL de imagen"
          required
        />
      </div>

      <div className="form-buttons">
        <button type="submit" className="btn-save">
          Guardar
        </button>
        <button type="button" className="btn-cancel" onClick={onCancelar}>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default FormEditInsecto;
