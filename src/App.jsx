import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import logo from './imagenes/freecodecamp-logo.png';

function App () {
  return (
    <div className="aplicacion-tareas">

      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo" src={logo} alt="logo" />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
