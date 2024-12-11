import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSupensa';
import Botao from '../Botao';
import { useState } from 'react';


const Formulario = (props) => {

    const posicoes = [
        '',
        'Goleiro',
        'Zagueiro',
        'Meio-campo',
        'Atacante'
    ]

    const [nome,setNome] = useState('')
    const [apelido,setApelido] = useState('')
    const [imagem,setImagem] = useState('')
    const [posicao,setPosicao] = useState('')
    

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoJogadorCadastrado({
            nome: nome,
            apelido: apelido,
            imagem: imagem,
            posicao: posicao
        })
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card de jogador</h2>
                <CampoTexto 
                    obrigatorio = {true} 
                    label="Nome" 
                    placeholder="Digite o seu nome"
                    valor = {nome}
                    aoAlterado = {valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio = {true} 
                    label="Apelido" 
                    placeholder="Digite o seu apelido"
                    valor = {apelido}
                    aoAlterado = {valor => setApelido(valor)}
                />
                <CampoTexto 
                    label="Imagem"  
                    placeholder="Informe o endereço da imagem"
                    valor = {imagem}
                    aoAlterado = {valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio = {true} 
                    label="Posição" 
                    itens = {posicoes} 
                    valor = {posicao}
                    aoAlterado = {valor => setPosicao(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;