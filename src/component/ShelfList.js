import React , { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class ShelfList extends Component {
	static propTypes = {
		upBooksToShelf: PropTypes.func.isRequired,
		books: PropTypes.array.isRequired
	}

	render() {
		const { books, upBooksToShelf } = this.props 
		
		return (
			<ol className="books-grid">
            {books.map(book => (
            	<Book 
            	  key={book.id} 
            	  book={book} 
            	  upBooksToShelf={upBooksToShelf}
            	/>
            ))} 
          </ol>
		);
	}
}

export default ShelfList