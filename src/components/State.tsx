// aula 6 - Hook useState


import React, {ChangeEvent, useState} from 'react';

const  State = () =>  {
  const [text, setText] = useState('testando');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  return (
    <div>
        <h1> Meu {text}  </h1>
        <input type="text" onChange={handleChange} />
      
    </div>
  )
}

export default State 
