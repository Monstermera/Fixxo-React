import React from 'react'
import { NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { currencyFormatter } from '../../utilities/currencyFormatter';
import { useShoppingCart } from '../../context/ShoppingCartContext'


const SelectedCard = ({selectedItem}) => {
    const { incrementQuantity } = useShoppingCart()

  return (
    <Card className="card mb-0" style={{"maxWidth": "350px"}}>
        <Row className="g-0">
            <Col md={4}>
                <div className="img">
                    <img src={selectedItem.imageName} alt={selectedItem.name} />
                    <div className="card-menu">
                    {/* <button className="menu-link" onClick={() => incrementQuantity({articleNumber: selectedItem.articleNumber, product: selectedItem})}><i className="fa-light fa-bag-shopping"></i></button> */}
                </div>
                    <NavLink to={`/products/${selectedItem.articleNumber}`} className="btn-theme d-xl-none">QUICK VIEW</NavLink>
                </div>
            </Col>
            
            <Col md={8}>
                <div className="card-body ms-2">
                    <p className="card-text">{selectedItem.text}</p>
                    <h5 className="card-title">{selectedItem.name}</h5>
                    <p className="card-rating">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </p>
                    <p className="card-price">{currencyFormatter(selectedItem.price)}</p>
                </div>
            </Col>
        </Row>
    </Card>
            
  )
}

export default SelectedCard