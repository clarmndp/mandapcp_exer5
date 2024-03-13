import needle from 'needle';

needle.post(    
    'http://localhost:3000/submit-data',
    {name: 'Harry Potter and the Philosopher’s Stone',
    isbn: '978-0-7475-3269-9',
    author: 'JK Rowling',
    year: 1998},
    (err, res) => {
      console.log(res.body);   // prints the server’s response “Received a POST request.”
});

//isbn-author
needle.get('http://localhost:3000/find-by-isbn-author?isbn=978-0-7475-3269-9&author=JK+Rowling', (err, res) =>{
    console.log(res.isbn);
});

//author
needle.get('http://localhost:3000/find-by-author?author=JK+Rowling', (err, res) =>{
   console.log(res.body.author);
});