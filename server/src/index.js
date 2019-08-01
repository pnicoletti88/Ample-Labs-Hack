const express = require('express');
const path = require('path');


const app = express();

app.get('/', async (req, res) => res.status(200).send('sucess'));

app.listen(8080, () => console.log('Server started. Press Ctrl+C to quit'));
