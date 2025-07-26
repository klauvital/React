import Item from "./Item";

function ListCarros() {
  return (
    <>
      <h4> Meus veiculos</h4>
      <ul>
        <Item marca="Chevrolet" modelo="Chevet" ano_lancamento={1978} />
        <Item marca="Ford" modelo="Escort XR3" ano_lancamento={1985} />
        <Item marca="Chevrolet" modelo="Kadete" ano_lancamento={1994} />
        <Item modelo="Citroen" />
      </ul>
    </>
  );
}
export default ListCarros;
