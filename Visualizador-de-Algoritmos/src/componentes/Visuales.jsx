import React from 'react'

function Visuales({array, colores}) {
    return (
        <div className="visuales-container">
        {array.map((valor, pos) => {

            return (
                <div
                    key={pos}
                    className="barra-array"
                    style={{
                        height: `${valor}px`,
                        width: '15px',
                        backgroundColor: colores[pos] || '#4caf50',
                        margin: '0 2px',
                        display: 'inline-block',
                        transition: 'background-color 0.05s ease'
                    }}>
                </div>
            )
        })}
        </div>
    )
}

export default Visuales