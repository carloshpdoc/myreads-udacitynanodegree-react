import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'
import PropTypes from 'prop-types'

class Book extends Component {
	static propTypes = {
		upBooksToShelf: PropTypes.func.isRequired,
		book: PropTypes.object.isRequired
	}

  handleSelect = (e)=> {
	e.preventDefault()
	this.props.upBooksToShelf(this.props.book, e.target.value)
  }

  render() {

  	const {book} = this.props

	return (
	  <li>
		<div className="book">
          <div className="book-top">
           <div className="book-cover" data-tip data-for={book.id} style={{ 
           	   width: 128, 
           	   height: 193, 
           	   backgroundImage: book.imageLinks ? `url(${book.imageLinks.thumbnail})` : "" }}>
           </div>
           <ReactTooltip id={book.id} type='info'>
              <ul>
            	 <li>Categories: {book.categories}</li>
            	 <li>Version: {book.contentVersion}</li>
            	 <li>Page Count: {book.pageCount}</li>
            	 <li>Language: {book.language==='en'?'English':book.language}</li>
            	 <li>Published Date: {book.publishedDate}</li>
            	 <li>Publisher: {book.publisher}</li>
              </ul>
           </ReactTooltip>
            <div className='book-shelf-changer'>
              <select defaultValue={book.shelf!==undefined?book.shelf:'move'} onChange={this.handleSelect}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently  Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option> 	
              </select>
             </div>
           </div>
           <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors ? book.authors.join(', '):""}</div>
        </div>
      </li>
	);
  }
}

export default Book