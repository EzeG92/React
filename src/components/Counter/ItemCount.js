import './ItemCount.css'
import {useState} from 'react';

const Counter = ({stock}) => {

    const [counter, setCounter] = useState(1)
    
    const sumar = () => counter <= stock -1 ? setCounter(counter + 1) : alert('No hay stock suficiente')

    const restar = () => counter > 0 ? setCounter(counter - 1) : alert('No se puede introducir valor negativo')
    
    return (

    <div className = "contador">
        <h2>AGREGAR PRODUCTOS</h2>
        <div className="botones">
            <button className="boton2" onClick={restar}>-</button>
            <h1>{counter}</h1>
            <button className="boton1" onClick={sumar}>+</button>
        </div>
        <h3> Stock disponible {stock} </h3>
    </div>

)
}

export default Counter;