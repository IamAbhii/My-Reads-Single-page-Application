import React, { Component } from 'react'




export default class BooksResult extends Component {

  iconStyle = (book) => {
    let comparedBook = this.props.booksShelf.find(b => b.id === book.id)
    if (comparedBook !== undefined) {
      if (comparedBook.shelf === 'currentlyReading') return 'currentlyReading'
      if (comparedBook.shelf === 'wantToRead') return 'wantToRead'
      if (comparedBook.shelf === 'read') return 'read'
    }
    return null
  }

  render() {

    return (
      <ol className="books-grid">
        {this.props.books.map(book => {
          return (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                  <div className={`book-shelf-changer ${this.iconStyle(book)}`}>
                    <select value={book.shelf} onChange={(e) => this.props.updateShelf(book, e.target.value)}>
                      <option value="move">Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          )
        })}
      </ol>
    )
  }
}