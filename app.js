const express = require('express');
const app = express();
const os = require('os');

app.get('/', (req, res) => {
  res.json({
    message: "Welcome to Particle41 DevOps Challenge",
    hostname: os.hostname()
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
