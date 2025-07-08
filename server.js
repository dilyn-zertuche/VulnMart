// Basic Express server for EthicalPlayground
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Example API endpoint (intentionally simple for future vulnerabilities)
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working. Ready for vulnerabilities!' });
});

// Serve React static files in production
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
