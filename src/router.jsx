import { createBrowserRouter } from "react-router-dom"
import { CadastroPage } from "./pages/cadastro";
import { LoginPage } from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CadastroPage />,
  },
	{
    path: "/login",
    element: <LoginPage />,
  },
	
])

export default router;