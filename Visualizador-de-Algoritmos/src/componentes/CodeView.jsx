import React from 'react'

/*Diccionario con algoritmos*/

const CODIGO_ALGORITMOS = {
    bubble: `function bubbleSort(array) {
        let largo = array.length;
        for (let i = 0; i < largo - 1; i++) {
            for (let j = 0; j < largo - i - 1; j++) {
                if (array[j] > array[j + 1]) {
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    }`,
    selection: `function selectionSort(array) {
        let largo = array.length;
        for(let i = 0; i<largo-1; i++){
            let indPeque = i;
            for(j = i+1; j<largo; j++){
                if(array[j]<array[indPeque]){
                    indPeque = j;
                }
            }
            if(indPeque!=i){
                let temp = array[i];
                array[i] = array[indPeque];
                array[indPeque] = temp;
            }
        }
    }`,
    insertion: `function insertionSort(array) {
        let largo = array.length;
        for (let i = 1; i < n; i++) {
            let insertar = array[i];
            let j = i - 1;
            while (j >= 0 && array[j] > insertar) {
                array[j + 1] = array[j];
                j = j - 1;
            }
            array[j + 1] = insertar;
        }
    }`



}

function CodeView({algoritmo = bubble}){
    const texto = CODIGO_ALGORITMOS[algoritmo] || CODIGO_ALGORITMOS.bubble;

    return(
        <div
            className='panel-codigo'
            style={{
                flex: '1',
                maxWidth: '450px',
                backgroundColor: '#1e1e1e',
                color: '#d4d4d4',
                padding: '16px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                textAlign: 'left',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
            }}
        >
            <h3 style={{ marginTop: 0, color: '#61dafb', borderBottom: '1px solid #444', paddingBottom: '8px' }}>
            Código ({algoritmo.toUpperCase()})
            </h3>
            <pre style={{ margin: 0, fontSize: '0.85rem', lineHeight: '1.5', overflowX: 'auto' }}>
                <code>{texto}</code>
            </pre>
        </div>






    )
}

export default CodeView