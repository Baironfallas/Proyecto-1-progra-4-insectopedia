import { postInsecto } from "../services/svInsectoPost";
import {  useMutation } from "@tanstack/react-query";

export const usePostInsecto= () =>{
    

    const{mutate, data:insecto, isPending, error, isSuccess}= useMutation({
        mutationKey:['insectosPost'],
        mutationFn: postInsecto,
        
    });

    return{
            insecto: insecto ?? null,
            isPending,
            error,
            isSuccess,
            postInsecto: mutate,
        }
}