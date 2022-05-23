import './App.css';
import Header from "./components/Header"
import Slogan from "./components/Slogan"

function App() {
  return (
    <div>
      <Header />
      <Slogan />
      <div>Areas de trabajo</div>
      <div>Mision y valores</div>
      <div>Clientes, cirugias, otra info, numeros, catalogos</div>
      <div>Formulario de contacto</div>
      <div>Footer: info contacto, direccion, telefonos, mail, horarios, etc</div>
    </div>
  );
}

export default App;

/* media queries 

320px — 480px: Mobile devices
481px — 768px: iPads, Tablets
769px — 1024px: Small screens, laptops
1025px — 1200px: Desktops, large screens
1201px and more —  Extra large screens, TV

*/