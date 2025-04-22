import { useInsectos } from "../hooks/useInsectos";
import { insecto } from "../types/insecto";
import CardInsectos from "./CardInsectos";

const Main = () => {
  const { data, isPending, error } = useInsectos();

  if (isPending) return <p>Cargando...</p>;
  if (error) return <p>Error: {(error as Error).message}</p>;

  return (
    <div className="main-container">
      {data.map((item: insecto, index: number) => (
        <CardInsectos key={index} data={item} />
      ))}
    </div>
  );
};

export default Main;
