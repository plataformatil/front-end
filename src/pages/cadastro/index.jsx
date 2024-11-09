import { Header } from "../../components/header"
import { Apresentacao } from "../../components/apresentacao"
import TILForm from "../../components/form"

import "./style.css"


const CadastroPage = () =>{
  return(
    <div className="">
        <Header/>
        <div className="container-cadastro">
          <Apresentacao/>
          <TILForm/>
        </div>
    </div>
  )
}

export {CadastroPage}