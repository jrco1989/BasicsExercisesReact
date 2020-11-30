import React from "https://unpkg.com/react@17/umd/react.development.js"

export default function Contador (){
    /*let contadorState = useState(23) //recordar, devuelve un array de dos pospiciones
    let contadorValue = contadorState[0]
    let actualizador = contadorState[1]*/

    //ingresando un valor directo 
    const [contadorValue, actualizador] = useState(0)  
    const [veces, actualizadorVeces] = useState(0)  
    // con objeto 
    //const [contadorValue, actualizador] = useState({value : 0})  
    return (
        <div>
        <span>{contadorValue}</span>
        <button onClick = {()=>{
            actualizador(contadorValue + 1)
            actualizadorVeces(veces +1)
            }} >más +</button>
         <button onClick ={ ()=>{
            actualizador(contadorValue - 1)
            actualizadorVeces(veces +1)
         }}>menos -</button>
         <span>{veces}</span>
        </div>
    )
}