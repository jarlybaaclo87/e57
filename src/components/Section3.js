import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Section3 = () => {
  return (
    <div>
      <h1 className='ms-5'>Third Section</h1>
      <div className="d-flex w-100 mx-5 mb-5">
        <Col md={6}>
          <Card className="mx-2">
            <Card.Img variant="top" src="./images/com.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="mx-2">
            <Card.Img variant="top" src="./images/com.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default Section3;
