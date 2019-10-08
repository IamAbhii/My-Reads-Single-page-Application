import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBook from './SearchBook'
import ListOfBooks from './ListOfBooks'


class BooksApp extends React.Component {
  state = {

    books: [],
  }

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateShelf = (book, value) => {
    BooksAPI.update(book, value).then((data) => {
      BooksAPI.getAll().then((books) => {
        console.log(books)
        this.setState({ books })
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/search' render={() => {
          return (
            <SearchBook booksShelf={this.state.books} updateShelf={this.updateShelf} />
          )
        }} />
        <Route exact path='/' render={() => {
          return (
            <ListOfBooks books={this.state.books} updateShelf={this.updateShelf} />
          )
        }} />
      </div>
    )
  }
}

export default BooksApp
