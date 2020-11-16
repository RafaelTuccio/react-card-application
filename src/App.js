import React, { Component } from 'react';
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas"
import ListaDeCategorias from './components/ListaDeCategorias'
import FormCadastro from './components/FormCadastro/FormCadastro';
import "./App.css"
import Categorias from './dados/Categorias';
import ArrayNotas from './dados/Nota'

class App extends Component {

  constructor() {
    super()
    this.categorias = new Categorias();
    this.notas = new ArrayNotas();
    
  }

  


  render() {
    return (
      <section className="conteudo">
        <FormCadastro categorias={this.categorias} 
        criarNota={this.notas.adicionarNota.bind(this.notas)} />
        <main className="conteudo-principal">
          <ListaDeCategorias 
          adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          categorias={this.categorias}/>
          <ListaDeNotas
            apagarNota={this.notas.apagarNota.bind(this.notas)}
            notas={this.notas} />
        </main>
      </section>
    );

  }
}




export default App;
