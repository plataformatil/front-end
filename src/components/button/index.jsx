    
  import { Link } from "react-router-dom";
  import "./style.css"
  const Button = ({name}) =>{
    return(
      <button name={name}>
        <Link to="/login" style={{color: 'white', fontWeight:'700'}}>{name}</Link>    
      </button>
    )
  }

  export {Button}
    