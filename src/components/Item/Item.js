import './Item.css';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

const Item = ({title, price, image}) => {

    return (
    <div className="item">
        <img width={'280px'} src={'../img/' + image} alt={title} />
        <h2>{title}</h2>
        <h3>${price}</h3>
        <Button variant="primary">
                <Badge bg="secondary" className='itemBoton'>Ver detalle</Badge>
        </Button>  
    </div>

    );

};

export default Item;
