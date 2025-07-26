function Pessoa({ nome, idade, profissao, foto }) {
  return (
    <>
      <img src={foto} />
      <h3>Nome: {nome}</h3>
      <h3>Idade: {idade}</h3>
      <h3>Profissão: {profissao}</h3>
    </>
  );
}

export default Pessoa;
