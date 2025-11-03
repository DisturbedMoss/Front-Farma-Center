import { useContext, type ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

const Navbar = () => {
  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlerta("Usuário desconectado!", 'info');
    navigate("/");
  }
// ListaCategorias / FormularioCategorias / DeletarCategoria / CardCategoria)
  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <div className="w-full flex justify-center py-4 bg-indigo-900 text-white">
        <div className="container flex justify-between text-lg mx-8">
          <Link to="/home" className="text-2xl font-bold">
            Farma Center
          </Link>

          <div className="flex gap-4">
            <Link to="/temas" className="hover:underline">
              Categorias
            </Link>
            <Link to="/cadastrartema" className="hover:underline">
              Cadastrar categoria
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{component}</>;
};

export default Navbar;
