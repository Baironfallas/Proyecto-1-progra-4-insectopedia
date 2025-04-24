import { useState } from "react";
import { Createinsecto } from "../types/insecto";

type Props = {
  onSubmit: (nuevoInsecto: Createinsecto) => void;
};

const FormCreateInsecto = ({ onSubmit }: Props) => {
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
      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        placeholder="Nombre"
        required
      />
      <input
        type="text"
        name="curiosidad"
        value={formData.curiosidad}
        onChange={handleChange}
        placeholder="Curiosidad"
        required
      />
      <input
        type="text"
        name="nombreCientifico"
        value={formData.nombreCientifico}
        onChange={handleChange}
        placeholder="Nombre científico"
        required
      />
      <input
        type="text"
        name="tipo"
        value={formData.tipo}
        onChange={handleChange}
        placeholder="Tipo"
        required
      />
      <input
        type="url"
        name="img"
        value={formData.img}
        onChange={handleChange}
        placeholder="URL de imagen"
        required
      />
      <button type="submit" className="btn-create">
        Guardar
      </button>
    </form>
  );
};

export default FormCreateInsecto;
