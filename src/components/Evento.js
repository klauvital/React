function Evento({numero}){

    function meuEvento(){
        console.log(`Opa! Fui ativado ${numero}`)
    }
    return(
        <div>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}
export default Evento