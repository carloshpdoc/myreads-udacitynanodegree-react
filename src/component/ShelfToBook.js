import React , { Component } from 'react'
import ShelfList from './ShelfList'
import PropTypes from 'prop-types'

class ShelfToBook extends Component {
   static propTypes = {
    upBooksToShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
  }
	
	render() {
		const { upBooksToShelf, title, books} = this.props

		return (
			<div className="bookshelf">
			 <h2 className="bookshelf-title">{title}</h2>
			  <div className="bookshelf-books">
			    <ShelfList 
			     books={books} 
			     upBooksToShelf={upBooksToShelf}
			    />
			  </div>
			</div>
		);
	}
}

export default ShelfToBook