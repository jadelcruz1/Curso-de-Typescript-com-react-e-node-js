import React, { useContext } from 'react';

import { AppContext } from "../App";


const  Context = () => {

  const details = useContext(AppContext)

  return (
    <>
     {details && (
       <div>
         <h1>Linguagem: {details.language}</h1>
         <p> Framework: {details.Framework}</p>
         <p> Qtde: {details.Project}</p>
       </div>
     )}      
    </>
  )
}

export default Context 
