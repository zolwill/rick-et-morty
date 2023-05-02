import {
  Col,
  ListGroup,
  Card as Container,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Card(props) {
  return (
    <Col>
      <Container
        style={{
          width: '12rem',
        }}>
        <Container.Img
          variant="top"
          src={props.character.image}
        />

        <Container.Body>
          <Container.Title className="text-center">
            {props.character.name}
          </Container.Title>

          <ListGroup variant="flush">
            <ListGroup.Item>
              Gender : {props.character.gender}
            </ListGroup.Item>
            <ListGroup.Item>
              Status : {props.character.status}
            </ListGroup.Item>
            <ListGroup.Item>
              Species : {props.character.species}
            </ListGroup.Item>
          </ListGroup>

          <Button
            // variant="outline-secondary"
            variant="info"
            className="d-block mx-auto mt-3">
            <Link to={`/detail/${props.character.id}`} className="text-white text-decoration-none">
              See Details
            </Link>
          </Button>
        </Container.Body>
      </Container>
    </Col>
  );
}
