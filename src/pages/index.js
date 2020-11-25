import React from "react"

import './main.css';

import Header from '../components/Header';
import Conteudo from '../components/Conteudo';
import Informations from '../components/Informations';
import './infos';

export default function Home() {
  
  return(
    <>
      <Header />
      <div className="container">
        <a href='/infos'>Ir</a>
        <Conteudo />
        <hr></hr>
        <Informations />
      </div>
    </>
  )
}
