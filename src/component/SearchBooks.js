import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Debounce } from 'react-throttle'
import * as BooksAPI from '../utils/BooksAPI'
import ShelfList from './ShelfList'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'

class SearchBooks extends Component{
  static propTypes = {
    upBooksToShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  } 

  state = {
      returnAPI: '',
      books:[]
    }

getAllBooks = () => {
    BooksAPI
      .getAll()
      .then((books) => this.setState({books}))
  }

  searchBooks(listBooks) {
    BooksAPI.search(listBooks).then((listBook) => {

      if(listBook.error && listBook.error ==="empty query") {
       this.setState({ returnAPI:'no' })

      } else {
        let newList = listBook.map((list) => { 
          return BooksAPI.get(list.id).then((books) => {
            return books
          })
        })

        Promise.all(newList).then((shelfBook)=> {
          this.setState({ 
            books: shelfBook, 
            returnAPI:'ok' 
          })
        })
       }
    })
  }

  submitQuery = (query) => {
    if (query === '' || query === undefined){
      return;
    } else {
      this.getAllBooks()
      this.searchBooks(query)
    }
  }

  render(){
    this.state.books.sort(sortBy('title'))

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
           <Debounce time="200" handler="onChange">
            <input 
              type="text" 
              placeholder="Search by title or author"
              onChange={(event)=> this.submitQuery(event.target.value)}
              value={this.state.query}/> 
          </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          {this.state.returnAPI === 'ok' && (
            <ShelfList 
             books={this.state.books} 
             upBooksToShelf={this.props.upBooksToShelf}/>
          )}
          {this.state.returnAPI === 'no' && (
            <div className="search-no-books-result"><h1>No Results</h1></div>
          )}
        </div>
      </div>
    )
  }
}

export default SearchBooks