import { useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import CardCategoria from "../cardCategoria/CardCategoria";
import { buscar } from "../../../services/Service";
import { SyncLoader } from "react-spinners";

function ListaCategoria() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  async function buscarCategorias() {
    try {
      setIsLoading(true);

      await buscar("/categorias", setCategorias);
    } catch (error: any) {
      alert("Essa categoria não existe mano");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && <SyncLoader color="#312e81" size={32} />}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {!isLoading && categorias.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhuma categoria foi encontrada!
            </span>
          )}

          <div
            className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8"
          >
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default ListaCategoria;
