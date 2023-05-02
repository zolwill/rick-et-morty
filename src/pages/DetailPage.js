import React, { useEffect, useState } from 'react';
import {
  Col,
  Container,
  Image,
  ListGroup,
  Row,
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function DetailPage() {
  const [character, setCharacter] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  }, []);

  return (
    <Container>
      <Row className="justify-center">
        <Col>
          <Image
            className="d-block mx-auto"
            src={character?.image}
            alt={character?.name}
          />
          <h2 className="text-center mt-1 fs-3">
            {character?.name}
          </h2>
        </Col>

        <Col>
          <ListGroup>
            <ListGroup.Item>
              <p>Gender : {character?.gender} </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <p>Status : {character?.status} </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <p>Species : {character?.species} </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <p>Location : {character?.location.name} </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <p>Origin From : {character?.origin.name} </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <p>
                Episode count : {character?.episode.length}
              </p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
