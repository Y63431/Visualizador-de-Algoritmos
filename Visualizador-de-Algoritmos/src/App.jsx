import { useState, useEffect } from 'react'
import Visuales from './componentes/Visuales'
import Controles from './componentes/Controles'
import { bubbleSort } from './algoritmos/Sorteo'
import './App.css'

function App() {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState([50]); // ES EL FUTURO Y AHORA ESTÁ DETERMINADO POR EL USUARIO JIJA
  const [time, setTime] = useState([100]);
  
  const generarArray = () => {
    const nArray = [];
    for(let i = 0; i<size; i++){
      nArray.push(Math.floor(Math.random() * 390) + 10);
    }
    setArray(nArray);
  }

  const controlBubbleSort = async () => {
    await bubbleSort(array, setArray, time);
  }

  useEffect(() => {
    generarArray();
    console.log("PRELIMINAR BUILD, WE'RE WORKING HARD HERE");},
     [size]) 

  return (
    <div className="app-container">
      <h1>Visualizador de Algoritmos</h1>
      <Controles 
        onGenerate={generarArray} 
        onBubbleSort={controlBubbleSort}
        size={size}
        setSize={setSize}
        time={time}
        setTime={setTime} 
      />
      <Visuales array={array} />
    </div>
  )
}

export default App