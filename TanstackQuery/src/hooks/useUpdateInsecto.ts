import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateInsecto } from "../services/svInsectos";


export const useUpdateInsecto = () => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: updateInsecto,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["insectos"] });
      },
    });
  };
