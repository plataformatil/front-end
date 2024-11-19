import { Button } from "../../components/button"
import {Apresentacao} from "../../components/apresentacao"
import {Header} from "../../components/header"
import {LoginForm} from "../../components/form-login"
import "./style.css"
const LoginPage = () =>{
  return (
    <div>
    <Header/>
    <div className="container-login">
      <Apresentacao>
        <Button name="Voltar" url="/"/>
      </Apresentacao>
      <LoginForm/>
    </div>
    </div>
  )
}

export { LoginPage }