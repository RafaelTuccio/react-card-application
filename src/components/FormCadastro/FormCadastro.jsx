import React, { Component } from "react"
import "./FormCadastro.css"

export default class FormCadastro extends Component {

    constructor(props) {
        super(props)
        this.titulo = ""
        this.texto = ""
    }

    _handleTitulo (evento) {
        evento.stopPropagation()
        this.titulo = evento.target.value
        
    }
    _handleTexto (evento) {
        evento.stopPropagation()
        this.texto = evento.target.value
        
    }

    _criarCard(evento) {
        evento.preventDefault()
        evento.stopPropagation()
        this.props.criarNota(this.titulo, this.texto)
    }


    render() {
        return (
            <form className="form-cadastro" onSubmit={this._criarCard.bind(this)}>
                <input className="form-cadastro_input" type="text" placeholder="Titulo" onChange={this._handleTitulo.bind(this)}/>
                <textarea rows={15} placeholder="Escreva sua nota" className="form-cadastro-input" onChange={this._handleTexto.bind(this)}/>
                <button className="form-cadastro_input form-cadastro-submit" >Criar nota</button>
            </form>

        )
    }

}

