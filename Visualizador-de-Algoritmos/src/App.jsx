import { useState, useEffect } from 'react'
import Visuales from './componentes/Visuales'
import Controles from './componentes/Controles'
import { bubbleSort } from './algoritmos/Sorteo'
import './App.css'

function App() {
  const [array, setArray] = useState([]);
  const TAM_ARRAY = 30; // En el futuro será determinado por el usuario

  
  const generarArray = () => {
    const nArray = [];
    for(let i = 0; i<TAM_ARRAY; i++){
      nArray.push(Math.floor(Math.random() * 390) + 10);
    }
    setArray(nArray);
  }

  const controlBubbleSort = async () => {
    await bubbleSort(array, setArray, );
  }

  useEffect(() => {
    generarArray();
    console.log("PRELIMINAR BUILD, WE'RE WORKING HARD HERE");},
     []) // TAM_ARRAY deberá ser el segundo argumento en el futuro ^^

  return (
    <div className="app-container">
      <h1>Visualizador de Algoritmos</h1>
      <Controles onGenerate={generarArray} onBubbleSort={controlBubbleSort} />
      <Visuales array={array} />
    </div>
  )
}

export default App