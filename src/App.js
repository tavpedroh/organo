import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Posicao from './componentes/Posicao';

function App() {

  const posicoes = [
    {
      nome: 'Goleiro',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
  },
  {
    nome: 'Zagueiro',
    corPrimaria: '#82CFFA',
    corSecundaria: '#E8F8FF'
  },
  {
    nome: 'Meio-campo',
    corPrimaria: '#A6D157',
    corSecundaria: '#F0F8E2'
  },
{
  nome: 'Atacante',
  corPrimaria: '#E06B69',
  corSecundaria: '#FDE7E8'
}
]

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdcionado = (jogador) => {
    setJogadores([...jogadores, jogador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario posicoes={posicoes.map(posicao => posicao.nome)} aoJogadorCadastrado={jogador => aoNovoJogadorAdcionado(jogador)} />
      {posicoes.map(posicao => <Posicao 
        key={posicao.nome} 
        nome={posicao.nome} corPrimaria={posicao.corPrimaria} 
        corSecundaria={posicao.corSecundaria}
        jogadores={jogadores.filter(jogador => jogador.posicao === posicao.nome)}
        />)}
    </div>
  );
}

export default App;
