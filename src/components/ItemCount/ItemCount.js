import './ItemCount.css'

const ItemCount = ({setCounter, counter}) => {

    const sumar = () => counter <= 10 -1 ? setCounter( counter + 1) : alert('No hay stock suficiente')
    const restar = () => counter > 0 ? setCounter(counter - 1) : alert('No se puede introducir valor negativo')
    
    return (

    <div className = "contador">
        <div className="botones">
            <button className="boton2" onClick={restar}>-</button>
            <h1>{counter}</h1>
            <button className="boton1" onClick={sumar}>+</button>
        </div>
    </div>

)
}

export default ItemCount;