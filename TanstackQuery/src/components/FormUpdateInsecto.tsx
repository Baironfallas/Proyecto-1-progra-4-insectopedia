import { useState } from "react";
import { insecto } from "../types/insecto";

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
        name="nombreCientifico"
        value={formData.nombreCientifico}
        onChange={handleChange}
        placeholder="Nombre Científico"
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
        type="text"
        name="curiosidad"
        value={formData.curiosidad}
        onChange={handleChange}
        placeholder="Curiosidad"
        required
      />
      <input
        type="text"
        name="img"
        value={formData.img}
        onChange={handleChange}
        placeholder="URL de imagen"
        required
      />

      <div className="form-buttons">
        <button type="submit" className="btn btn-save">
          Guardar
        </button>
        <button type="button" className="btn btn-cancel" onClick={onCancelar}>
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default FormEditInsecto;
