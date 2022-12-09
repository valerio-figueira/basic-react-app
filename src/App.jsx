import React from "react";

import './App.css';

import Componente from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Aluno from './components/basicos/Alunos';
import Fragmento from './components/basicos/Fragmento';
import MaxAndMin from './components/basicos/MaxAndMin';
import Card from './components/layout/Card';

const helloWorld = <h1>Fundamentos React</h1>

function getRandom(){
  return Math.floor(Math.random() * 10)
}

const [n1, n2] = [getRandom(), getRandom()];

function App() {
  return (
    <div className='container'>

        {helloWorld}
        
        <div className="cards">
            <Card titulo="1º Componente">
              <Componente />
            </Card>

            <Card titulo="Parâmetro">
              <ComParametro 
              titulo="Segundo Componente" 
              subtitulo="Este é um componente com parâmetros. Chamados também de props (propriedades)."
              />
            </Card>

            <Card titulo="Aluno">
              <Aluno
                nome="José Valério"
                nota={7.5}
              />
            </Card>
            
            <Card titulo="Fragmento">
              <Fragmento />
            </Card>

            <Card titulo="Desafio Valores Aleatórios">
              <MaxAndMin
              max={n1 > n2 ? n1 : n2}
              min={n1 < n2 ? n1 : n2} />
            </Card>
        </div>

    </div>
  )
}

export default App