import React, { createContext } from 'react';

import FirstComponents from './components/FirstComponents';

// aula 5 - desestruturando componentes com props

import SecondComponents from './components/SecondComponents';
import DesctuctionComponents, {Category} from './components/DesctuctionComponents';

// aula 6 - Hook useState

import State from './components/State';
import Context from './components/Context';

interface IAppContext {
  language: string;
  Framework: string;
  Project: number;
}

export const AppContext = createContext<IAppContext | null>(null)


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

   
   const contextValue: IAppContext = {
     language:"Java",
     Framework: "react",
     Project: 3,

   };


  return (
    <> 
      <AppContext.Provider value={contextValue}>
      <h1> Projeto React TS</h1>

      <p> Nome: {name}</p>

      <p> Idade: {age}</p>

      <p> Raça: {raça}</p>

      {isStudent && (
        <p> ele é estudante </p>
      )}

        <div>
          <FirstComponents />
          <SecondComponents name="Segundo!"/>
        <p> {userName(name)}</p>
        <p> {userAge(age)}</p>

        <DesctuctionComponents 

        nome="Jardel"
        Sobrenome='Cruz'
        Telefone={31982932760}
        tags ={["Ts" , "Js"]}  
         
        // aula 8 Enum

        category={Category.P}
        
        />

        <State />

        <Context />

          
        </div>
      
        </AppContext.Provider>
    
    </>
    
  );
}

export default App;
