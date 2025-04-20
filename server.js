const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/compute', (req, res) => {
  console.log('Form data received:', req.body);
  res.send('Form submission received!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});