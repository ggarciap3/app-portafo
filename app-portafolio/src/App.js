
// import Acerca  from "./componetes/Acerca/acerca";
// import Servicio  from "./componetes/servicios/servicio";
// import Portada from "./componetes/portada/Portada";

import Header from "./componetes/header/Header";

import {Route} from "wouter"
import Configuracion from './componetes/configuracion/Configuracion'
import Principal from './componetes/principal/principal'

function App() {
  return (
    <div className="App"> 
      <Header/>
      
      
      <Route path="/" component={Principal} />
      <Route path="/configuracion" component={Configuracion}/>

    </div>
  );
}


export default App;
