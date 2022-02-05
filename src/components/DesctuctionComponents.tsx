// aula 5 - desestruturando componentes com props


import React from 'react';

interface Props {
  nome: string;
  Sobrenome: string;
  Telefone: number;
  tags: string[];

  // aula 8 Enum

  category: Category;

}

export enum Category {
  JS ="Javascript",
  TS ="Typescript",
  P="Python",
}



const  DesctuctionComponents = ({nome, Sobrenome, Telefone, tags, category }: Props) =>  {
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

        <h3> A categoria é {category}</h3>
      
    </div>
  )
}

export default DesctuctionComponents 
