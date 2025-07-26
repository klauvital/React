import logo from "./logo.svg";
import "./App.css";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";
import ListCarros from "./components/ListCarros";
import Evento from "./components/Evento";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Frase />

      <Pessoa
        nome="Claudia hernandez"
        idade="58"
        profissao="Desenvolvedora de sistemas"
        foto="..\images\eu_face.jpg"
      />

      <Form />
      <ListCarros />
    </div>
  );
}

export default App;
