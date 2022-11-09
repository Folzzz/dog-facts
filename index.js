// const express = require('express');
import express from 'express';
const app = express();

// const morgan = require('morgan');
import morgan from 'morgan';
import fetch from 'node-fetch';

// view engine
app.set('view engine', 'ejs');
// static files
app.use(express.static('public'));
// logging
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Homepage'});
    console.log('Welcome');
})

app.get('/dogfact', async (req, res) => {
    // teachers way
    // const fetchApi = await fetch('https://whispering-tor-71951.herokuapp.com/dog-facts');
    // const dogFactResponse = await fetchApi.json();
    // res.json(dogFactResponse);

    // my way fetch api data
    fetch('https://whispering-tor-71951.herokuapp.com/dog-facts')
    .then(response => response.json())
    .then(data => {
        console.log(data.fact);
        res.json(data.fact);
        // res.render('dogfact', { title: 'dog json', dogf: data.fact });
    })
    
})

app.get('/dogimage', async (req, res) => {

    // my way fetch api data
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        res.json(data);
    })
    .catch(err => console.log(err))
})

app.listen(3000);