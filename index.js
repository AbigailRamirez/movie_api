const { Console } = require('console');
const express = require('express'),
    morgan = require('morgan');
const app = express();

//Top 10 movies JSON
let topMovies = [
    {
      title: 'Castle in the Sky',
      director: 'Hayao Miyazaki'
    },
    {
      title: 'My Neighbor Totoro',
      director: 'Hayao Miyazaki'
    },
    {
      title: 'Kiki\'s Delivery Service',
      director: 'Hayao Miyazaki'
      },
     {
      title: 'Porco Rosso',
      director: 'Hayao Miyazaki'
      },
      {
      title: 'Princess Mononoke',
      director: 'Hayao Miyazaki'
      },
       {
      title: 'Spirited Away',
      director: 'Hayao Miyazaki'
      },
         {
      title: 'Howl\'s Moving Castle',
      director: 'Hayao Miyazaki'
      },
      {
      title: 'Ponyo',
      director: 'Hayao Miyazaki'
      },
      {
      title: 'Baby Driver',
      director: 'Edgar Wright'
      },
      {
      title: 'Shrek',
      director: 'Vicky Jenson'
      }    
];


app.use(express.static('public'));
app.use(morgan('common'));

//GET requests

app.get('/', (req, res) => {
    res.send('Welcome to my movie club!');
  });
  
app.get('/documentation', (req, res) => {
    res.sendFile('public/documentation.html', { root: __dirname });
  });
  
  //top movies page
app.get('/movies', (req, res) => {
    console.log('Top movies request')
    res.json(topMovies);
  });
  
  //error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
  
  // listen for requests
app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
  });

