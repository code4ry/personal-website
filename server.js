const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = process.env.port || 3000;
const { connectToDb, getDb } = require('./db.js');

app.use(express.static('public'));
app.use(express.json());

connectToDb((err) => {
	if (!err){
			db = getDb();
			console.log("Successful database connection!")
	}
	else {
			console.log(err);
	}
})

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/projects', (req, res) => {
	let projects = [];
	db.collection('projects')
		.find()
		.forEach(project => projects.push(project))
		.then(() => {
			res.status(200).json(projects);
		})
		.catch(err => {
			res.status(500).json({error: err});
		}); 
});



app.listen(port, () => {
	console.log('Listening on PORT: ', port);
});