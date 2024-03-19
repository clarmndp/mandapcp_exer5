import express from 'express';
import { appendFileSync } from 'node:fs';

// instantiate the server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//#2
app.get('/find-by-isbn-author', (req, res) => {
  fs.readFile('books.txt', "utf8", (err, data) => {
    if(err) throw err;
    const lines = data.split('\n');
    const results = [];

    if(lineElement[1] == req.query.isbn) {
      console.log('Found it:' + line);
      results.push(line);
    }
    lines.forEach(line.split(','));
    if(lineElement[2] === req.query.author) {
      console.log('Found it:' + line);
      results.push(line);
    }
    
});
  res.json(results);
});

//#3
app.get('/find-by-author', (req, res) => {
  fs.readFile('books.txt', "utf8", (err, data) => {
    if(err) throw err;
    const lines = data.split('\n');
    const results = [];

    lines.forEach(line.split(','));
    if(lineElement[2] === req.query.author) {
      console.log('Found it:' + line);
      results.push(line);
    }
});
  res.json(results);
});

app.post('/find-by-author', (req, res) => {
  res.send(req.body.results);
});

//file append in books.txt
app.post('/add-book', (req, res) => {
  if(req.body.name != '' & req.body.isbn != '' & req.body.author != ''){
    appendFileSync('books.txt', req.body.name + ',' + req.body.isbn + ',' + req.body.author + ',' + req.body.year + ',' + "\n");
    return {success: true};
  }else{
    return {success: false};
  }
});

// this tells our server to listen to the port 3000
app.listen(3000, () => { console.log('Server started at port 3000')} );