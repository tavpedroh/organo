import Jogador from '../Jogador'
import './Posicao.css'

const Posicao = (props) => {
    const css = {backgroundColor: props.corSecundaria}
    const borda = {borderColor: props.corPrimaria}
    return(
        (props.jogadores.length > 0) && <section className='posicao' style={css}>
            <h3 style={borda}>{props.nome}</h3>
            <div className='jogadores'>
                {props.jogadores.map(jogador => <Jogador 
                corDeFundo = {props.corPrimaria}
                key = {jogador.nome}
                nome={jogador.nome} 
                apelido={jogador.apelido} 
                imagem={jogador.imagem} 
                /> )}
            </div>
        </section>
    )
}

export default Posicao