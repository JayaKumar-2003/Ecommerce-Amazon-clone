import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../index.css';
function Product(props) {
        const {product} = props;
        return (
            <Card  key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.images} className='card-img-top' alt={product.name} />
            </Link>
            <Card.Body>
              <Link to={`/product/${product.slug}`}>
                <Card.Title>{product.name}</Card.Title>
              </Link>
                <Card.Text>${product.price}</Card.Text>
              <Button>Add to cart</Button>
            </Card.Body>
          </Card>
        );
}
export default Product;