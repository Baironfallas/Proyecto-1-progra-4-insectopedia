import { useQuery } from "@tanstack/react-query";
import { getInsectos } from "../services/svInsectos";


export const useInsectos = () => {
  return useQuery({
    queryKey: ["insectos"],
    queryFn: getInsectos,
  });
};
