const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.port || 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
	console.log('Listening on PORT: ', port);
});