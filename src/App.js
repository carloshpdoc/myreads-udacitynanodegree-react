import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import SearchBooks from './component/SearchBooks'
import ListBooks from './component/ListBooks'
import './App.css'

class BooksApp extends Component {
  state = {
   books :[]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books})
    })
  }

  upBooksToShelf = (book, shelf) => {
    book.shelf = shelf
    BooksAPI.update(book, shelf).then(
      this.setState((state)=> ({
          books: state.books.filter((bk)=> bk.id !== book.id ).concat([book])
      }))
    )
  }

  render() {
    return (
      <div className="app">
       <Route exact path="/" render={() => (
        <ListBooks
          books={this.state.books}
          upBooksToShelf={this.upBooksToShelf}
          />
      )}/>
      <Route path="/search" render={ ({ history }) => (
         <SearchBooks 
          upBooksToShelf={this.upBooksToShelf}
          books={this.state.books}
         />
      )}/>
      </div>
    )
  }
}

export default BooksApp
