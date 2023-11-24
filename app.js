const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {

  const htmlPath = path.join(__dirname, 'rednodo-gappi.html');
  

  res.sendFile(htmlPath);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
