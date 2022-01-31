import React from 'react'
import './botao.css'

class Botao extends React.Component {
    render() {
        const { func } =  this.props;
        return (
            <section className="botoes" >
              <button className="pokeBtn" onClick={ func }>All</button>
              <button className="pokeBtn" onClick={ func }>Fire</button>
              <button className="pokeBtn" onClick={ func }>Electric</button>
              <button className="pokeBtn" onClick={ func }>Psychic</button>
              <button className="pokeBtn" onClick={ func }>Poison</button>
              <button className="pokeBtn" onClick={ func }>Normal</button>
              <button className="pokeBtn" onClick={ func }>Dragon</button>
              <button className="pokeBtn" onClick={ func }>Bug</button>
            </section>
        )
    }
}

export default Botao;