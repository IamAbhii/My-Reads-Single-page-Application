import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import BooksShelf from './BooksShelf'

export default class ListOfBooks extends Component {

  render = () => {
    const typesOfShelf = [
      { type: 'currentlyReading' },
      { type: 'wantToRead' },
      { type: 'read' },
    ]
    const currentlyReading = this.props.books.filter(book => book.shelf === typesOfShelf[0].type)
    const wantToRead = this.props.books.filter(book => book.shelf === typesOfShelf[1].type)
    const read = this.props.books.filter(book => book.shelf === typesOfShelf[2].type)

    return (
      <>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <BooksShelf books={currentlyReading} updateShelf={this.props.updateShelf} />
                </div>
              </div>
            </div>
          </div>

          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want To Reading</h2>
                <div className="bookshelf-books">
                  <BooksShelf books={wantToRead} updateShelf={this.props.updateShelf} />
                </div>
              </div>
            </div>
          </div>

          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <BooksShelf books={read} updateShelf={this.props.updateShelf} />
                </div>
              </div>
            </div>
          </div>

          <div className="open-search">
            <Link to='/search' onClick={() => this.setState({ showSearchPage: true })}>Add a book</Link>
          </div>
        </div>
      </>
    )
  }
} 