import './App.css';
import { request, gql } from 'graphql-request'
import { useState } from 'react';
import Card from './card';

function App() {
  const [books, setBooks] = useState([])
  const query = gql`
  {
  books {
    id,
    name
  }
}`


  const handleClick = async () => {
    const data = await request('https://graphapitesting.herokuapp.com/graphql', query)
    setBooks(data.books)
    // alert(books[0].name)
    // books.forEach(el => {
    //   console.log(el.name)
    // })
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Click me to get all books!!!!</button>
        <ul>
          {books.length != 0 && <h3>Congratuations!!You know GraphQL works!! Here are books from server side Apollo:</h3>}
          {books.length != 0 && books.map(el => {
            return (
              <Card key={el.id} name={el.name}>
              </Card>
            )
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
