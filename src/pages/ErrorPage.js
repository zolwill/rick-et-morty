import React, { useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setTimer(Math.max(0, timer - 1));
    }, 1000);

    if (!timer) {
      navigate('/');
      // navigate(-1) Retour a la page précédente
    }
  }, [timer]);

  return (
    <Stack className="d-grid justify-content-center">
      <h2 style={{ fontSize: '10rem' }}>💥 💥</h2>
      <h1 className="text-uppercase text-danger text-center">
        page not found
      </h1>

      <p>You will be redirect to the home page 🏠</p>
      <h3 className="text-uppercase text-danger text-center">
        {timer} secondes
      </h3>
    </Stack>
  );
}
