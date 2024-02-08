import '../Hojas de estilo/formulario.css';

function Formulario (props) {
  return (
    <form className="tarea-formulario">
      <input
        className="tarea-input" type="text" placeholder="Escribir Tarea" name="texto"
        autoComplete='off'
         
      />
      <button className="tarea-boton">Agregar Tarea</button>
      
    </form>
  );
}

export default Formulario;
