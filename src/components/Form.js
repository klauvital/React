import { useState } from "react";
import "../index.css";

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`Usuário ${name} Cadastrado com senha ${password}!`);
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <div class="espacoForm">
      Cadastrar Usuário
      <form onSubmit={cadastrarUsuario}>
        <div class="espacoForm">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="text"
            id="password"
            name="password"
            placeholder=" Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div class="espacoForm">
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
