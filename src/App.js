import React, { Component } from 'react';
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas"
import FormCadastro from './components/FormCadastro/FormCadastro';
import "./App.css"

class App extends Component {

  constructor(){
    super()
    this.state = {
      notas:[]
    }
  }


  criarNota(titulo, texto){
    const novaNota = {titulo, texto}
    const novoArryNotas = [...this.state.notas, novaNota]
    const novoState = {
      notas: novoArryNotas
    }
    this.setState(novoState)
  }
  render(){
    return (
      <section className="conteudo">
        <FormCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas = {this.state.notas}/>
      </section>
      );

  }
}




export default App;
