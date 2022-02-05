// aula 4 - desestruturando componentes com props


import React from 'react';

interface Props {
  name: string

}



const  SecondComponents = (props: Props) =>  {
  return (
    <div>
        <h1> Meu segundo compenente se chama {props.name}! </h1>
      
    </div>
  )
}

export default SecondComponents 
