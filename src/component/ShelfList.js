import React , { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
import keyIndex from 'react-key-index'

class ShelfList extends Component {
	static propTypes = {
		upBooksToShelf: PropTypes.func.isRequired,
		books: PropTypes.array.isRequired
	}

	render() {
		const { books, upBooksToShelf } = this.props 
		let arr = keyIndex(books, 1)
		return (
			<ol className="books-grid">
            {arr.map(book => (
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