import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import {
  Button,
  Container,
  Form,
  InputGroup,
  Row,
} from 'react-bootstrap';
import Card from '../components/Card';

function HomePage() {
  const [characters, setCharacters] = useState(null);
  const [textEntered, setTextEntered] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  // https://rickandmortyapi.com/api/character

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?name=${searchTerm}`
    )
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, [searchTerm]);

  const handleInput = function (event) {
    // Pour récupérer le texte entré par l'utilisateur => event.target.value
    const value = event.target.value;

    setTextEntered(value);
  };

  const searchCharacterHandler = function () {
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
          onClick={searchCharacterHandler}
          variant="outline-secondary">
          Search
        </Button>
      </InputGroup>

      {/* Cards */}
      <Row className="g-3">
        {characters?.map((character, index) => (
          <Card key={index} character={character} />
        ))}
      </Row>
    </Container>
  );
}

export default HomePage;
