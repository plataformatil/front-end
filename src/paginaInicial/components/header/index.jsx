import { UserButton } from "@clerk/clerk-react"
import "./style.css"

const Header = () =>{
  return (
    <header>
      <div className="container-header">
       <h2>TIL</h2>
       <div className="menu">
        <ul>
          <li><a href="#">Sobre a Til</a></li>
          <li><a href="#">Vagas</a></li>
          <li><a href="#">Serviços</a></li>
        </ul>
        <button className="btn-header">
          Entrar
        <UserButton/>
        </button>
       </div>
      </div>
    </header>
  )
}

export {Header};