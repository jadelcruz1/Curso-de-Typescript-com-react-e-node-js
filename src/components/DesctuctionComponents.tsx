// aula 4 - desestruturando componentes com props


import React from 'react';

interface Props {
  nome: string
  Sobrenome: string
  Telefone: number
  tags: string[]

}



const  DesctuctionComponents = ({nome, Sobrenome, Telefone, tags}: Props) =>  {
  return (
    <div>
        <h1> Desestruturação  do componente </h1>
        <p> {nome} </p>
        <p> {Sobrenome} </p>
        <p> {Telefone} </p>
        <div> {tags.map(tags => (
          <p>#{tags}</p>
        ))}
        </div>
      
    </div>
  )
}

export default DesctuctionComponents 
