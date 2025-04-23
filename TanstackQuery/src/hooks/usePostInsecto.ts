import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postInsecto } from "../services/svInsectoPost";

export const usePostInsecto = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ['insectos'],
    mutationFn: postInsecto,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['insectos'] });
    },
  });

  return {
    crearInsecto: mutate,
  };
};
