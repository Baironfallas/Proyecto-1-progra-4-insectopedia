import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteInsecto } from "../services/svInsectos";


export const useDeleteInsecto = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["deleteInsecto"],
    mutationFn: deleteInsecto,
    onSuccess: () => {
      // Actualiza la lista luego de borrar
      queryClient.invalidateQueries({ queryKey: ["insectos"] });
    },
  });
};
