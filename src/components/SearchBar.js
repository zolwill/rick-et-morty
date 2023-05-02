import { useState } from 'react';
import {
  Button,
  Form,
  InputGroup,
} from 'react-bootstrap';

export default function SearchBar(
  props
) {
  const [textEntered, setTextEntered] =
    useState('');

  const handleInput = function (event) {
    // Pour récupérer le texte entré par l'utilisateur => event.target.value
    const value = event.target.value;

    setTextEntered(value);
  };

  return (
    <InputGroup className="mb-5 mt-4">
      <Form.Control
        placeholder="Search character..."
        aria-label="Search character..."
        onChange={handleInput}
      />
      <Button
        onClick={() =>
          props.searchCharacterHandler(
            textEntered
          )
        }
        variant="outline-secondary">
        Search
      </Button>
    </InputGroup>
  );
}
