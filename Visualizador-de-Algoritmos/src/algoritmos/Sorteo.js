const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Argumentos para BubbleSort
 * @param {Array} array - El arreglo actual de números
 * @param {Function} setArray - La función de React para modificar el Array en pantalla
 * @param {number} tiempo - Tiempo de espera en milisegundos entre cambios
 * @param {Function} setColores - Funcion de React para modificar los colores de cada barra en pantalla
 */

export const bubbleSort = async (array, setArray, tiempo = 50, setColores) => {
    let nArray = [...array];
    let largo = nArray.length;
    let nColores = new Array(largo).fill('#4caf50');

    for(let i = 0; i<largo-1; i++){
        for(let j = 0; j<largo-1-i; j++){

            nColores[j] = '#ff4d4d';
            nColores[j+1] = '#ff4d4d';

            if(setColores){
                setColores([...nColores])
            }
            await(sleep(tiempo))  //No funciona muy bien con bajo retraso, pero ya fue mucha codificación por el día yo creo ono hmmm

            if(nArray[j]>nArray[j+1]){
                let temp = nArray[j];
                nArray[j] = nArray[j+1];
                nArray[j+1] = temp;
                setArray([...nArray]);
                await(sleep(tiempo));
            }

            nColores[j] = '#4caf50';
            nColores[j+1] = '#4caf50';
            setColores([...nColores]);
        }
    }
    
}

export const selectionSort = async (array, setArray, tiempo = 50, setColores) =>{
    
    let nArray = [...array];
    let largo = nArray.length;
    let nColores = new Array(largo).fill('#4caf50');
    
    {/* En el SelectionSort buscamos al más pequeño y lo colocamos al inicio*/}
    for(let i = 0; i<largo-1; i++){
        let indPeque = i;
        
        for(let j = i+1; j<largo; j++){

            {/*Lógica de Colores*/}
            nColores[indPeque] = '#4c51af';
            nColores[j] = '#ff4d4d';
            if(setColores){
                setColores([...nColores]);
            }
            await(sleep(tiempo))

            if(nArray[indPeque]>nArray[j]){
                nColores[indPeque] = '#4caf50';
                indPeque = j;
                nColores[j] = '#4c51af';
                setColores([...nColores]);
            }
        
            nColores[indPeque] = '#4caf50';
            nColores[j] = '#4caf50';
            setColores([...nColores]);
        }

        
        if(indPeque!=i){
            let temp = nArray[i];
            nArray[i] = nArray[indPeque];
            nArray[indPeque] = temp;
        }

        
        setArray([...nArray]);
       
    }

}