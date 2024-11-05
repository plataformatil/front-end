import {Header} from "./components/header"
import {Apresentacao} from "./components/apresentacao"
import TILForm from "./components/form"

import "./index.css"
 
const App = () => {
  return (
    <main>
      <Header/>
      <div className="container-main">
         <Apresentacao/>
         <TILForm/>
      </div>
    </main>
  )
}

export { App } 