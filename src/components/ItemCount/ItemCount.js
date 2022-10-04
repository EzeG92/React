import './ItemCount.css'
import Swal from 'sweetalert2'

const ItemCount = ({setCounter, counter, stock}) => {

    const sumar = () => counter <= stock - 1 ? setCounter( counter + 1) : Swal.fire('No hay stock suficiente')
    const restar = () => counter > 1 ? setCounter(counter - 1) : Swal.fire('No puede agregar menos de una unidad')
    
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