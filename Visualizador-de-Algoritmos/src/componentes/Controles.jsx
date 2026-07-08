import React from 'react'

function Controles({onGenerate}){
    return (
        <div className="panel-controles">
        <button onClick={onGenerate}>Generar Nuevo Arreglo</button>
        </div>
    )
}

export default Controles