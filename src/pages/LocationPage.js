// https://rickandmortyapi.com/api/location

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  ListGroup,
  Row,
} from 'react-bootstrap';

export function LocationPage() {
  const [location, setLocation] = useState(null);
  const [textEntered, setTextEntered] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  // https://rickandmortyapi.com/api/location

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/location/?name=${searchTerm}`
    )
      .then((response) => response.json())
      .then((data) => setLocation(data.results));
  }, [searchTerm]);
  console.log(location);
  const handleInput = function (event) {
    // Pour récupérer le texte entré par l'utilisateur => event.target.value
    const value = event.target.value;

    setTextEntered(value);
  };

  const searchLocationHandler = function () {
    setSearchTerm(textEntered);
  };

  return (
    <Container>
      <InputGroup className="mb-5 mt-4">
        <Form.Control
          placeholder="Search character..."
          aria-label="Search character..."
          onChange={handleInput}
        />
        <Button
          onClick={searchLocationHandler}
          variant="outline-secondary">
          Search
        </Button>
      </InputGroup>

      {/* Cards */}
      <Row className="g-3">
        {location?.map((location, index) => (
          <Col key={index}>
            <Card
              style={{
                width: '12rem',
              }}>
              <Card.Img
                variant="top"
                src="https://i.ytimg.com/vi/lF4pO3F5ysc/maxresdefault.jpg"
              />

              <Card.Body>
                <Card.Title>{location.name}</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    Type : {location.type}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Dimension : {location.dimension}
                  </ListGroup.Item>
                  <ListGroup.Item>
                    Residents Number :{' '}
                    {location.residents.length}
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
