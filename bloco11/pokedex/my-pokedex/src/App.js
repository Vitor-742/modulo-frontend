import React from "react";
import "./App.css";
import Botao from "./Botao";
import Conteudo from "./Conteudo";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      filtro: 'All'
    }
  }

  filtraPokemon = (event) => {
    this.setState({ filtro: event.target.textContent })
  }

  render() {
    return (
      <>
        <Botao func={this.filtraPokemon} />
        <Conteudo filtro={ this.state.filtro } />
      </>
    );
  }
}

export default App;
