import {insecto} from '../types/insecto'

type PropsInsecto ={
    insecto: insecto,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onSubmit: (e: React.FormEvent) => void;
    isLoading: boolean;

}

const FormularioInsecto = ({ insecto, onChange, onSubmit, isLoading }: PropsInsecto) => {

    return(
        <form onSubmit={onSubmit}>
            <h2>Agregar nuevo insecto</h2>

            <input
                name="nombre"
                value={insecto.nombre}
                onChange={onChange}
                placeholder="Nombre"
            />
            <input
                name="tipo"
                value={insecto.tipo}
                onChange={onChange}
                placeholder="Tipo"
            />
            
            <input
                name="curiosidad"
                value={insecto.curiosidad}
                onChange={onChange}
                placeholder="Curiosidad"
            />
        
            <input
                name="img"
                value={insecto.img}
                onChange={onChange}
                placeholder="URL de la imagen"
            />
            <button type="submit" disabled={isLoading}>
                {isLoading ? "Guardando..." : "Agregar Insecto"}
            </button>


        </form>
    )
}

export default FormularioInsecto;