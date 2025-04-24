// src/components/EditarInsectoForm.tsx
import { useState } from "react";
import { insecto } from "../types/insecto";


type Props = {
 insecto: insecto;
  onGuardar: (nuevo: insecto) => void;
  onCancelar: () => void;
};


const EditInsec = ({ insecto, onGuardar, onCancelar }: Props) => {
    const [form, setForm] = useState<insecto>(insecto);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onGuardar(form);
    };

  return (
    <form onSubmit={handleSubmit} className="form-editar">
        <div className="card-content">
      <div className="card-title">
      <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" />
      </div>
      <div className="card-type">
      <input name="tipo" value={form.tipo} onChange={handleChange} placeholder="Tipo" />
      </div>
      <p className="card-curiosity">
      <input name="curiosidad" value={form.curiosidad} onChange={handleChange} placeholder="Curiosidad" />
      </p>
      <input name="img" value={form.img} onChange={handleChange} placeholder="URL de la imagen"  className="card-img"/>

      <div className="card-buttons">
      <button type="submit" className="btn-save">Guardar</button>
      <button type="button" className="btn-cancel" onClick={onCancelar}>Cancelar</button>
      </div>
      </div>
    </form>
  );
};

export default EditInsec;
