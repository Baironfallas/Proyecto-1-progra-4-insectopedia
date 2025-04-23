import { usePostInsecto } from "../hooks/usePostInsecto";
import {initialInsecto} from '../types/insecto'
import { useState } from "react";
import FormularioInsecto from '../components/PostInsectoCard'


const PostInsectoCard = () =>{
    const [nuevoInsecto, setNuevoInsecto] = useState (initialInsecto);
    const {postInsecto, isPending, isSuccess, error } = usePostInsecto();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNuevoInsecto({
            ...nuevoInsecto,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        postInsecto(nuevoInsecto);
        setNuevoInsecto(initialInsecto)
    };

    return(
        <>
            <FormularioInsecto
            insecto={nuevoInsecto}
            onChange={handleChange}
            onSubmit={handleSubmit}
            isLoading={isPending}
            />
            
            {isSuccess && <p className="success">✅ Insecto creado con éxito</p>}
            {error && <p className="error">❌ {(error as Error).message}</p>}
        </>
    )
}

export default PostInsectoCard;