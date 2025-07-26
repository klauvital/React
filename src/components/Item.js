import PropTypes from "prop-types";

function Item({ marca, modelo, ano_lancamento }) {
  return (
    <>
      <li>
        {marca} - {modelo} - {ano_lancamento}
      </li>
    </>
  );
}
// validação a nivel de programação
Item.propTypes = {
  marca: PropTypes.string.isRequired,
  modelo: PropTypes.string.isRequired,
  ano_lancamento: PropTypes.number,
};
//valores default
Item.defaultProps = {
  marca: "Não preenchido",
  ano_lancamento: 0,
};

export default Item;
