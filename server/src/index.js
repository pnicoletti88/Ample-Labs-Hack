const express = require('express');
const path = require('path');
const ssr = require('./ssr');


const app = express();

app.get('/', async (req, res) => {
  console.log('request landed');
  const { html, ttRenderMs } = await ssr(`file://${path.join(__dirname, '../public/map.html')}`);
  // Add Server-Timing! See https://w3c.github.io/server-timing/.
  res.set('Server-Timing', `Prerender;dur=${ttRenderMs};desc="Headless render time (ms)"`);
  console.log(html);
  return res.status(200).send(html); // Serve prerendered page as response.
});

app.listen(8080, () => console.log('Server started. Press Ctrl+C to quit'));
