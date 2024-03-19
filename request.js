import needle from 'needle';

needle.post(    
    'http://localhost:3000/add-book',
    {name: 'Harry Potter and the Philosopher’s Stone',
    isbn: '978-0-7475-3269-9',
    author: 'JK Rowling',
    year: 1998},
    (err, res) => {
      console.log(res.body);
});

//isbn-author
needle.get('http://localhost:3000/find-by-isbn-author?isbn=978-0-7475-3269-9&author=JK%20Rowling', (err, res) =>{
    console.log(res.body);
});

//author
needle.get('http://localhost:3000/find-by-author?author=JK%20Rowling', (err, res) =>{
   console.log(res.body);
});