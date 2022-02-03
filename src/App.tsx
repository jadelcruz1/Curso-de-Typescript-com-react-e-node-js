import React from 'react';


function App() {

  // - 1  variaveis

  const name: string ="Jardel";

  const age: number = 37;

  const raça: string = "Negra";

   const isStudent: Boolean = true;

   const userName = (name: string): string =>  {
     return (
      ` Olá ${name}, você aprendeu Ts!`

     )      
   };

   const userAge = (age: number) => {
     return (
       `Sua idade é ${age}`

     );
   };


  return (
    <>
      <h1> Projeto React TS</h1>

      <p> Nome: {name}</p>

      <p> Idade: {age}</p>

      <p> Raça: {raça}</p>

      {isStudent && (
        <p> ele é estudante </p>
      )}

        <div>
        <p> {userName(name)}</p>
        <p> {userAge(age)}</p>

          
        </div>
      
      
    
    </>
    
  );
}

export default App;
