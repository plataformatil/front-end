import { Link } from "react-router-dom";

import "./style.css"
const Apresentacao = () =>{
  return (
    <div className="container">
      <button>
        <Link to="/login">LOGIN</Link>    
      </button>
    </div>
  )
}

export {Apresentacao}