import React from 'react'

function Controles({onGenerate, onBubbleSort}){
    return (
        <div className="panel-controles">
        <button onClick={onGenerate} style={{ marginRight: '10px' }}>Generar Nuevo Arreglo</button>
        <button onClick={onBubbleSort}style={{ backgroundColor: '#28a745' }}
        >Ordenar con BubbleSort</button>
        </div>
    )
}

export default Controles