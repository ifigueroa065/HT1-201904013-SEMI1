const express = require('express');
const app = express();
const port = 3000;

// Endpoint 1: Verificación de estado
app.get('/check', (req, res) => {
  res.status(200).send('OK');
});

// Endpoint 2: Retornar objeto JSON
app.get('/', (req, res) => {
  const response = {
    "Instancia": "Instancia #1 - API #1",
    "Curso": "Seminario de Sistemas 1",
    "Estudiante": "Estudiante - 201904013"
  };
  res.json(response);
});

app.listen(port, () => {
  console.log(`API 1 escuchando en http://localhost:${port}`);
});
