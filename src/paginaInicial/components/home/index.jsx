import { Header } from "../header"
import { Mascote } from "../mascote"
import "./style.css"
const Home = () =>{
  return(
    <div className="container-home">
      <Header/>
      <h1>Home</h1>
      <div className="mascote-home">
       <Mascote/>
      </div>

    </div>
  )
}

export { Home }