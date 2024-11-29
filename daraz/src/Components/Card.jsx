import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = ({product}) => {
  return (
    <Card style={{ width: '18rem', }}>
      <Card.Body>
        <Card.Img src={product.image} height={"200px"} width={"100px"}/>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description.slice(0,30)}
        </Card.Text>
        <Button variant="varient">{product.price}</Button>
      </Card.Body>
    </Card>
  )
}

export default Cards