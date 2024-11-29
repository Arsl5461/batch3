import React, { useState, useEffect } from 'react';
import Carousal from "../Components/Carousal";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {
  const [cards, setCards] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Carousal />
      <Row>
        {cards.map((card) => (
          <Col key={card.id} sm={12} md={6} lg={3} className="mt-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={card.image} height={"200px"} width={"100px"}/>
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>
                  {card.description.length > 100 ? `${card.description.slice(0, 100)}...` : card.description}
                </Card.Text>
                <Button variant="primary">Price</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Home;
