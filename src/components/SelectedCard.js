import React from 'react'
import { NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const SelectedCard = ({selected}) => {
  return (
    <Card className="card mb-0" style={{"max-width": "350px"}}>
        <Row className="g-0">
            <Col md={4}>
                <div className="img">
                    <img src={selected.imageName} alt={selected.name} />
                    <NavLink to={`/products/${selected.name.toLowerCase().replace(/ /gi, "-")}`} className="btn-theme d-xl-none">QUICK VIEW</NavLink>
                </div>
            </Col>
            
            <Col md={8}>
                <div className="card-body">
                    <p className="card-text">{selected.text}</p>
                    <h5 className="card-title">{selected.name}</h5>
                    <p className="card-rating">
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                        <i className="fa-sharp fa-solid fa-star"></i>
                    </p>
                    <p className="card-price">{selected.price}</p>
                </div>
            </Col>
        </Row>
    </Card>
            
  )
}

export default SelectedCard