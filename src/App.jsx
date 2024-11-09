import { RouterProvider } from "react-router-dom"
import router from "./router"

import "./index.css"
 
const App = () => {
  return (
    <main>
       <RouterProvider router={router} />

    </main>
  )
}

export { App } 