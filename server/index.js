#!/usr/bin/env node
const express = require('express');
const  sudoku = require('sudoku-c');
const app = express();


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true); //
  next();
});


app.get('/suduko', function (request,response) {
	// later expansion into a full game
  let puzzle = {} ; //sudoku.makepuzzle();
  let answer = sudoku.generate();

  let json = {
    'answer': answer,
    'puzzle': puzzle
  };
  response.json(json);
});

app.get('/',function (request,response) {


	response.redirect('/suduko');

});

app.get('*', function(request,response){
	response.redirect('/suduko');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
