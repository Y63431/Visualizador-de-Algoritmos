import React from 'react'

function Controles({onGenerate, onBubbleSort, onSelectionSort, onInsertionSort, size, setSize, time, setTime}){
    return ( 
        <div className="panel-controles">
            {/*BOTONES*/} 
            <div className='grupo-botones' style={{ marginBottom: '20px' }}>
                <button onClick={onGenerate} style={{ marginRight: '10px' }}>Generar Nuevo Arreglo</button>
                <button onClick={onBubbleSort} style={{ marginRight: '10px' }} >Ordenar con BubbleSort</button>
                <button onClick={onSelectionSort} style={{ marginRight: '10px' }} >Ordenar con SelectionSort</button>
                <button onClick={onInsertionSort} style={{marginRight: '10px'}} >Ordenar con InsertionSort</button>
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