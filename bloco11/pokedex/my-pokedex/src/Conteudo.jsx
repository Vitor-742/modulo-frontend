import React from "react"
import pokemons from "./data.js"
import "./Conteudo.css"

class Conteudo extends React.Component {
    render () {
        const { filtro } = this.props;
        let pokemons2 = []
        if (filtro !== 'All') pokemons2 = pokemons.filter((item) => item.type === filtro)
        else pokemons2 = pokemons
        return (
            <div className='tabela'>
            {pokemons2.map((item) =>
            (
            <div className='pokemon' key={ item.name }>
                <ul>
                    <li>{item.name}</li>
                    <li>{item.type}</li>
                    <li>{item.averageWeight.value} {item.averageWeight.measurementUnit}</li>
                </ul>
                
                <img src={item.image} alt="pokemon"/>
            </div>
            )
            )}
            </div>
        )
    }
}

export default Conteudo