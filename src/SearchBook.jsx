import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import './App.css'
import BooksResult from './BooksResult'


export default class Searchbook extends Component {

  state = {
    query: '',
    books: []
  }
  searchBookFeatch = (query) => {
    if (query !== '') {
      BooksAPI.search(query)
        .then(books => { console.log(books); if (!books.error) this.setState({ books }) })
    }
  }

  handleChange = (event) => {
    this.setState({ query: event.target.value }, () => {
      this.searchBookFeatch(this.state.query)
    })
  }

  render = () => {

    return (
      <>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to='/' className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" onChange={this.handleChange} placeholder="Search by title or author" value={this.state.query} />
            </div>
          </div>
          <div className="search-books-results">
            <BooksResult books={this.state.books}
              updateShelf={this.props.updateShelf}
              booksShelf={this.props.booksShelf}

            />
          </div>
        </div>
      </>
    )
  }
} 