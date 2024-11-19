import { Header } from "../../components/header"
import { Apresentacao } from "../../components/apresentacao"
import { Button } from "../../components/button"
import TILForm from "../../components/form"

import "./style.css"


const CadastroPage = () =>{
  return(
    <div>
        <Header/>
        <div className="container-cadastro">
          <Apresentacao>
            <Button name="Entrar" url="/login"></Button>
          </Apresentacao>
          <TILForm/>
        </div>
    </div>
  )
}

export {CadastroPage}