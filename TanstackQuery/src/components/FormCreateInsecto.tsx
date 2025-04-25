import { useState } from "react";
import { Createinsecto } from "../types/insecto";
import {
  FaUser,
  FaLightbulb,
  FaLeaf,
  FaMapMarkerAlt,
  FaImage,
} from "react-icons/fa";

type Props = {
  onSubmit: (nuevoInsecto: Createinsecto) => void;
  onCancel: () => void;
};

const FormCreateInsecto = ({ onSubmit, onCancel }: Props) => {
  const [formData, setFormData] = useState<Createinsecto>({
    nombre: "",
    curiosidad: "",
    nombreCientifico: "",
    tipo: "",
    img: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      nombre: "",
      curiosidad: "",
      nombreCientifico: "",
      tipo: "",
      img: "",
    });
  };

  return (
    <form className="form-create" onSubmit={handleSubmit}>
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
        <button type="submit" className="btn-create">
          Guardar
        </button>
        <button type="button" className="btn-cancel" onClick={onCancel}>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default FormCreateInsecto;
