import React, { Component } from 'react'
import "./style.css"

class ListaDeCategorias extends Component{

    constructor(){
        super()
        this.state = {categorias: []}

        this._novasCategorias = this._novasCategorias.bind(this)
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount(){
        this.props.categorias.inscrever(this._novasCategorias);
    }

    _novasCategorias(categorias){
        this.setState({...this.state,categorias})
    }

    _handleEventoInput(e){
        console.log(e.key)
        
        if (e.key === "Enter") {
            let valorCategoria = e.target.value;
            this.props.adicionarCategoria(valorCategoria);
          }
    }

    render(){
        return(
            <section className="lista-categoria">
                <ul className="lista-categoria_lista">
                    {this.state.categorias.map((categoria, index) => {
                        return <li key={index} className="lista-categoria_item">{categoria}</li>
                    
                    })}
                    
                </ul>
                <input type="text"  
                className="lista-categoria_input"
                placeholder="Adicionar Categoria"
                onKeyUp={this._handleEventoInput.bind(this)}/>
            </section>
         )
    }
}

export default ListaDeCategorias;