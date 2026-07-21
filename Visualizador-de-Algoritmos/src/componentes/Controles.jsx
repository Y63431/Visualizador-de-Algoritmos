import React from 'react'

function Controles({onGenerate, onBubbleSort, onSelectionSort, onInsertionSort, size, setSize, time, setTime, mostrarCode, setMostrarCode, algoritmoSeleccionado, setAlgoritmo}){
    return ( 
        <div className="panel-controles">
            {/*BOTONES*/} 
            <div className='grupo-botones' style={{ marginBottom: '20px' }}>
                <button onClick={onGenerate} style={{ marginRight: '8px' }}>Generar Nuevo Arreglo</button>
                <button onClick={()=>{setAlgoritmo('bubble'); onBubbleSort();}} style={{ marginRight: '8px' }} >Ordenar con BubbleSort</button>
                <button onClick={()=>{setAlgoritmo('selection'); onSelectionSort()}} style={{ marginRight: '8px' }} >Ordenar con SelectionSort</button>
                <button onClick={()=>{setAlgoritmo('insertion'); onInsertionSort()}} style={{marginRight: '8px'}} >Ordenar con InsertionSort</button>
                <button onClick={()=>{setMostrarCode(!mostrarCode); console.log('mostrar: ', mostrarCode)}} 
                    style={{backgroundColor: mostrarCode ? '#ffc107' : '#17a2b8', color: '#000', fontWeight: 'bold'}}>
                    {mostrarCode ? 'Ocultar Código </>' : 'Ver Código </>'}
                    </button>
            </div>

            {/*SLIDERS*/} 
            <div className="grupo-sliders" style={{display: 'flex', justifyContent: 'center', gap: '30px' }}>
                {/*Slider de tamaño*/}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <label htmlFor="size-slider" style={{ marginBottom: '5px' }}>
                        Tamaño de Arreglo: <strong>{size}</strong>
                    </label>
                    <input
                        id="size-slider"
                        type="range"
                        min="10"
                        max="100"
                        value={size}
                        onChange={(e) => setSize(Number(e.target.value))}>
                        </input>
                </div>

                {/*Slider de tiempo/velocidad*/}
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <label htmlFor='time_slider' style={{ marginBottom: '5px'}}>
                        Retraso: <strong>{time} ms</strong>
                    </label>
                    <input
                        id="speed-slider"
                        type="range"
                        min="5"
                        max="200"
                        value={time}
                        onChange={(e) => setTime(Number(e.target.value))}>
                    </input>
                </div>

            </div>



        </div>
    )
}

export default Controles