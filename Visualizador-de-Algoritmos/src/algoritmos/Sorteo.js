const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Argumentos para BubbleSort
 * @param {Array} array - El arreglo actual de números
 * @param {Function} setArray - La función de React para modificar el Array en pantalla
 * @param {number} tiempo - Tiempo de espera en milisegundos entre cambios
 */

export const bubbleSort = async (array, setArray, tiempo = 50, setIndicesComp) => {
    let nArray = [...array];
    let largo = nArray.length;

    for(let i = 0; i<largo-1; i++){
        for(let j = 0; j<largo-1-i; j++){

            if(setIndicesComp){
                setIndicesComp([j, j+1])
            }
            await(sleep(tiempo))  //No funciona muy bien con bajo retraso, pero ya fue mucha codificación por el día yo creo ono hmmm

            if(nArray[j]>nArray[j+1]){
                let temp = nArray[j];
                nArray[j] = nArray[j+1];
                nArray[j+1] = temp;

                setArray([...nArray]);
                await(sleep(tiempo));
            }

        }
    }
    
}