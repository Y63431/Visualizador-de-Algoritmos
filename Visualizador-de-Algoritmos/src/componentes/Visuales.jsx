import React from 'react'

function Visuales({array, indicesComp = []}) {
    return (
        <div className="visuales-container">
        {array.map((valor, pos) => {
            const estaComparando = indicesComp[1] == pos;
            const esMinimo = indicesComp[0] == pos;

            return (
                <div
                    key={pos}
                    className="barra-array"
                    style={{
                        height: `${valor}px`,
                        width: '15px',
                        backgroundColor: estaComparando ? '#ff4d4d' : esMinimo ? '#4c51af' : '#4caf50',
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