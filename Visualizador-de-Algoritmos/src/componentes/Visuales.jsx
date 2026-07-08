import React from 'react'

function Visuales({array}) {
    console.log("Arreglo recibido en el Visualizador:", array)
    return (
        <div className="visuales-container">
        {array.map((valor, pos) => (
            <div
            key={pos}
            className="barra-array"
            style={{
                height: `${valor}px`,
                width: '15px',
                backgroundColor: '#1a941a',
                margin: '0 2px',
                display: 'inline-block'
            }}
            ></div>
        ))}
        </div>
    )
}

export default Visuales