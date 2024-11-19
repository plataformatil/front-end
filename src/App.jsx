import { RouterProvider } from "react-router-dom"
import router from "./router"
import {ClerkProvider} from "@clerk/clerk-react"

import "./index.css"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
 
const App = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">

    <main>
       <RouterProvider 
       router={router} 
       future={{ v7_partialHydration: true }}
       />
    </main>
    </ClerkProvider>
  )
}

export { App } 