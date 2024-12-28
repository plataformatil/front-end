import { UserButton } from "@clerk/clerk-react"
import "./style.css"
const Home = () =>{
  return(
    <div>
      <h1>Home</h1>
      <button className="btn-user">
       <UserButton/>
      </button>
    </div>
  )
}

export { Home }