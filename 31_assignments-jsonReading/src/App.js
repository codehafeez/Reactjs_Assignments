import React from 'react';

function App() {
  // JSON data representing a list of books
  const booksJson = `
    [
      {
        "id": 1,
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee"
      },
      {
        "id": 2,
        "title": "1984",
        "author": "George Orwell"
      },
      {
        "id": 3,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald"
      }
    ]
  `;

  // Parse the JSON data into an array
  const books = JSON.parse(booksJson);

  return (
    <div>
      <h1>JSON Example</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
