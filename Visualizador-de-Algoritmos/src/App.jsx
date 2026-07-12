import { useState, useEffect } from 'react'
import Visuales from './componentes/Visuales'
import Controles from './componentes/Controles'
import { bubbleSort, selectionSort } from './algoritmos/Sorteo'
import './App.css'

function App() {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState([50]); // ES EL FUTURO Y AHORA ESTÁ DETERMINADO POR EL USUARIO JIJA
  const [time, setTime] = useState([100]);
  const [colores, setColores] = useState([]); //Si sigue dando problemas podemos inicializarlo con new Array...

  const resetColores = (largo) =>{
    setColores(new Array(largo).fill('#4caf50'));
  }

  const generarArray = () => {
    const nArray = [];
    for(let i = 0; i<size; i++){
      nArray.push(Math.floor(Math.random() * 390) + 10);
    }
    setArray(nArray);
    resetColores(size);
  }

  const controlBubbleSort = async () => {
    await bubbleSort(array, setArray, time, setColores);
    resetColores(size);
  }

  const controlSelectionSort = async () => {
    await selectionSort(array, setArray, time, setColores);
    resetColores(size);
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
        onSelectionSort={controlSelectionSort}
        size={size}
        setSize={setSize}
        time={time}
        setTime={setTime} 
      />
      <Visuales array={array} colores={colores}/>
    </div>
  )
}

export default App