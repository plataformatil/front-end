import { Home } from "../../components/home"
import { useClerk } from "@clerk/clerk-react"
import "./style.css"
const HomePage = () =>{
  const {user} = useClerk()
  return(
   <div className="container-home">
     <Home/>
     <h3>Olá {user.fullName}</h3>
   </div>
  )
}

export { HomePage }