import './Jogador.css'

const Jogador = ({ nome, apelido, imagem }) => {
    return(
        <div className='jogador'>
            <div className='cabecalho'>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{apelido}</h5>
            </div>
        </div>

    )
}

export default Jogador