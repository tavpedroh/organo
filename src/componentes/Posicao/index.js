import './Posicao.css'

const Posicao = (props) => {
    const css = {backgroundColor: props.corSecundaria}
    const borda = {borderColor: props.corPrimaria}
    return(
        <section className='posicao' style={css}>
            <h3 style={borda}>{props.nome}</h3>

        </section>
    )
}

export default Posicao