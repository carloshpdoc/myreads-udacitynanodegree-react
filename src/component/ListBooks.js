import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ShelfToBook from './ShelfToBook'
import PropTypes from 'prop-types'

class ListBooks extends Component{
	static propTypes = {
		upBooksToShelf: PropTypes.func.isRequired,
		books: PropTypes.array.isRequired
	} 

  render(){
  	const { upBooksToShelf,books } = this.props

    const shelves = [
	  {'title':'Currently Reading', 'value':'currentlyReading'  },
	  {'title':'Want To Read', 'value':'wantToRead'  },
	  {'title':'Read', 'value':'read'  },
	]
 
	return (
		<div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
            {shelves.map((shelf)=>(
              <ShelfToBook 
                key={shelf.value}
                title={shelf.title}
                books={books.filter((book) =>
              	book.shelf ===shelf.value)} 
                upBooksToShelf={upBooksToShelf}
              /> 
            ))}
            </div>
          </div>
          <Link className="open-search" to='/search'>
            Add a book
          </Link>
        </div>
	)
  }
}

export default ListBooks