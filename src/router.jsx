import { createBrowserRouter } from "react-router-dom"
import { CadastroPage } from "./pages/cadastro";
import { LoginPage } from "./pages/login";
import { HomePage } from "./pages/home"

import { SignedIn, SignedOut } from "@clerk/clerk-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CadastroPage />,
  },
	{
    path: "/login",
    element: <LoginPage />,
  },
	{
    path: "/home",
    element:  
    <>
    
        <SignedIn>
         <HomePage/>
        </SignedIn>
        <SignedOut>
         <CadastroPage />
        </SignedOut>
    </>
  },
	
])

export default router;